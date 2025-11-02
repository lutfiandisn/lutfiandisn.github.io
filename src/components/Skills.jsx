const skills = [
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

export default function Skills() {
  return (
    <section className="mt-8">
      <h3 className="text-xl font-semibold">Skills</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {skills.map((s) => (
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
