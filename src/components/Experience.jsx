const experiences = [
  {
    company: "Actemium Systems Indonesia",
    logoUrl: "/actemium-logo.png",
    roles: [
      {
        title: "Automation Engineer",
        period: "March 2024 – Present",
        bullets: [
          "Performed I/O tag assignment and loop testing for PLC upgrade projects.",
          "Migrated PLC logic to Allen-Bradley ControlLogix and CompactLogix.",
          "Designed HMI using FactoryTalk View SE and conducted commissioning tests.",
          "Developed Windows Services for MES-ERP integration and Oracle PL/SQL automation.",
        ],
      },
      {
        title: "Jr. Automation Engineer",
        period: "September 2022 – March 2024",
        bullets: [
          "Developed OEE monitoring systems with AVEVA Edge and SQL Server.",
          "Built REST APIs with ASP.NET Core and Flutter mobile apps for monitoring.",
          "Designed SCADA systems using C++ and Schneider PLCs.",
        ],
      },
    ],
  },
  {
    company: "Yokogawa Indonesia",
    logoUrl: "/yokogawa-logo.png",
    roles: [
      {
        title: "Support Engineer (Internship)",
        period: "January – March 2022",
        bullets: [
          "Generated HMI graphics following project specifications.",
          "Performed product visual inspections and quality checks using company standards.",
          "Collaborated with engineering teams to review and correct documentation errors.",
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="bg-white border rounded-2xl shadow-sm p-5 hover:shadow-md transition-all duration-300"
          >
            <img
              src={exp.logoUrl}
              alt={exp.company}
              className="w-15 h-15 shadow-md rounded-lg"
            />
            <h4 className="text-lg font-bold text-indigo-700 mt-3">
              {exp.company}
            </h4>

            <div className="mt-3 space-y-4">
              {exp.roles.map((role, i) => (
                <div key={i}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-semibold text-gray-800">
                      {role.title}
                    </span>
                    <span className="text-sm text-gray-500">{role.period}</span>
                  </div>
                  <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                    {role.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
