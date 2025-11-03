const projects = [
  {
    name: "PLC Upgrade & Modernization",
    desc: "Migrated legacy PLC systems to modern ControlLogix and CompactLogix architectures, improving reliability.",
  },
  {
    name: "MES & ERP Integration Service",
    desc: "Windows Service automating data synchronization between MES and ERP using secure sFTP and Oracle PL/SQL.",
  },
  {
    name: "OEE Monitoring Dashboard",
    desc: "Real-time OEE visualization using AVEVA System Platform 2020 and Microsoft SQL Server.",
  },
  {
    name: "Mobile Monitoring App",
    desc: "Flutter-based cross-platform app for industrial monitoring with map visualization and live updates.",
  },
];

export default function Projects() {
  return (
    <section className="mt-8 border shadow-lg bg-white rounded-lg p-6">
      <h3 className="text-xl font-semibold">Projects</h3>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
        {projects.map((p) => (
          <div key={p.name} className="bg-white p-4 border rounded shadow-sm">
            <h4 className="font-semibold">{p.name}</h4>
            <p className="text-sm text-gray-700 mt-1">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
