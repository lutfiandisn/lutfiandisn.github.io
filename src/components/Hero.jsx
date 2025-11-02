import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col sm:flex-row items-center sm:items-start gap-6 py-8">
      <img
        src="/profile.png"
        alt="Profile"
        className="w-28 h-28 rounded-full object-cover shadow-lg border-4 border-indigo-200"
      />
      <div>
        <motion.h1
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-bold"
        >
          Lutfiandi Satriawan Nugraha
        </motion.h1>
        <p className="text-gray-600 mt-1">
          SCADA & Automation Engineer • Flutter Developer • Backend Developer
        </p>
        <p className="mt-3 text-sm text-gray-700 max-w-xl">
          Engineering industrial automation systems and building cross-platform
          apps & APIs. Based in West Java, Indonesia.
        </p>
        <div className="mt-4 flex gap-3">
          <a
            href="mailto:business.lutfiandisn@gmail.com?subject=Business%20Inquiry"
            className="px-4 py-2 bg-blue-700 text-white border rounded"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
