import { motion } from "framer-motion";
import { useMemo } from "react";
import {
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiLangchain,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiDocker,
  SiGithub,
  SiFigma,
  SiMysql,
  SiPython,
} from "react-icons/si";

import { techStack } from "../data";
import Section from "./Section";

const containerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVars = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 15 } },
};

export default function TechStack() {

  const iconMap = useMemo(() => ({
    React: SiReact,
    TailwindCSS: SiTailwindcss,
    "Node.js": SiNodedotjs,
    "Express.js": SiExpress,
    Python: SiPython,
    MySQL: SiMysql,
    MongoDB: SiMongodb,
    PostgreSQL: SiPostgresql,
    LangChain: SiLangchain,
    TypeScript: SiTypescript,
    Docker: SiDocker,
    "Git & GitHub": SiGithub,
    Figma: SiFigma,
  }), []);

  return (
    <Section id="stack" title="Tech Stack" subtitle="My Toolbox">
      <motion.div 
        variants={containerVars}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6"
      >
        {techStack.map((item, index) => {
          const Icon = iconMap[item.name];

          return (
            <motion.div
              key={`${item.name}-${index}`}
              variants={itemVars}
              whileHover={{ 
                y: -6, 
                scale: 1.05, 
                transition: { type: "spring", stiffness: 300, damping: 20 } 
              }}
              className="relative group cursor-pointer h-full"
            >
              {/* Glow Behind */}
              <div className="absolute inset-0 bg-accent-500/0 group-hover:bg-accent-500/20 rounded-2xl blur-xl transition-colors duration-500" />
              
              <div className="relative glass rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 h-full border border-slate-200/40 dark:border-white/10 shadow-sm group-hover:border-accent-500/50 group-hover:shadow-glow transition-all duration-300 z-10 overflow-hidden bg-white/40 dark:bg-slate-900/40 backdrop-blur-md">
                
                {/* Background Pattern Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-500 to-transparent pointer-events-none" />

                <div className="p-4 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:text-accent-500 group-hover:bg-accent-500/10 transition-colors duration-300 shadow-inner group-hover:scale-110">
                  {Icon ? <Icon size={32} /> : <span>⚙️</span>}
                </div>

                <div>
                  <h3 className="text-sm font-bold font-display text-slate-800 dark:text-slate-200 group-hover:text-accent-500 transition-colors">
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}