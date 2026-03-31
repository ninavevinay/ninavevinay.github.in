import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 app-gradient" />
      <div className="absolute inset-0 grid-overlay" />
      <motion.div
        className="absolute -left-44 top-16 h-[460px] w-[460px] rounded-full bg-accent-500/12 blur-3xl"
        animate={{ y: [0, 42, 0], x: [0, 16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-140px] top-[-100px] h-[420px] w-[420px] rounded-full bg-purple-500/12 blur-3xl"
        animate={{ y: [0, 34, 0], x: [0, -14, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-160px] left-1/3 h-[460px] w-[460px] rounded-full bg-emerald-500/10 blur-3xl"
        animate={{ y: [0, -34, 0], x: [0, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 noise-overlay" />
    </div>
  );
}
