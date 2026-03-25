import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 app-gradient" />
      <motion.div
        className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-accent-500/10 blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-120px] top-[-80px] h-[360px] w-[360px] rounded-full bg-purple-500/10 blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-120px] left-1/3 h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 noise-overlay" />
    </div>
  );
}
