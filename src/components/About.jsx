import { motion } from "framer-motion";
import { FiCode, FiServer, FiShield, FiCpu, FiDatabase } from "react-icons/fi";
import { skills } from "../data";
import Section from "./Section";

const containerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVars = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  const skillMeta = {
    Frontend: {
      icon: FiCode,
      color: "from-sky-500 to-cyan-400",
      hint: "UI engineering, performance, and clean component systems.",
    },
    Backend: {
      icon: FiServer,
      color: "from-emerald-500 to-green-400",
      hint: "APIs, auth, scalable services, and clean architecture.",
    },
    FastAPI: {
      icon: FiShield,
      color: "from-violet-500 to-purple-400",
      hint: "High-performance Python APIs with robust validation.",
    },
    GenAI: {
      icon: FiCpu,
      color: "from-fuchsia-500 to-pink-400",
      hint: "LLM apps, RAG pipelines, and prompt engineering.",
    },
    Database: {
      icon: FiDatabase,
      color: "from-amber-500 to-yellow-400",
      hint: "Schema design, indexes, and reliable data modeling.",
    },
  };

  return (
    <Section id="about" title="About Me" subtitle="Profile">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-center">
        
        {/* Profile Image with Parallax & Hover Effect */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotateY: -10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          className="relative perspective-1000 group mx-auto w-full max-w-sm lg:max-w-full"
        >
          <motion.div 
            whileHover={{ scale: 1.02, rotateX: 5, rotateY: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass rounded-[40px] p-3 shadow-glass gradient-border relative z-10"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/20 to-purple-500/20 rounded-[40px] blur-2xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="/about.jpeg"
              alt="Profile"
              className="rounded-[32px] w-full aspect-[4/5] object-cover shadow-inner"
            />
          </motion.div>
        </motion.div>

        {/* Text and Skills */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          <motion.p variants={itemVars} className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-body">
            I’m a Full Stack Developer with experience in building modern, scalable web applications using React.js and Node.js. I enjoy creating efficient, user-friendly solutions and writing clean, maintainable code. My interests extend into Cybersecurity, where I focus on building secure applications and understanding best practices for protecting systems and data. I’m also exploring AI-driven technologies to develop smarter, more intelligent applications. I’m continuously learning and improving my skills to stay updated with evolving technologies and industry trends.
          </motion.p>

          <motion.div variants={containerVars} className="grid sm:grid-cols-2 gap-5">
            {skills.map((skill) => {
              const meta = skillMeta[skill.name] || {};
              const Icon = meta.icon;
              const gradient = meta.color || "from-accent-500 to-purple-500";
              const hint = meta.hint || "Building modern, reliable software.";

              return (
                <motion.div
                  variants={itemVars}
                  key={skill.name}
                  className="glass rounded-2xl p-6 shadow-sm border border-slate-200/50 dark:border-white/10 hover:border-accent-500/50 hover:shadow-glow transition-all duration-300 group bg-white/40 dark:bg-slate-900/40 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 dark:from-white/5 dark:to-white/0 pointer-events-none" />
                  
                  <div className="flex items-start justify-between gap-3 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:text-accent-500 group-hover:bg-accent-500/10 group-hover:scale-110 transition-all shadow-inner">
                        {Icon ? <Icon size={20} /> : <span>★</span>}
                      </div>
                      <div>
                        <p className="font-display font-bold text-slate-900 dark:text-white leading-tight group-hover:text-accent-500 transition-colors">
                          {skill.name}
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                          {hint}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-black text-slate-800 dark:text-white/80 tracking-wide bg-slate-200/50 dark:bg-white/10 px-2 py-1 rounded-md">
                      {skill.value}%
                    </span>
                  </div>

                  <div className="mt-5 relative z-10">
                    <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-inner">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${gradient} relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                      >
                         <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-l from-white/40 to-transparent blur-[2px]" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
