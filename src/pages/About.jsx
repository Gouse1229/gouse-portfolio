import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaGraduationCap, FaSchool, FaBook, FaBuilding } from 'react-icons/fa';

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

const timelineItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const educationCard = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
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
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto grid grid-cols-1 gap-6 sm:gap-8"
      >
        <motion.div
          variants={card}
          whileHover={{ scale: 1.02, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
          className="bg-white p-6 rounded-md shadow-md border border-teal-500/20"
        >
          <h3 className="text-lg font-semibold text-teal-500 mb-2 flex items-center">
            <FaUserCircle className="mr-2 text-teal-500" /> Who Am I?
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            I'm a Full Stack Developer with an engineering mindset, originally trained in Electrical and Electronics Engineering and now passionate about building end-to-end web solutions. I specialize in Java and Spring Boot, with a strong focus on writing clean, efficient code and building scalable backend systems. I enjoy working across the stack — from designing RESTful APIs and optimizing database logic to enhancing frontend functionality with interactive, user-friendly interfaces.
            Always curious and continuously learning, I enjoy collaborating with forward-thinking teams to build tech that makes a difference.
          </p>
        </motion.div>

        <motion.div
          variants={card}
          className="bg-white p-6 rounded-md shadow-md border border-teal-500/20"
        >
          <h3 className="text-lg font-semibold text-teal-500 mb-4 flex items-center">
            <FaGraduationCap className="mr-2 text-teal-500" /> Education
          </h3>
          <motion.div
            variants={stagger}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <motion.div
              variants={educationCard}
              whileHover={{ scale: 1.05, borderColor: '#0d9488' }}
              className="flex-1 bg-gradient-to-r from-teal-50 to-white p-4 rounded-md border-l-4 border-teal-500 min-h-[120px] sm:min-h-[120px] flex flex-col"
            >
              <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                <FaGraduationCap className="text-sm" />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-base text-gray-800">
                  B.Tech in Electrical and Electronics Engineering (2019)
                </h4>
                <div className="text-sm text-gray-600">
                  <span className="block">Ideal Institute of Technology, Kakinada</span>
                  <span className="block">JNTU, Kakinada</span>
                </div>
                <p className="text-sm font-semibold text-teal-600 mt-1">
                  First Class With Distinction
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={educationCard}
              whileHover={{ scale: 1.05, borderColor: '#0d9488' }}
              className="flex-1 bg-gradient-to-r from-teal-50 to-white p-4 rounded-md border-l-4 border-teal-500 min-h-[120px] sm:min-h-[120px] flex flex-col"
            >
              <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                <FaSchool className="text-sm" />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-base text-gray-800">
                  Diploma in Electrical and Electronics Engineering (2016)
                </h4>
                <div className="text-sm text-gray-600">
                  <span className="block">Andhra Polytechnic, Kakinada</span>
                  <span className="block">State Board of Technical Education, Andhra Pradesh</span>
                </div>
                <p className="text-sm font-semibold text-teal-600 mt-1">
                  First Class With Distinction
                </p>
              </div>
            </motion.div>

            {/* <motion.div
              variants={educationCard}
              whileHover={{ scale: 1.05, borderColor: '#0d9488' }}
              className="flex-1 bg-gradient-to-r from-teal-50 to-white p-4 rounded-md border-l-4 border-teal-500 min-h-[120px] sm:min-h-[120px] flex flex-col"
            >
              <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                <FaBook className="text-sm" />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-base text-gray-800">
                  10th (2013)
                </h4>
                <div className="text-sm text-gray-600">
                  <span className="block">Rajiv Gandhi Municipal Corp High School</span>
                  <span className="block">Board of Secondary Education, Andhra Pradesh</span>
                </div>
                <p className="text-sm font-semibold text-teal-600 mt-1">
                  Secured Second Rank
                </p>
              </div>
            </motion.div> */}
          </motion.div>
        </motion.div>

        <motion.div
          variants={card}
          whileHover={{ scale: 1.02, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
          className="bg-white p-6 rounded-md shadow-md border border-teal-500/20"
        >
          <h3 className="text-lg font-semibold text-teal-500 mb-4 flex items-center">
            <FaBuilding className="mr-2 text-teal-500" /> Work Experience
          </h3>
          <div className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-1 bg-teal-500"></div>

            <motion.div variants={timelineItem} className="mb-6 relative">
              <div className="absolute left-[-28px] top-1 w-4 h-4 bg-teal-500 rounded-full border-2 border-white"></div>
              <p className="text-gray-600 text-sm sm:text-base">
                <strong>Technical Associate, Evoke Technologies (Apr 2024–Present)</strong><br />
                - Developed RESTful APIs with Spring Boot, ensuring high availability and security.<br />
                - Built responsive web interfaces using HTML, CSS, JavaScript, and GSP.<br />
                - Optimized Oracle PL/SQL queries to enhance performance.
              </p>
            </motion.div>

            <motion.div variants={timelineItem} className="mb-6 relative">
              <div className="absolute left-[-28px] top-1 w-4 h-4 bg-teal-500 rounded-full border-2 border-white"></div>
              <p className="text-gray-600 text-sm sm:text-base">
                <strong>Software Engineer, Mitratech India LLP (Nov 2021–Mar 2024)</strong><br />
                - Reduced time spent by e-billing admins for tracking, reviewing, and approving timekeeper and rates by providing a single-step process with increased visibility and tracking for new timekeeper with rates approvals.<br />
                - Reduced payment delays between legal departments and firms with improved e-billing workflows for invoices, rates, and expanded timekeeper classifications.
              </p>
            </motion.div>

            <motion.div variants={timelineItem} className="relative">
              <div className="absolute left-[-28px] top-1 w-4 h-4 bg-teal-500 rounded-full border-2 border-white"></div>
              <p className="text-gray-600 text-sm sm:text-base">
                <strong>Survey Programmer, Dynata (Dec 2019–Nov 2021)</strong><br />
                - Designed and tested survey questionnaires, ensuring error-free delivery.<br />
                - Coordinated with clients to resolve issues and verify data post-launch.
              </p>
            </motion.div>
          </div>
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