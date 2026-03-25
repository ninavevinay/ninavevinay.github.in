import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import Section from "./Section";
import { projects } from "../data";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [hovered, setHovered] = useState(null);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <Section id="projects" title="Projects" subtitle="Selected Work">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project, index) => (
          <motion.article
            key={project.title}
            className="glass rounded-3xl overflow-hidden group cursor-default relative"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -4 }}
            onHoverStart={() => setHovered(index)}
            onHoverEnd={() => setHovered(null)}
          >
            {/* Image */}
            <div className="overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <AnimatePresence>
                {hovered === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4 gap-3"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold flex items-center gap-1.5 hover:bg-white/25 transition"
                    >
                      <FiGithub size={12} /> Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-full bg-accent-500/80 backdrop-blur-sm text-white text-xs font-semibold flex items-center gap-1.5 hover:bg-accent-500 transition"
                      >
                        <FiExternalLink size={12} /> Live
                      </a>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Content */}
            <div className="p-6 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 group/title"
                  data-cursor
                >
                  <h3 className="text-base font-display font-semibold text-slate-900 dark:text-white leading-snug group-hover/title:text-accent-500 transition-colors">
                    {project.title}
                  </h3>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 p-1.5 rounded-lg text-slate-400 dark:text-white/40 hover:text-slate-700 dark:hover:text-white transition"
                  aria-label="GitHub"
                >
                  <FiArrowUpRight size={16} />
                </a>
              </div>
              <p className="text-slate-500 dark:text-white/55 text-sm leading-relaxed line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/8 text-slate-600 dark:text-blue/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {projects.length > 3 && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => {
              setShowAll((prev) => !prev);
              if (showAll) {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 rounded-full border border-slate-300 dark:border-white/20 text-sm font-semibold text-slate-700 dark:text-white/80 hover:bg-slate-100 dark:hover:bg-white/8 transition-all active:scale-95 shadow-sm hover:shadow-md"
            data-cursor
          >
            {showAll ? "Show Fewer Projects" : `View All Projects (${projects.length})`}
          </button>
        </div>
      )}
    </Section>
  );
}
