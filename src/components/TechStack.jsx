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

  const colorMap = {
    React: "text-cyan-400",
    TailwindCSS: "text-sky-400",
    "Node.js": "text-green-500",
    "Express.js": "text-gray-400",
    Python: "text-yellow-400",
    MySQL: "text-blue-500",
    MongoDB: "text-green-400",
    PostgreSQL: "text-blue-400",
    LangChain: "text-purple-400",
    TypeScript: "text-blue-500",
    Docker: "text-blue-400",
    "Git & GitHub": "text-orange-400",
    Figma: "text-pink-400",
  };

  return (
    <Section id="stack" title="Tech Stack" subtitle="Toolbox">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {techStack.map((item, index) => {
          const Icon = iconMap[item.name];

          return (
            <motion.div
              key={`${item.name}-${index}`} // ✅ FIXED UNIQUE KEY
              className="glass rounded-2xl p-6 flex flex-col gap-4 
              hover:shadow-glow hover:-translate-y-1 
              transition duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {/* Icon */}
              <div className="flex items-center justify-between">
                <div
                  className={`p-3 rounded-xl bg-slate-100/80 dark:bg-white/5 
                  ${colorMap[item.name] || "text-accent-500"}
                  group-hover:scale-110 transition`}
                >
                  {Icon ? <Icon size={26} /> : <span>⚙️</span>}
                </div>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-display text-slate-900 dark:text-white">
                  {item.name}
                </h3>

                {item.description && (
                  <p className="mt-2 text-sm text-slate-600 dark:text-white/65">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}