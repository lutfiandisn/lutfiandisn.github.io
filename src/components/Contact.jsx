import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
    initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="mt-8 border shadow-lg bg-white rounded-lg p-6">
      <h3 className="text-xl font-semibold">Contact</h3>
      <p className="mt-2 text-gray-700">
        Email:{" "}
        <a
          className="text-indigo-600"
          href="mailto:business.lutfiandisn@gmail.com?subject=Business%20Inquiry"
        >
          business.lutfiandisn@gmail.com
        </a>
      </p>
      <p className="mt-2 text-gray-700">
        LinkedIn:{" "}
        <a
          className="text-indigo-600"
          href="https://www.linkedin.com/in/lutfiandisn/"
        >
          linkedin.com/in/lutfiandisn
        </a>
      </p>
    </motion.section>
  );
}
