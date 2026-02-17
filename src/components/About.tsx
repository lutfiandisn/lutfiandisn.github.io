import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About(): JSX.Element {
  const { ref, inView } = useInView({ once: true, amount: 0.3 });

  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXZlbG9wZXIlMjBkZXNrfGVufDF8fHx8MTc3MTI0MjIxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Workspace"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg text-slate-300 mb-6">
                I'm an enthusiastic and driven engineer passionate about bridging industrial automation 
                with modern software technologies. I design and develop SCADA systems, PLC programs, 
                mobile apps with Flutter, and backend APIs for industrial integrations.
              </p>
              <p className="text-lg text-slate-300 mb-6">
                With experience at leading automation companies, I've worked on PLC upgrade projects, 
                HMI design, and MES-ERP integration systems. I specialize in creating reliable industrial 
                automation solutions while leveraging modern development practices.
              </p>
              <div className="flex items-center gap-2 text-lg text-slate-300">
                <span className="text-blue-400">📍</span>
                <span>Based in West Java, Indonesia</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
