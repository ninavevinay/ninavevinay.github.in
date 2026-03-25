import { motion } from "framer-motion";
import Section from "./Section";
import { gallery } from "../data";

export default function Gallery() {
  const extended = [...gallery, ...gallery];

  return (
    <Section id="gallery" title="Gallery" subtitle="Snapshots">
      <div className="marquee">
        <motion.div
          className="marquee-track"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          {extended.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="group glass rounded-2xl overflow-hidden shadow-glass w-[260px] sm:w-[300px] lg:w-[340px]"
              aria-hidden={index >= gallery.length}
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-700 dark:text-white/70">{item.title}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
