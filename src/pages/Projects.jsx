import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaChevronDown, FaChevronUp } from 'react-icons/fa';

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

const expand = {
  hidden: { height: 0, opacity: 0 },
  visible: { 
    height: 'auto', 
    opacity: 1, 
    transition: { 
      height: { duration: 0.3, ease: 'easeInOut' },
      opacity: { duration: 0.3, ease: 'easeInOut' },
    } 
  },
  exit: { 
    height: 0, 
    opacity: 0, 
    transform: 'translateY(100%)',
    transition: { 
      height: { duration: 0.3, ease: 'easeInOut' },
      opacity: { duration: 0.3, ease: 'easeInOut' },
      transform: { duration: 0.3, ease: 'easeInOut' },
    } 
  },
};

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); // First project expanded by default

  const projects = [
    {
      company: 'Evoke Technologies',
      title: 'DBS Tools',
      role: 'Java Full-Stack Developer',
      duration: 'Apr 2024 – Present',
      description: [
        `DBS Tools is a comprehensive platform focused on Domain Naming System (DNS) management, comprising multiple integrated applications: UI, API, Job Engine (JE) and etc. The JE is a core backend application built with Spring Batch and queue-based processing, responsible for mining and transforming large-scale DNS-related data. The UI and API modules consume and present the mined data through user-friendly interfaces and secured RESTful services, enabling users to interact with DNS insights efficiently`,
      ],
      responsibilities: [
        'Developed and enhanced RESTful APIs using Spring Boot, focusing on high availability, security, and performance',
        'Created and integrated new menu items and features in the UI application for improved user interaction',
        'Designed, optimized, and maintained PL/SQL procedures to support efficient backend data operations',
      ],
      tech: ['Core Java', 'HTML', 'CSS', 'JavaScript', 'Spring Boot', 'GSP', 'RESTful Web Services', 'Oracle', 'Groovy Grails', 'Spring Batch'],
      honors: 'Received POB (Pat-On-the-Back) Award',
    },
    {
      company: 'Mitratech India LLP (Product-Based)',
      title: 'Collaborati, TeamConnect',
      role: 'Java Full-Stack Developer',
      duration: 'Nov 2021 – Mar 2024',
      description: [
        'Collaborati is an e-billing application designed to reduce inquiries and disputes, improving firm cash flow.',
        'TeamConnect is an Enterprise Legal Management (ELM) software for legal operations, combining matter management, e-billing, legal spend management, document management, and reporting.',
      ],
      responsibilities: [
        'Groomed and developed new features based on specifications, identifying edge cases and suggesting improvements',
        'Collaborated with UI/UX teams to enhance user experience',
        'Wrote unit and integration tests, and performed code/peer reviews',
        'Participated in agile activities. Provided knowledge transfer to the support team, clarifying questions about new features',
      ],
      tech: ['Core Java', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'JSP', 'RESTful Web Services', 'Spring Core', 'Spring MVC'],
      honors: 'Received Shout-outs',
    },
    {
      company: 'Dynata',
      title: 'CMIX',
      role: 'Programmer',
      duration: 'Dec 2019 – Nov 2021',
      description: ['CMIX is a survey tool used to create and host surveys.'],
      responsibilities: [
        'Analyzed, designed, and developed survey questionnaires',
        'Tested developed surveys for accuracy',
        'Coordinated with clients via project manager to resolve questionnaire concerns',
        'Provided error-free survey links for client verification, updating surveys based on change requests',
        'Verified data post-soft launch and resolved issues',
      ],
      tech: ['CMIX', 'Java', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
      honors: 'Received Team Impact Award',
    },
  ];

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-teal-500 mb-4">
          My Projects
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Enterprise solutions showcasing Java Full-Stack expertise and innovative development.
        </p>
      </motion.section>

      <motion.div
        variants={stagger}
        className="max-w-5xl mx-auto grid grid-cols-1 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{ scale: 1.02, shadow: '0 8px 24px rgba(0, 0, 0, 0.15)' }}
            className="bg-white rounded-lg border-2 border-teal-500 shadow-md flex flex-col"
          >
            <div
              className="p-6 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div className="flex items-center mb-2">
                <FaLaptopCode className="text-teal-500 text-xl mr-2" />
                <h3 className="text-xl font-semibold text-teal-500">
                  {project.title}
                </h3>
                {expandedIndex === index ? (
                  <FaChevronUp className="ml-auto text-teal-500" />
                ) : (
                  <FaChevronDown className="ml-auto text-teal-500" />
                )}
              </div>
              <p className="text-gray-600 text-sm mb-2">
                <strong>{project.company}</strong> | {project.role} |{' '}
                {project.duration}
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded-full hover:bg-teal-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  variants={expand}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  className="bg-gradient-to-r from-teal-50 to-white p-6 border-l-4 border-teal-500 overflow-hidden"
                >
                  <h4 className="text-teal-500 text-base font-medium mb-2">
                    Description
                  </h4>
                  <ul className="list-disc pl-5 text-gray-600 text-sm mb-4">
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  <h4 className="text-teal-500 text-base font-medium mb-2">
                    Responsibilities
                  </h4>
                  <ul className="list-disc pl-5 text-gray-600 text-sm mb-4">
                    {project.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                  <p className="text-teal-500 text-sm">
                    <strong>Honors:</strong> {project.honors}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

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
          Learn About Me
        </Link>
      </motion.section>
    </div>
  );
};

export default Projects;