import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import resumePDF from '../assets/resume.pdf';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'GouseMohiddinShaik_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`text-2xl font-bold transition-colors ${
              scrolled
                ? 'gradient-text'
                : 'text-white'
            }`}
          >
            Gouse
          </motion.button>

          {/* Resume Button */}
          <motion.button
            onClick={handleDownloadResume}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl ${
              scrolled
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white'
                : 'bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white'
            }`}
            aria-label="Download Resume"
          >
            <FaDownload className="w-4 h-4" />
            <span className="hidden sm:inline">Resume</span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
