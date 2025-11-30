import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaJava, FaHtml5, FaCss3Alt, FaJsSquare,
} from 'react-icons/fa';
import {
  SiSpring, SiOracle, SiHibernate, SiGithub, SiApachemaven, SiJenkins, SiJira,
  SiReact, SiJquery, SiDocker, SiKubernetes, SiIntellijidea, SiEclipseide,
} from 'react-icons/si';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Java', icon: <FaJava className="w-8 h-8" />, level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'Spring Boot', icon: <SiSpring className="w-8 h-8" />, level: 90, color: 'from-green-500 to-emerald-500' },
        { name: 'Spring MVC', icon: <SiSpring className="w-8 h-8" />, level: 80, color: 'from-green-500 to-emerald-500' },
        { name: 'Oracle', icon: <SiOracle className="w-8 h-8" />, level: 80, color: 'from-red-500 to-orange-500' },
        { name: 'JPA/Hibernate', icon: <SiHibernate className="w-8 h-8" />, level: 80, color: 'from-purple-500 to-indigo-500' },
      ],
    },
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="w-8 h-8" />, level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'CSS3', icon: <FaCss3Alt className="w-8 h-8" />, level: 80, color: 'from-blue-500 to-cyan-500' },
        { name: 'JavaScript', icon: <FaJsSquare className="w-8 h-8" />, level: 80, color: 'from-yellow-500 to-orange-500' },
        { name: 'React', icon: <SiReact className="w-8 h-8" />, level: 70, color: 'from-cyan-500 to-blue-500' },
        { name: 'jQuery', icon: <SiJquery className="w-8 h-8" />, level: 80, color: 'from-blue-500 to-indigo-500' },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: '🛠️',
      skills: [
        { name: 'GitHub', icon: <SiGithub className="w-8 h-8" />, level: 90, color: 'from-gray-700 to-gray-900' },
        { name: 'Maven', icon: <SiApachemaven className="w-8 h-8" />, level: 88, color: 'from-orange-500 to-red-500' },
        { name: 'Jenkins', icon: <SiJenkins className="w-8 h-8" />, level: 75, color: 'from-blue-500 to-cyan-500' },
        { name: 'JIRA', icon: <SiJira className="w-8 h-8" />, level: 85, color: 'from-blue-500 to-indigo-500' },
        { name: 'Docker', icon: <SiDocker className="w-8 h-8" />, level: 80, color: 'from-blue-500 to-cyan-500' },
        { name: 'Kubernetes', icon: <SiKubernetes className="w-8 h-8" />, level: 75, color: 'from-blue-600 to-indigo-600' },
        { name: 'IntelliJ IDEA', icon: <SiIntellijidea className="w-8 h-8" />, level: 90, color: 'from-purple-500 to-pink-500' },
        { name: 'Eclipse', icon: <SiEclipseide className="w-8 h-8" />, level: 85, color: 'from-purple-600 to-indigo-600' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="skills" ref={sectionRef} className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 lg:pt-32 bg-gradient-theme relative transition-all duration-300">
      {/* Animated Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-full transition-all duration-300"
          style={{ background: 'linear-gradient(to right, transparent, var(--accent-primary), transparent)' }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
            Technical
            <span className="block gradient-text">Proficiency</span>
          </h2>
        </motion.div>

        {/* Skills Categories - Compact Design */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-10"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="rounded-2xl p-6 shadow-md border transition-all duration-300"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            >
              {/* Category Header - Compact */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-2xl">{category.icon}</div>
                <h3 className="text-xl font-bold transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>{category.title}</h3>
              </div>

              {/* Skills Grid - Compact Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.03 }}
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="relative group cursor-pointer"
                  >
                    <div className={`bg-gradient-to-br ${skill.color} rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300`}>
                      {/* Icon */}
                      <div className="text-white mb-3 flex justify-center">
                        {skill.icon}
                      </div>
                      
                      {/* Name */}
                      <div className="text-center">
                        <div className="text-white font-semibold text-xs mb-1">{skill.name}</div>
                        {category.title !== 'Tools & DevOps' && (
                          <div className="text-white/70 text-xs">{skill.level}%</div>
                        )}
                      </div>

                      {/* Progress Bar - Compact (Hidden for Tools & DevOps) */}
                      {category.title !== 'Tools & DevOps' && (
                        <div className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: skillIndex * 0.05 }}
                            className="h-full bg-white rounded-full"
                          ></motion.div>
                        </div>
                      )}
                    </div>

                    {/* Hover Tooltip - Hidden for Tools & DevOps */}
                    {hoveredSkill === `${categoryIndex}-${skillIndex}` && category.title !== 'Tools & DevOps' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap z-10"
                      >
                        {skill.level}% Proficiency
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Section - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl p-6 text-white shadow-xl max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold mb-1 opacity-90">Currently Learning</div>
              <h3 className="text-lg font-bold">Cloud Technologies(AWS)</h3>
            </div>
            <div className="text-3xl">🚀</div>
          </div>
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

export default Skills;
