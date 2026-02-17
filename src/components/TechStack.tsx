import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: ['C++', 'JavaScript', 'HTML/CSS']
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'SQL Server', 'Oracle PL/SQL']
  },
  {
    category: 'Mobile & Backend',
    skills: ['Flutter', 'ASP.NET Core', 'REST APIs', 'Windows Services']
  },
  {
    category: 'SCADA & HMI',
    skills: ['AVEVA InTouch', 'AVEVA System Platform', 'AVEVA Edge', 'FactoryTalk View SE']
  },
  {
    category: 'PLCs',
    skills: ['Allen-Bradley ControlLogix', 'Allen-Bradley CompactLogix', 'Schneider PLCs']
  },
  {
    category: 'Design & Tools',
    skills: ['Figma', 'Industrial Automation', 'MES-ERP Integration']
  }
];

export default function TechStack(): JSX.Element {
  const { ref, inView } = useInView({ once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-center text-slate-400 mb-16 text-lg">
            Technologies and tools I work with
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                
                <h3 className="text-lg font-bold text-slate-200 mb-3 relative z-10">
                  {category.category}
                </h3>
                
                <div className="flex flex-wrap gap-2 relative z-10">
                  {category.skills.map(skill => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-sm bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
