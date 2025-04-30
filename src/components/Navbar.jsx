import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import resumePDF from '../assets/resume.pdf';

// Animation variants for mobile menu
const menuVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: '100%', transition: { duration: 0.2 } },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'GouseMohiddinShaik_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    if (isOpen) toggleMenu();
  };

  return (
    <nav className="bg-gray-700 text-white shadow-md p-3 sm:p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold text-teal-500">
          Gouse Portfolio
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link
            to="/"
            className="text-gray-300 hover:text-teal-500 font-medium transition-transform duration-200 hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="text-gray-300 hover:text-teal-500 font-medium transition-transform duration-200 hover:scale-105"
          >
            Projects
          </Link>
          <Link
            to="/blog"
            className="text-gray-300 hover:text-teal-500 font-medium transition-transform duration-200 hover:scale-105"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-teal-500 font-medium transition-transform duration-200 hover:scale-105"
          >
            Contact
          </Link>
          <button
            onClick={handleDownloadResume}
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md font-medium transition-transform duration-200 hover:scale-105"
          >
            Resume
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-gray-800 bg-opacity-90 shadow-md mt-2 rounded-md overflow-hidden"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              <Link
                to="/"
                onClick={toggleMenu}
                className="text-gray-300 hover:text-teal-500 font-medium text-base"
              >
                Home
              </Link>
              <Link
                to="/projects"
                onClick={toggleMenu}
                className="text-gray-300 hover:text-teal-500 font-medium text-base"
              >
                Projects
              </Link>
              <Link
                to="/blog"
                onClick={toggleMenu}
                className="text-gray-300 hover:text-teal-500 font-medium text-base"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="text-gray-300 hover:text-teal-500 font-medium text-base"
              >
                Contact
              </Link>
              <button
                onClick={handleDownloadResume}
                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md font-medium text-base"
              >
                Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;