import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-20 lg:py-28">
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-accent-500 font-display">
            {subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mt-3">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
