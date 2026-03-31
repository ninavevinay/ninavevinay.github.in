import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowUpRight, FiCode } from "react-icons/fi";
import Section from "./Section";
import { projects } from "../data";

const containerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVars = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [hovered, setHovered] = useState(null);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <Section id="projects" title="Projects" subtitle="Selected Work">
      <motion.div 
        variants={containerVars}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={cardVars}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-[32px] overflow-hidden group cursor-default relative shadow-glass border border-slate-200/50 dark:border-white/10"
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHovered(index)}
              onHoverEnd={() => setHovered(null)}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Image Container */}
              <div className="overflow-hidden relative h-56 w-full bg-slate-100 dark:bg-slate-800/50">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  animate={{ scale: hovered === index ? 1.08 : 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                {/* Overlay on hover */}
                <AnimatePresence>
                  {hovered === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex items-end p-5 gap-3 backdrop-blur-[2px]"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-semibold flex items-center gap-2 hover:bg-white/30 transition-all hover:scale-105"
                      >
                        <FiGithub size={16} /> Code
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="px-5 py-2.5 rounded-full bg-accent-500/90 backdrop-blur-md text-slate-900 font-bold text-sm flex items-center gap-2 hover:bg-accent-400 transition-all hover:scale-105 shadow-glow"
                        >
                          <FiExternalLink size={16} /> Live
                        </a>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Content Container */}
              <div className="p-7 space-y-4 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl h-full line-clamp-none">
                <div className="flex items-start justify-between gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 group/title"
                    data-cursor
                  >
                    <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white leading-tight group-hover/title:text-accent-500 transition-colors flex items-center gap-2">
                       {project.title}
                    </h3>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-white/60 hover:text-accent-500 dark:hover:text-accent-400 transition-all hover:scale-110 hover:shadow-md"
                    aria-label="GitHub"
                  >
                    <FiArrowUpRight size={18} />
                  </a>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300/80 text-sm leading-relaxed line-clamp-3 font-body">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg bg-slate-200/50 dark:bg-white/10 text-slate-700 dark:text-slate-200 border border-slate-300/50 dark:border-white/5 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {projects.length > 3 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex justify-center"
        >
          <button
            type="button"
            onClick={() => {
              setShowAll((prev) => !prev);
              if (showAll) {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative px-8 py-4 rounded-full glass border border-slate-300 dark:border-white/20 text-sm font-bold text-slate-800 dark:text-white transition-all active:scale-95 shadow-lg overflow-hidden"
            data-cursor
          >
             <span className="relative z-10 flex items-center gap-2">
               {showAll ? "Show Fewer Projects" : `Explore All Work (${projects.length})`}
               <FiCode className="group-hover:rotate-12 transition-transform" />
             </span>
             <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </button>
        </motion.div>
      )}
    </Section>
  );
}
