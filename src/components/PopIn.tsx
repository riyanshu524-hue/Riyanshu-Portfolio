import { motion, type Variants } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function getLow() {
  if (typeof document === "undefined") return false;
  return document.documentElement.dataset.perf === "low";
}

/** Lightweight scroll-reveal — disabled when perf-mode is "low". */
export default function PopIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [low, setLow] = useState(false);
  useEffect(() => {
    setLow(getLow());
    const h = () => setLow(getLow());
    window.addEventListener("perf-mode-change", h);
    return () => window.removeEventListener("perf-mode-change", h);
  }, []);

  if (low) return <div className={className}>{children}</div>;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
