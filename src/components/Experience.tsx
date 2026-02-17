import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceType {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}

const experiences: ExperienceType[] = [
  {
    company: 'Actemium Systems Indonesia',
    position: 'Automation Engineer',
    period: 'March 2024 – Present',
    responsibilities: [
      'Performed I/O tag assignment and loop testing for PLC upgrade projects',
      'Migrated PLC logic to Allen-Bradley ControlLogix and CompactLogix',
      'Designed HMI using FactoryTalk View SE and conducted commissioning tests',
      'Developed Windows Services for MES-ERP integration and Oracle PL/SQL automation'
    ]
  },
  {
    company: 'Actemium Systems Indonesia',
    position: 'Jr. Automation Engineer',
    period: 'September 2022 – March 2024',
    responsibilities: [
      'Developed OEE monitoring systems with AVEVA Edge and SQL Server',
      'Built REST APIs with ASP.NET Core and Flutter mobile apps for monitoring',
      'Designed SCADA systems using C++ and Schneider PLCs'
    ]
  },
  {
    company: 'Yokogawa Indonesia',
    position: 'Support Engineer (Internship)',
    period: 'January – March 2022',
    responsibilities: [
      'Generated HMI graphics following project specifications',
      'Performed product visual inspections and quality checks using company standards',
      'Collaborated with engineering teams to review and correct documentation errors'
    ]
  }
];

export default function Experience(): JSX.Element {
  const { ref, inView } = useInView({ once: true, amount: 0.2 });

  return (
    <section id="experience" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-center text-slate-400 mb-16 text-lg">
            My professional journey in automation engineering
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative bg-slate-950/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300"
              >
                {/* Timeline dot */}
                <div className="absolute -left-3 top-8 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-slate-900"></div>
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-200 mb-1">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-blue-400 mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-lg">{exp.company}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-400 md:text-right">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
