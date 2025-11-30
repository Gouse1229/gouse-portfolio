import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaServer, FaCode, FaDatabase, FaClock, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const toggleExpand = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const projects = [
    {
      company: 'Evoke Technologies',
      title: 'Registry Polling Service',
      period: 'Jun 2025 – Nov 2025',
      points: [
        'Developed Spring Boot application service that connects to registries and performs polling using EPP protocol over TLS/TCP for secure communication',
        'Created independent Quartz jobs for each registry to enable isolated scheduling and execution',
        'Designed Oracle database storage for EPP poll responses',
        'Built admin UI for managing registry-specific Quartz jobs and cron expressions',
        'Developed dashboard UI for real-time operational visibility of polled message data'
      ],
      tech: ['Spring Boot', 'Quartz', 'Java', 'Oracle', 'JAXB', 'EPP/TLS'],
      icon: <FaClock className="w-6 h-6" />,
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      achievements: '',
    },
    {
      company: 'Evoke Technologies',
      title: 'DBS Tools',
      period: 'Apr 2024 – Present',
      points: [
        'Enhanced UI components implementing Kendo grids for improved data visualization and user interaction',
        'Enhanced reports with corrections and optimizations, improving data accuracy and presentation',
        'Enhanced RESTful APIs by adding new JSON fields and optimizing existing endpoints for better performance',
        'Optimized Oracle PL/SQL procedures and performed data corrections to ensure data integrity',
        'Migrated observability platform from Splunk to Elastic, configured Elastic logging, synthetics, and log-based alerts for comprehensive monitoring'
      ],
      tech: ['Spring Boot', 'Java', 'Oracle', 'GSP', 'Spring Batch'],
      icon: <FaServer className="w-6 h-6" />,
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      achievements: 'POB Award',
    },
    {
      company: 'Mitratech India LLP',
      title: 'Collaborati & TeamConnect',
      period: 'Nov 2021 – Mar 2024',
      points: [
        'Enhanced e-billing application (Collaborati) and ELM software (TeamConnect) serving law firms with automated billing workflows',
        'Implemented single-step wizard workflow using Spring MVC, reducing tracking and review time for billing professionals with improved visibility',
        'Reduced payment delays between legal departments and firms by optimizing e-billing workflows for invoices, rates, and expanded billing classifications',
        'Enhanced integration module using REST and Remote API calls for seamless data synchronization between Collaborati and TeamConnect applications'
      ],
      tech: ['Spring MVC', 'Java', 'JavaScript', 'JSP','Spring Boot','JPA/Hibernate', 'Oracle'],
      icon: <FaCode className="w-6 h-6" />,
      gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
      achievements: 'Multiple Shout-outs',
    },
    {
      company: 'Dynata',
      title: 'CMIX Survey Platform',
      period: 'Dec 2019 – Nov 2021',
      points: [
        'Performed analysis, design and development of survey questionnaires with complex branching logic and validation rules',
        'Managed concurrent survey questionnaires ensuring timely delivery and quality across multiple projects',
        'Configured quotas, nested quota groups, and respondent routing to ensure balanced sample distribution',
        'Designed and coded advanced exercises including MaxDiff, Conjoint tasks, and interactive components using platform scripting with JavaScript and custom logic',
        'Conducted comprehensive testing of developed surveys to ensure functionality and data accuracy',
        'Coordinated with clients through project managers to resolve concerns and implement change requests for questionnaires',
        'Delivered error-free survey links for client verification and updated surveys based on feedback and requirements',
        'Verified data integrity after soft launch and resolved issues to ensure successful survey deployment'
      ],
      tech: ['CMIX', 'Java', 'JavaScript'],
      icon: <FaDatabase className="w-6 h-6" />,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      achievements: 'Team Impact Award',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="work" ref={sectionRef} className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-theme relative overflow-hidden transition-all duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 transition-all duration-300"
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
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 transition-all duration-300"
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
          className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-15 transition-all duration-300"
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

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-30 dark:opacity-40 transition-all duration-300"
            style={{
              backgroundColor: 'var(--accent-primary)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

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
        {/* Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300" 
            style={{ color: 'var(--text-primary)' }}
          >
            Featured
            <span className="block gradient-text">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '120px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        {/* Projects List - One per Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 lg:space-y-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              {/* Compact Horizontal Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-primary)' }}>
                {/* Gradient Accent Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${project.gradient}`}
                ></motion.div>

                <div className="relative grid md:grid-cols-12 gap-4 lg:gap-6 p-5 sm:p-6">
                  {/* Left Side - Icon */}
                  <div className="md:col-span-2 flex items-start md:items-center justify-center md:justify-start">
                    <div className="relative">
                      {/* Compact Icon Circle */}
                      <motion.div
                        className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg overflow-hidden`}
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <motion.div
                          animate={{
                            scale: hoveredIndex === index ? [1, 1.1, 1] : 1,
                          }}
                          transition={{ duration: 0.3 }}
                          className="relative z-10 text-white"
                        >
                          {project.icon}
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="md:col-span-10 flex flex-col space-y-3">
                    {/* Header Row */}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.4 }}
                        className="text-xs font-semibold px-3 py-1 rounded-md transition-colors duration-300"
                        style={{ 
                          backgroundColor: 'var(--overlay-light)', 
                          color: 'var(--accent-primary)'
                        }}
                      >
                        {project.company}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                        className="text-xs font-medium transition-colors duration-300"
                        style={{ color: 'var(--text-tertiary)' }}
                      >
                        {project.period}
                      </motion.div>
                    </div>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.6 }}
                      className="text-xl sm:text-2xl font-bold transition-colors duration-300"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description - Bullet Points with Expand/Collapse */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.7 }}
                      className="space-y-1.5"
                    >
                      <ul className="space-y-1.5 text-sm leading-relaxed transition-colors duration-300 list-none" style={{ color: 'var(--text-secondary)' }}>
                        {(expandedCards[index] ? project.points.slice(0, 5) : project.points.slice(0, 4)).map((point, i) => (
                          <li key={i} className="flex items-baseline gap-2.5">
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-[0.4rem]" style={{ backgroundColor: 'var(--accent-primary)' }}></span>
                            <span className="flex-1">{point}</span>
                          </li>
                        ))}
                      </ul>
                      {project.points.length > 4 && (
                        <button
                          onClick={() => toggleExpand(index)}
                          className="flex items-center gap-1 text-xs font-medium transition-colors duration-300 hover:gap-2 mt-2"
                          style={{ color: 'var(--accent-primary)' }}
                        >
                          {expandedCards[index] ? (
                            <>
                              <span>See less</span>
                              <FaChevronUp className="w-3 h-3" />
                            </>
                          ) : (
                            <>
                              <span>See more</span>
                              <FaChevronDown className="w-3 h-3" />
                            </>
                          )}
                        </button>
                      )}
                    </motion.div>

                    {/* Tech Stack */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.8 }}
                      className="flex flex-wrap gap-2 pt-2"
                    >
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.8 + i * 0.03 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1 rounded-lg text-xs font-medium border transition-all duration-300 cursor-default"
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
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 0.08 : 0 }}
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{ 
                    background: `radial-gradient(circle at center, var(--accent-primary), transparent)`
                  }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-transparent via-indigo-300 dark:via-indigo-600 to-transparent"
        ></motion.div>
      </div>
    </section>
  );
};

export default Projects;
