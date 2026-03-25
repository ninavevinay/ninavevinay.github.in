import { motion } from "framer-motion";
import { skills } from "../data";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="Profile">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-6 shadow-glass"
        >
          <img
            src="/about.jpeg"
            alt="Profile"
            className="rounded-2xl w-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-slate-700 dark:text-white/70 leading-relaxed">
            I’m a Full Stack Developer with experience in building modern, scalable web applications using React.js and Node.js. I enjoy creating efficient, user-friendly solutions and writing clean, maintainable code. My interests extend into Cybersecurity, where I focus on building secure applications and understanding best practices for protecting systems and data. I’m also exploring AI-driven technologies to develop smarter, more intelligent applications. I’m continuously learning and improving my skills to stay updated with evolving technologies and industry trends.
          </p>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-800 dark:text-white/80">{skill.name}</span>
                  <span className="text-slate-600 dark:text-white/60">{skill.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200 dark:bg-white/10">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-accent-500 to-purple-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
