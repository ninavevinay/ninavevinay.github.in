import { motion } from "framer-motion";
import Section from "./Section";
import { gallery } from "../data";

export default function Gallery() {
  const extended = [...gallery, ...gallery];

  return (
    <Section id="gallery" title="Gallery" subtitle="Snapshots">
      <div className="marquee overflow-x-hidden relative py-8">
        {/* Gradient fades on left and right for smooth entry/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-[#0b0d12] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-[#0b0d12] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="marquee-track flex gap-8 items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.8 }}
        >
          {extended.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              className="group glass rounded-3xl overflow-hidden shadow-sm w-[280px] sm:w-[320px] lg:w-[380px] shrink-0 border border-slate-200/50 dark:border-white/10 hover:shadow-glow transition-all duration-300"
              aria-hidden={index >= gallery.length}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="overflow-hidden relative h-60 w-full">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                   <p className="text-lg font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
