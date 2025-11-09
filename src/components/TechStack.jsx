import { motion } from "framer-motion";

const techStack = [
  "HTML/CSS",
  "JavaScript",
  "MySQL",
  "SQL Server",
  "Flutter",
  "ASP.NET Core",
  "Windows Services",
  "AVEVA InTouch",
  "AVEVA System Platform",
  "C++",
  "Schneider PLCs",
  "Allen-Bradley PLCs",
  "Figma",
];

export default function TechStack() {
  return (
    <motion.section
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mt-4 border border-gray-300 bg-white p-6"
    >
      <h3 className="text-xl font-semibold">Tech Stack</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {techStack.map((s) => (
          <span
            key={s}
            className="px-3 py-1 bg-white border rounded text-sm shadow-sm"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
