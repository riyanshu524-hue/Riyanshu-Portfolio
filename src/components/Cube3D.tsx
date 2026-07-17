/**
 * Pure CSS 3D rotating cube — no deps, GPU-cheap.
 * Auto-spins; pointer drag/hover gently steers.
 */
import { useEffect, useRef, useState } from "react";

export default function Cube3D({ size = 180, label = "WOG" }: { size?: number; label?: string }) {
  const [rot, setRot] = useState({ x: -22, y: 28 });
  const auto = useRef({ x: -22, y: 28 });
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let id = 0;
    const tick = () => {
      if (!dragging.current) {
        auto.current.y += 0.25;
        setRot({ ...auto.current });
      }
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  const faceBase: React.CSSProperties = {
    position: "absolute",
    width: size,
    height: size,
    display: "grid",
    placeItems: "center",
    fontFamily: "var(--font-display)",
    fontSize: size * 0.32,
    letterSpacing: "-0.04em",
    border: "1px solid oklch(0.97 0.015 80 / 0.16)",
    background:
      "linear-gradient(135deg, oklch(0.97 0.015 80 / 0.12), oklch(0.72 0.21 35 / 0.18))",
    backdropFilter: "blur(14px)",
    color: "var(--cream)",
    boxShadow: "inset 0 0 60px oklch(0.72 0.21 35 / 0.15), 0 0 40px oklch(0.72 0.21 35 / 0.2)",
  };

  const half = size / 2;
  const faces = [
    { t: `rotateY(0deg) translateZ(${half}px)`, c: label },
    { t: `rotateY(90deg) translateZ(${half}px)`, c: "AI" },
    { t: `rotateY(180deg) translateZ(${half}px)`, c: "/" },
    { t: `rotateY(-90deg) translateZ(${half}px)`, c: "DEV" },
    { t: `rotateX(90deg) translateZ(${half}px)`, c: "★" },
    { t: `rotateX(-90deg) translateZ(${half}px)`, c: "∞" },
  ];

  return (
    <div
      style={{ width: size, height: size, perspective: 1200 }}
      onPointerDown={(e) => {
        dragging.current = true;
        last.current = { x: e.clientX, y: e.clientY };
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
      }}
      onPointerUp={() => (dragging.current = false)}
      onPointerMove={(e) => {
        if (!dragging.current) return;
        const dx = e.clientX - last.current.x;
        const dy = e.clientY - last.current.y;
        last.current = { x: e.clientX, y: e.clientY };
        auto.current.y += dx * 0.4;
        auto.current.x -= dy * 0.4;
        setRot({ ...auto.current });
      }}
      className="cursor-grab active:cursor-grabbing touch-none"
    >
      <div
        style={{
          position: "relative",
          width: size,
          height: size,
          transformStyle: "preserve-3d",
          transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
          transition: "transform 0.05s linear",
        }}
      >
        {faces.map((f, i) => (
          <div key={i} style={{ ...faceBase, transform: f.t }}>
            {f.c}
          </div>
        ))}
      </div>
    </div>
  );
}
