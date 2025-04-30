import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { latest_photo } from '../assets/base64Images';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const quickLinkVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.2 } },
};

const disableContextMenu = (e) => {
  e.preventDefault();
};

const Home = () => {
  const quickLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-teal-500 w-6 h-6" />,
      url: 'https://www.linkedin.com/in/gouse-mohiddin-shaik-2682b720b/',
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="text-teal-500 w-6 h-6" />,
      url: 'https://github.com/Gouse1229/',
    },
  ];

  return (
    <div className="min-h-[80vh] bg-gray-100 text-gray-800 flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      {/* Left Side - Text and Animation */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="w-full md:w-1/2 text-center md:text-left pt-6 md:pt-0 mx-auto md:mx-0 z-10"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Gouse Mohiddin Shaik
        </h1>
        <TypeAnimation
          sequence={[
            'Java Full-Stack Developer',
            2000,
            'Spring Boot Specialist',
            2000,
            'React Enthusiast',
            2000,
            'Backend Architect',
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="text-lg sm:text-xl text-teal-500"
          repeat={Infinity}
        />
        <p className="text-gray-600 mt-4 text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0">
          Technical Associate with 5+ years of experience building enterprise web applications using Java, Spring, and modern frontend technologies.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            to="/about"
            className="inline-block px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-md transition-transform duration-200 hover:scale-105"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="inline-block px-6 py-2 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-md transition-transform duration-200 hover:scale-105"
          >
            View Projects
          </Link>
        </div>
        {/* Quick Links */}
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          {quickLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={quickLinkVariants}
              initial="hidden"
              animate="visible"
              drag
              dragConstraints={{
                top: -window.innerHeight / 2,
                bottom: window.innerHeight / 2,
                left: -window.innerWidth / 2,
                right: window.innerWidth / 2,
              }}
              dragElastic={0.2}
              className="flex items-center justify-center w-12 h-12 bg-white border-2 border-teal-500 rounded-full shadow-md hover:shadow-lg hover:bg-teal-50 transition-all duration-300 cursor-move"
              title={link.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="w-full md:w-1/2 flex justify-center my-6 md:my-0 z-10"
      >
        <div className="rounded-full overflow-hidden w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 border-4 border-teal-500 shadow-md">
          <img
            src={latest_photo}
            alt="Gouse Mohiddin Shaik"
            className="object-cover w-full h-full"
            onContextMenu={disableContextMenu}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;