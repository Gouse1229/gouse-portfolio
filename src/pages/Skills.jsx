import React from 'react';
import { motion } from 'framer-motion';
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from 'react-icons/fa';
import {
  SiJquery,
  SiSpring,
  SiOracle,
  SiMysql,
  SiBitbucket,
  SiGithub,
  SiApachemaven,
  SiJenkins,
  SiJira,
  SiEclipseide,
  SiIntellijidea,
  SiReact,
} from 'react-icons/si';
import { Link } from 'react-router-dom';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const card = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const Skills = () => {
  const skillCategories = [
    {
      category: 'Technologies',
      skills: [
        { name: 'Core Java', icon: <FaJava className="w-5 h-5 text-teal-500" />, description: 'Building robust backend systems with Java.' },
        { name: 'HTML', icon: <FaHtml5 className="w-5 h-5 text-teal-500" />, description: 'Crafting semantic and accessible web structures.' },
        { name: 'CSS', icon: <FaCss3Alt className="w-5 h-5 text-teal-500" />, description: 'Styling responsive and modern UI with CSS.' },
        { name: 'JavaScript', icon: <FaJsSquare className="w-5 h-5 text-teal-500" />, description: 'Creating dynamic and interactive web apps.' },
        { name: 'jQuery', icon: <SiJquery className="w-5 h-5 text-teal-500" />, description: 'Simplifying DOM manipulation and events.' },
        { name: 'Spring Core', icon: <SiSpring className="w-5 h-5 text-teal-500" />, description: 'Dependency injection and IoC with Spring.' },
        { name: 'Spring MVC', icon: <SiSpring className="w-5 h-5 text-teal-500" />, description: 'Building web apps with Spring MVC.' },
        { name: 'Spring Boot', icon: <SiSpring className="w-5 h-5 text-teal-500" />, description: 'Rapid API development with Spring Boot.' },
        { name: 'Hibernate/JPA', icon: <span className="w-5 h-5 text-teal-500">[H]</span>, description: 'ORM for seamless database interactions.' },
        { name: 'JSP', icon: <span className="w-5 h-5 text-teal-500">[J]</span>, description: 'Server-side rendering with Java Server Pages.' },
        { name: 'Microservices', icon: <span className="w-5 h-5 text-teal-500">[M]</span>, description: 'Developing distributed systems with microservices.' },
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Oracle', icon: <SiOracle className="w-5 h-5 text-teal-500" />, description: 'Managing enterprise-grade databases.' },
        { name: 'MySQL', icon: <SiMysql className="w-5 h-5 text-teal-500" />, description: 'Efficient relational database management.' },
        { name: 'Bitbucket', icon: <SiBitbucket className="w-5 h-5 text-teal-500" />, description: 'Git-based source code management.' },
        { name: 'GitHub', icon: <SiGithub className="w-5 h-5 text-teal-500" />, description: 'Git-based source code management.' },
        { name: 'Maven', icon: <SiApachemaven className="w-5 h-5 text-teal-500" />, description: 'Automating builds and dependency management.' },
        { name: 'Jenkins', icon: <SiJenkins className="w-5 h-5 text-teal-500" />, description: 'Continuous integration and deployment.' },
        { name: 'JIRA', icon: <SiJira className="w-5 h-5 text-teal-500" />, description: 'Agile project management and issue tracking.' },
        { name: 'CMIX', icon: <span className="w-5 h-5 text-teal-500">[C]</span>, description: 'Survey Programming tool.' },
        { name: 'Eclipse', icon: <SiEclipseide className="w-5 h-5 text-teal-500" />, description: 'Java development IDE.' },
        { name: 'IntelliJ IDEA', icon: <SiIntellijidea className="w-5 h-5 text-teal-500" />, description: 'Advanced IDE for Java and more.' },
      ],
    },
    {
      category: 'Learning in Progress',
      skills: [
        { name: 'Thymeleaf', icon: <span className="w-5 h-5 text-teal-500">[T]</span>, description: 'Templating engine for server-side rendering.' },
        { name: 'React', icon: <SiReact className="w-5 h-5 text-teal-500" />, description: 'Building dynamic UI with React.' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-teal-500 mb-4">
          My Skills
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          A comprehensive set of technical skills honed over 5+ years of experience in Java Full-Stack development.
        </p>
      </motion.section>

      {skillCategories.map((category, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold text-teal-500 mb-6 text-center sm:text-left">
            {category.category}
          </h2>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6"
          >
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                variants={card}
                whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
                className="group relative bg-white p-3 rounded-md shadow-md border border-teal-500/20 flex items-center space-x-3"
              >
                {skill.icon && <div className="flex-shrink-0">{skill.icon}</div>}
                <p className="text-gray-600 text-xs sm:text-sm font-medium truncate">{skill.name}</p>
                <div className="absolute left-0 right-0 bottom-full mb-2 hidden sm:block bg-teal-500/90 text-white text-xs p-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                  {skill.description}
                </div>
                <div className="absolute left-0 right-0 top-full mt-2 block sm:hidden bg-teal-500/90 text-white text-xs p-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                  {skill.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
      <motion.section
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center mt-12"
          >
            <Link
              to="/about"
              className="inline-block px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-md transition-transform duration-200 hover:scale-105"
            >
              Back to About
            </Link>
          </motion.section>
    </div>
    
  );
};

export default Skills;