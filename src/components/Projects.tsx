import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProjectType {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: ProjectType[] = [
  {
    title: 'PLC Upgrade & Modernization',
    description: 'Migrated legacy PLC systems to modern ControlLogix and CompactLogix architectures, improving reliability and performance in industrial environments.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
    tags: ['Allen-Bradley', 'ControlLogix', 'CompactLogix', 'PLC Migration']
  },
  {
    title: 'MES & ERP Integration Service',
    description: 'Windows Service automating data synchronization between Manufacturing Execution Systems and ERP using secure sFTP and Oracle PL/SQL.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    tags: ['Windows Services', 'Oracle PL/SQL', 'sFTP', 'MES-ERP']
  },
  {
    title: 'OEE Monitoring Dashboard',
    description: 'Real-time Overall Equipment Effectiveness (OEE) visualization using AVEVA System Platform 2020 and Microsoft SQL Server for manufacturing analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    tags: ['AVEVA System Platform', 'SQL Server', 'OEE', 'Real-time Monitoring']
  },
  {
    title: 'Mobile Monitoring App',
    description: 'Flutter-based cross-platform mobile application for industrial monitoring with map visualization and live updates from SCADA systems.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    tags: ['Flutter', 'REST API', 'ASP.NET Core', 'Cross-platform']
  }
];

export default function Projects(): JSX.Element {
  const { ref, inView } = useInView({ once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-slate-400 mb-16 text-lg">
            Key projects in industrial automation and software development
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-xs bg-slate-800/50 text-slate-300 rounded-full border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
