import { motion } from "motion/react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Center Glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[180px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      {/* Left Orb */}
      <motion.div
        className="absolute left-[-200px] top-[20%] h-[700px] w-[700px] rounded-full bg-cyan-400/35 blur-[150px]"
        animate={{
          x: [0, 180, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Right Orb */}
      <motion.div
        className="absolute right-[-180px] top-[10%] h-[650px] w-[650px] rounded-full bg-blue-500/30 blur-[150px]"
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom Orb */}
      <motion.div
        className="absolute bottom-[-250px] left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/25 blur-[200px]"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
      />

    </div>
  );
}