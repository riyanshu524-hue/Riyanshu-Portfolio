import { type CSSProperties } from "react";

type Props = {
  size?: number;
  hue?: string; // any CSS color
  hue2?: string;
  className?: string;
  style?: CSSProperties;
  blur?: number;
};

/** Pure CSS 3D-looking glassy orb. GPU cheap, no deps. */
export default function Orb3D({
  size = 220,
  hue = "oklch(0.72 0.21 35)",
  hue2 = "oklch(0.55 0.2 300)",
  className = "",
  style,
  blur = 0,
}: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none select-none ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle at 30% 28%, oklch(1 0 0 / 0.85) 0%, ${hue} 28%, ${hue2} 75%, oklch(0.05 0.02 270) 100%)`,
        boxShadow: `inset -${size * 0.18}px -${size * 0.22}px ${size * 0.5}px oklch(0 0 0 / 0.55), inset ${size * 0.06}px ${size * 0.05}px ${size * 0.15}px oklch(1 0 0 / 0.25), 0 ${size * 0.2}px ${size * 0.4}px oklch(0 0 0 / 0.5), 0 0 ${size * 0.4}px ${hue}55`,
        filter: blur ? `blur(${blur}px)` : undefined,
        transform: "translateZ(0)",
        ...style,
      }}
    />
  );
}

/** Glassy torus ring (pseudo-3D via radial + conic). */
export function Ring3D({
  size = 240,
  className = "",
  style,
}: {
  size?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `conic-gradient(from 0deg, oklch(0.72 0.21 35), oklch(0.55 0.2 300), oklch(0.78 0.18 60), oklch(0.72 0.21 35))`,
        mask: `radial-gradient(circle, transparent ${size * 0.34}px, #000 ${size * 0.36}px, #000 ${size * 0.48}px, transparent ${size * 0.5}px)`,
        WebkitMask: `radial-gradient(circle, transparent ${size * 0.34}px, #000 ${size * 0.36}px, #000 ${size * 0.48}px, transparent ${size * 0.5}px)`,
        filter: "blur(0.3px) drop-shadow(0 20px 40px oklch(0 0 0 / 0.5))",
        ...style,
      }}
    />
  );
}
