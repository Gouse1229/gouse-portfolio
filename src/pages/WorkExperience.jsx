import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaAward, FaCode, FaRocket, FaUsers } from 'react-icons/fa';

const WorkExperience = () => {
  const sectionRef = useRef(null);

  const experience = [
    {
      company: 'Evoke Technologies',
      role: 'Technical Associate',
      period: 'Apr 2024 – Present',
      description: 'Developing RESTful APIs with Spring Boot, building responsive web interfaces, and optimizing Oracle PL/SQL queries for enterprise DNS management platform. Leading technical initiatives and collaborating with cross-functional teams to deliver high-quality solutions.',
      achievements: ['POB (Pat-On-the-Back) Award'],
      tech: ['Spring Boot', 'Java','JPA/Hibernate', 'JavaScript', 'Oracle', 'GSP', 'Spring Batch'],
      gradient: 'from-indigo-600 to-cyan-600',
      icon: <FaRocket className="w-5 h-5" />,
    },
    {
      company: 'Mitratech India LLP',
      role: 'Software Engineer',
      period: 'Nov 2021 – Mar 2024',
      description: 'Developed workflow wizards using Spring MVC, enhanced UI/UX, and collaborated with cross-functional teams on Enterprise Legal Management software. Contributed to multiple successful product releases and maintained high code quality standards.',
      achievements: ['Multiple Shout-outs'],
      tech: ['Spring MVC', 'Java', 'JavaScript', 'JSP','Spring Boot','JPA/Hibernate', 'Oracle'],
      gradient: 'from-indigo-600 to-cyan-600',
      icon: <FaCode className="w-5 h-5" />,
    },
    {
      company: 'Dynata',
      role: 'Survey Programmer',
      period: 'Dec 2019 – Nov 2021',
      description: 'Engineered and validated complex survey flows, partnering with stakeholders to ensure accurate data capture and on‑time delivery across multiple concurrent projects.',
      achievements: ['Team Impact Award'],
      tech: ['CMIX', 'Java', 'JavaScript'],
      gradient: 'from-indigo-600 to-cyan-600',
      icon: <FaUsers className="w-5 h-5" />,
    },
  ];

  return (
    <section id="work-experience" ref={sectionRef} className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-theme relative overflow-hidden transition-all duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-theme"></div>
        
        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 transition-all duration-300"
          style={{ backgroundColor: 'var(--orb-indigo)' }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 transition-all duration-300"
          style={{ backgroundColor: 'var(--orb-purple)' }}
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.08] transition-opacity duration-300">
        <div
          className="absolute inset-0 transition-all duration-300"
          style={{
            backgroundImage: 'linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300" 
            style={{ color: 'var(--text-primary)' }}
          >
            Work Experience
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '120px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 opacity-20 dark:opacity-30 transition-all duration-300" style={{ backgroundColor: 'var(--accent-primary)' }}></div>

          {/* Experience Cards */}
          <div className="space-y-16 md:space-y-24">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3, type: "spring" }}
                  className="absolute left-6 md:left-1/2 top-8 w-4 h-4 md:w-6 md:h-6 rounded-full z-20 transform -translate-x-1/2"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: 'var(--accent-primary)' }}
                  ></motion.div>
                </motion.div>

                {/* Card Container - Alternating Layout */}
                <div className={`flex flex-col md:flex-row items-start gap-6 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Icon & Gradient Circle */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4, type: "spring" }}
                    className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-2xl z-10 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
                    style={{ 
                      background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))`
                    }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full"
                      style={{ 
                        background: `conic-gradient(from 0deg, var(--accent-primary), var(--accent-secondary), var(--accent-primary))`
                      }}
                    ></motion.div>
                    <div className="relative z-10 text-white">
                      {exp.icon}
                    </div>
                  </motion.div>

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 group relative"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-xl border transition-all duration-500 hover:shadow-2xl" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-primary)' }}>
                      {/* Gradient Accent Bar */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-indigo-600 via-cyan-600 to-purple-600"
                      ></motion.div>

                      <div className="p-6 sm:p-8">
                        {/* Header Section */}
                        <div className="mb-6">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.6 }}
                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4"
                          >
                            <div>
                              <h3 className="text-xl sm:text-2xl font-bold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                {exp.role}
                              </h3>
                              <div className="flex items-center gap-2 text-xs font-semibold transition-colors duration-300" style={{ color: 'var(--accent-primary)' }}>
                                <FaBuilding className="w-3 h-3" />
                                <span>{exp.company}</span>
                              </div>
                            </div>
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + 0.7 }}
                              className="px-4 py-2 rounded-lg text-xs font-medium border transition-all duration-300"
                              style={{ 
                                backgroundColor: 'var(--overlay-light)', 
                                color: 'var(--accent-primary)',
                                borderColor: 'var(--border-primary)'
                              }}
                            >
                              {exp.period}
                            </motion.div>
                          </motion.div>
                        </div>

                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.8 }}
                          className="text-sm leading-relaxed mb-6 transition-colors duration-300" 
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {exp.description}
                        </motion.p>

                        {/* Tech Stack */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.9 }}
                          className="flex flex-wrap gap-2 mb-4"
                        >
                          {exp.tech.map((tech, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + 0.9 + i * 0.05 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-300 cursor-default"
                              style={{ 
                                backgroundColor: 'var(--overlay-light)', 
                                color: 'var(--accent-primary)',
                                borderColor: 'var(--border-primary)'
                              }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>

                        {/* Achievements */}
                        {exp.achievements.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 1 }}
                            className="flex items-center gap-2 pt-4 border-t transition-colors duration-300"
                            style={{ borderColor: 'var(--border-primary)' }}
                          >
                            <motion.div
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                            >
                              <FaAward className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
                            </motion.div>
                            <span className="text-xs font-medium transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                              {exp.achievements.join(', ')}
                            </span>
                          </motion.div>
                        )}
                      </div>

                      {/* Hover Glow Effect */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 pointer-events-none rounded-2xl"
                        style={{ 
                          background: 'radial-gradient(circle at center, var(--accent-primary) 0%, transparent 70%)',
                          opacity: 0.1
                        }}
                      ></motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

