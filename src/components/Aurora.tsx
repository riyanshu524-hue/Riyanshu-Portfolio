import { motion } from "motion/react";

export default function Aurora() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">

      {/* Cyan */}
      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,255,.22) 0%, rgba(0,255,255,0) 70%)",
          filter: "blur(130px)",
          left: "-220px",
          top: "-150px",
        }}
        animate={{
          x: [0, 240, -100, 0],
          y: [0, 160, -120, 0],
          scale: [1, 1.18, 0.92, 1],
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blue */}
      <motion.div
        className="absolute w-[1100px] h-[1100px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(40,120,255,.18) 0%, rgba(40,120,255,0) 72%)",
          filter: "blur(150px)",
          right: "-300px",
          top: "8%",
        }}
        animate={{
          x: [0, -220, 150, 0],
          y: [0, -140, 170, 0],
          scale: [1, 0.9, 1.12, 1],
        }}
        transition={{
          duration: 44,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
            {/* Purple */}
      <motion.div
        className="absolute w-[1000px] h-[1000px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(170,90,255,.18) 0%, rgba(170,90,255,0) 70%)",
          filter: "blur(150px)",
          left: "20%",
          bottom: "-350px",
        }}
        animate={{
          x: [0, 180, -160, 0],
          y: [0, -180, 120, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 52,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft dark overlay so text stays readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(5,8,18,.15) 55%, rgba(5,8,18,.55) 100%)",
        }}
      />
    </div>
  );
}