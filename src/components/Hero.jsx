import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiMail, FiGithub, FiDownload, FiStar } from "react-icons/fi";
import { profile, socialLinks } from "../data";
import { useRef } from "react";

const containerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVars = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative overflow-hidden min-h-screen pt-24 pb-16 flex items-center">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/20 blur-[120px] animate-pulseGlow mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-purple-600/20 blur-[100px] animate-pulseGlow mix-blend-screen" />
      </motion.div>

      <div className="max-w-7xl w-full mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-20 items-center">

          {/* Main Content */}
          <motion.div
            variants={containerVars}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <motion.div variants={itemVars}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-500/30 text-accent-600 dark:text-accent-400 text-xs font-semibold uppercase tracking-widest shadow-glow backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                </span>
                {profile.title}
              </div>
            </motion.div>

            <motion.h1
              variants={itemVars}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[1.05] tracking-tight"
            >
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-accent-500 via-sky-400 to-purple-500 bg-clip-text text-transparent transform-gpu hover:scale-[1.02] transition-transform duration-500 inline-block">
                {profile.name.split(" ")[0]}
              </span>
              {" "}
              <span className="text-slate-900 dark:text-white relative">
                {profile.name.split(" ")[1]}
                <motion.span
                  className="absolute -right-8 -top-8 text-yellow-400"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <FiStar size={32} className="opacity-0 lg:opacity-100" />
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVars}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-body"
            >
              {profile.intro}
            </motion.p>

            <motion.div variants={itemVars} className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="group relative px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold overflow-hidden transition-all hover:scale-105 shadow-xl ring-2 ring-transparent hover:ring-accent-500/50" data-cursor>
                <span className="relative z-10 flex items-center gap-2">
                  Explore Work <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-accent-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              </a>

              <a href={profile.resumeUrl} download="Vinay_Ninave_Resume.pdf" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full glass border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-semibold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-white/5 transition-all hover:scale-105 shadow-lg" data-cursor>
                <FiDownload /> Resume
              </a>
            </motion.div>

            <motion.div variants={itemVars} className="flex items-center gap-6 pt-8">
              {socialLinks.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.name}
                    href={s.name === "Email" ? `mailto:${profile.email}` : s.href}
                    target={s.name !== "Email" ? "_blank" : undefined}
                    rel="noreferrer"
                    className="relative group p-3 rounded-full glass hover:bg-accent-500/10 transition-colors border border-transparent hover:border-accent-500/30"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    data-cursor
                  >
                    <Icon size={22} className="text-slate-600 dark:text-slate-300 group-hover:text-accent-500 transition-colors" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Profile Image / 3D Element */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
            className="flex justify-center relative perspective-1000 mt-12 lg:mt-0"
          >
            <motion.div 
              whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md aspect-[4/5] rounded-[40px] p-2 glass gradient-border shadow-2xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/20 to-purple-500/20 rounded-[40px] blur-xl -z-10 group-hover:opacity-100 transition-opacity" />
              <img
                src="/profile.jpeg"
                alt={profile.name}
                className="rounded-[32px] w-full h-full object-cover shadow-inner"
              />



              {/* Floating Element 1*/}
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute -right-8 bottom-24 glass px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-white/20"
                style={{ translateZ: 80 }}
              >
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </div>
                <span className="text-sm font-semibold text-slate-800 dark:text-white/90">Available for Work</span>
              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
