import React from 'react';
import { motion } from 'framer-motion';
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

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-teal-500 mb-4">
          About Me
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Technical Associate with a passion for building robust and scalable web applications.
        </p>
      </motion.section>

      <motion.div
        variants={stagger}
        className="max-w-5xl mx-auto grid grid-cols-1 gap-6 sm:gap-8"
      >
        <motion.div
          variants={card}
          whileHover={{ scale: 1.02, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
          className="bg-white p-6 rounded-md shadow-md border border-teal-500/20"
        >
          <h3 className="text-lg font-semibold text-teal-500 mb-2">Profile Summary</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            With over 5 years of experience, I specialize in developing and implementing web-based enterprise applications using Core Java, Spring Core, Spring MVC, Hibernate/JPA, Oracle, and REST web services. I have extensive expertise in object-oriented development, UI design with HTML, CSS, JavaScript, and JSP, and troubleshooting complex applications. I’m a proactive team player with a zeal to learn new technologies and excellent communication skills.
          </p>
        </motion.div>

        <motion.div
          variants={card}
          whileHover={{ scale: 1.02, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
          className="bg-white p-6 rounded-md shadow-md border border-teal-500/20"
        >
          <h3 className="text-lg font-semibold text-teal-500 mb-2">Education</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            <strong>B.Tech in Computer Science</strong>, Ideal Institute of Technology, Kakinada (2019)<br />
            <strong>12th</strong>, Andhra Pradesh (2016)<br />
            <strong>10th</strong>, Andhra Pradesh (2013)
          </p>
        </motion.div>

        <motion.div
          variants={card}
          whileHover={{ scale: 1.02, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
          className="bg-white p-6 rounded-md shadow-md border border-teal-500/20"
        >
          <h3 className="text-lg font-semibold text-teal-500 mb-2">Work Experience</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            <strong>Technical Associate, Evoke Technologies (Apr 2024–Present)</strong><br />
            - Developed RESTful APIs with Spring Boot, ensuring high availability and security.<br />
            - Built responsive web interfaces using HTML, CSS, JavaScript, and jQuery.<br />
            - Optimized Oracle PL/SQL queries to enhance performance.<br /><br />
            <strong>Software Engineer, Mitratech India LLP (Nov 2021–Mar 2024)</strong><br />
            - Developed new features, collaborated on UI/UX improvements, and conducted code reviews.<br />
            - Wrote unit and integration tests, participated in agile processes, and provided knowledge transfer.<br /><br />
            <strong>Survey Programmer, Dynata (Dec 2019–Nov 2021)</strong><br />
            - Designed and tested survey questionnaires, ensuring error-free delivery.<br />
            - Coordinated with clients to resolve issues and verify data post-launch.
          </p>
        </motion.div>
      </motion.div>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center mt-12"
      >
        <Link
          to="/skills"
          className="inline-block px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-md transition-transform duration-200 hover:scale-105"
        >
          View My Skills
        </Link>
      </motion.section>
    </div>
  );
};

export default About;