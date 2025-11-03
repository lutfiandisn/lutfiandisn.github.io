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
    <section className="mt-8 border shadow-lg bg-white rounded-lg p-6">
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
    </section>
  );
}
