import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="mt-8 border shadow-lg bg-white rounded-lg p-6"
    >
      <h2 className="text-2xl font-semibold">About Me</h2>
      <p className="mt-2 text-gray-700">
        I'm an enthusiastic and driven engineer passionate about bridging
        industrial automation with modern software technologies. I design and
        develop SCADA systems, PLC programs, mobile apps with Flutter, and
        backend APIs for industrial integrations.
      </p>
    </motion.section>
  );
}
