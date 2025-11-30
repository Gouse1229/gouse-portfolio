import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Electrical and Electronics Engineering',
      institution: 'Ideal Institute of Technology, Kakinada',
      year: '2019',
      university: 'JNTU, Kakinada',
      grade: 'First Class With Distinction',
    },
    {
      degree: 'Diploma in Electrical and Electronics Engineering',
      institution: 'Andhra Polytechnic, Kakinada',
      year: '2016',
      university: 'State Board of Technical Education, AP',
      grade: 'First Class With Distinction',
    },
  ];

  return (
    <section id="education" className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-theme relative overflow-hidden transition-all duration-300">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient layers */}
        <div className="absolute inset-0 transition-all duration-300" style={{ background: 'radial-gradient(circle at 20% 50%, var(--overlay-light), transparent 50%)' }}></div>
        <div className="absolute inset-0 transition-all duration-300" style={{ background: 'radial-gradient(circle at 80% 80%, var(--overlay-light), transparent 50%)' }}></div>
        <div className="absolute inset-0 transition-all duration-300" style={{ background: 'radial-gradient(circle at 40% 20%, var(--overlay-light), transparent 50%)' }}></div>
        
        {/* Animated shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 dark:via-white/10 to-transparent"
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transform: 'skewX(-20deg)',
          }}
        />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 transition-all duration-300"
          style={{ backgroundColor: 'var(--orb-indigo)' }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 transition-all duration-300"
          style={{ backgroundColor: 'var(--orb-purple)' }}
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-96 h-96 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-15 dark:opacity-20 transition-all duration-300"
          style={{ backgroundColor: 'var(--orb-cyan)' }}
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] transition-opacity duration-300">
        <motion.div
          className="absolute inset-0 transition-all duration-300"
          style={{
            backgroundImage: 'linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-30 dark:opacity-40 transition-all duration-300"
            style={{
              backgroundColor: 'var(--text-muted)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated Wave Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden opacity-10 dark:opacity-15">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="url(#gradient-light)"
            className="dark:fill-[url(#gradient-dark)]"
            d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
            animate={{
              d: [
                "M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z",
                "M0,60 Q300,100 600,60 T1200,60 L1200,120 L0,120 Z",
                "M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient id="gradient-light" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(99,102,241,0.5)" />
              <stop offset="50%" stopColor="rgba(139,92,246,0.5)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0.5)" />
            </linearGradient>
            <linearGradient id="gradient-dark" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(99,102,241,0.7)" />
              <stop offset="50%" stopColor="rgba(139,92,246,0.7)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0.7)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Animated Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden z-10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-full transition-all duration-300"
          style={{ background: 'linear-gradient(to right, transparent, var(--accent-primary), transparent)' }}
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          id="education"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl flex items-center justify-center text-white shadow-lg">
              <FaGraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Education</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="rounded-2xl p-6 border hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
              >
                <div className="text-sm font-semibold mb-3 transition-colors duration-300" style={{ color: 'var(--accent-primary)' }}>{edu.year}</div>
                <h4 className="text-lg font-bold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>{edu.degree}</h4>
                <p className="text-sm mb-1 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>{edu.institution}</p>
                <p className="text-xs mb-4 transition-colors duration-300" style={{ color: 'var(--text-tertiary)' }}>{edu.university}</p>
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-lg text-xs font-semibold">
                  {edu.grade}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden z-10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-full transition-all duration-300"
          style={{ background: 'linear-gradient(to right, transparent, var(--accent-primary), transparent)' }}
        ></motion.div>
      </div>
    </section>
  );
};

export default Education;

