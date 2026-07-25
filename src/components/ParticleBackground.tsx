import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const STAR_COUNT = 700;
const AREA = 24;
const CONNECTION_DISTANCE = 2.2;

type Particle = {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
};

function Stars({
  particles,
}: {
  particles: React.MutableRefObject<Particle[]>;
}) {
  const points = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const arr = new Float32Array(STAR_COUNT * 3);

    particles.current = [];

    for (let i = 0; i < STAR_COUNT; i++) {
      const x = (Math.random() - 0.5) * AREA;
      const y = (Math.random() - 0.5) * AREA;
      const z = (Math.random() - 0.5) * 8;

      arr[i * 3] = x;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = z;

      particles.current.push({
        position: new THREE.Vector3(x, y, z),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.012,
          (Math.random() - 0.5) * 0.012,
          (Math.random() - 0.5) * 0.003
        ),
      });
    }

    return arr;
  }, [particles]);

  useFrame(({ mouse }) => {
    const pos =
      points.current.geometry.attributes.position.array as Float32Array;

    const mx = mouse.x * AREA * 0.5;
    const my = mouse.y * AREA * 0.5;

    for (let i = 0; i < STAR_COUNT; i++) {
      const p = particles.current[i];

      p.position.add(p.velocity);

      if (p.position.x > AREA / 2 || p.position.x < -AREA / 2)
        p.velocity.x *= -1;

      if (p.position.y > AREA / 2 || p.position.y < -AREA / 2)
        p.velocity.y *= -1;

      if (p.position.z > 4 || p.position.z < -4)
        p.velocity.z *= -1;

      const dx = p.position.x - mx;
      const dy = p.position.y - my;

      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 3 && dist > 0.001) {
        const force = (3 - dist) * 0.02;

        p.position.x += (dx / dist) * force;
        p.position.y += (dy / dist) * force;
      }

      pos[i * 3] = p.position.x;
      pos[i * 3 + 1] = p.position.y;
      pos[i * 3 + 2] = p.position.z;
    }

    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={STAR_COUNT}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#52dbff"
        size={0.05}
        transparent
        opacity={0.95}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}
function Connections({
  particles,
}: {
  particles: React.MutableRefObject<Particle[]>;
}) {
  const line = useRef<THREE.LineSegments>(null!);

  const geometry = useMemo(() => new THREE.BufferGeometry(), []);

  const material = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: "#52dbff",
        transparent: true,
        opacity: 0.12,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    []
  );

  useFrame(() => {
    if (!line.current) return;

    const vertices: number[] = [];
    const stars = particles.current;

    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const a = stars[i].position;
        const b = stars[j].position;

        if (
          a.distanceToSquared(b) <
          CONNECTION_DISTANCE * CONNECTION_DISTANCE
        ) {
          vertices.push(
            a.x, a.y, a.z,
            b.x, b.y, b.z
          );
        }
      }
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    geometry.computeBoundingSphere();
  });

  return (
    <lineSegments
      ref={line}
      geometry={geometry}
      material={material}
    />
  );
}
function GlowOrb({
  color,
  position,
  speed,
}: {
  color: string;
  position: [number, number, number];
  speed: number;
}) {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;

    mesh.current.position.x = position[0] + Math.sin(t) * 2;
    mesh.current.position.y = position[1] + Math.cos(t * 0.9) * 1.5;
    mesh.current.position.z = position[2] + Math.sin(t * 0.5);
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1.8, 32, 32]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.08}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}
export default function ParticleBackground() {
  const particles = useRef<Particle[]>([]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 70,
        }}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <color attach="background" args={["#020305"]} />

        <fog attach="fog" args={["#020305", 10, 30]} />

        <ambientLight intensity={0.2} />

        <pointLight
          position={[8, 8, 8]}
          intensity={20}
          color="#52dbff"
        />

        <pointLight
          position={[-8, -8, 4]}
          intensity={12}
          color="#1d6dff"
        />

        <GlowOrb
          color="#39d4ff"
          position={[-5, 2, -3]}
          speed={0.25}
        />

        <GlowOrb
          color="#3f7cff"
          position={[6, -3, -4]}
          speed={0.18}
        />

        <GlowOrb
          color="#6af8ff"
          position={[0, 5, -5]}
          speed={0.12}
        />

        <Connections particles={particles} />

        <Stars particles={particles} />
      </Canvas>
    </div>
  );
}