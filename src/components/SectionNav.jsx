import React from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useNavigation } from '../context/NavigationContext';
import { useTheme } from '../context/ThemeContext';

const SectionNav = () => {
  const { activeSection, setActiveSection } = useNavigation();
  const { isDark, toggleTheme } = useTheme();

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'work-experience', label: 'Experience' },
    { id: 'work', label: 'Work' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skill' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleSectionChange = (id) => {
    setActiveSection(id);
    // Scroll to top when switching sections
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Theme Toggle Switch - Left Corner */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-3 left-3 sm:left-4 z-50"
      >
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center gap-1.5 rounded-full px-2.5 py-1.5 shadow-lg border backdrop-blur-sm transition-all duration-300"
          style={{ 
            backgroundColor: 'var(--card-bg)', 
            borderColor: 'var(--border-primary)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--card-bg)'}
          aria-label="Toggle theme"
        >
          {/* Sun Icon - Left Side */}
          <motion.div
            animate={{
              scale: !isDark ? 1.1 : 0.9,
              opacity: !isDark ? 1 : 0.4,
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center w-4 h-4"
          >
            <FaSun className={`w-3.5 h-3.5 transition-colors duration-300 ${!isDark ? 'text-yellow-400' : 'text-gray-500'}`} />
          </motion.div>
          
          {/* Slider Toggle */}
          <div className="relative w-12 h-6 rounded-full p-0.5 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
            <motion.div
              animate={{
                x: isDark ? 24 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
              className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full shadow-md flex items-center justify-center transition-all duration-300"
              style={{ backgroundColor: 'var(--card-bg)' }}
            >
              {isDark ? (
                <FaMoon className="w-2.5 h-2.5 text-gray-700" />
              ) : (
                <FaSun className="w-2.5 h-2.5 text-yellow-500" />
              )}
            </motion.div>
          </div>
          
          {/* Moon Icon - Right Side */}
          <motion.div
            animate={{
              scale: isDark ? 1.1 : 0.9,
              opacity: isDark ? 1 : 0.4,
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center w-4 h-4"
          >
            <FaMoon className={`w-3.5 h-3.5 transition-colors duration-300 ${isDark ? 'text-blue-400' : 'text-gray-500'}`} />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Navigation Bar - Centered */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className="rounded-full px-2 sm:px-2.5 py-1.5 shadow-lg border backdrop-blur-sm transition-all duration-300" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-primary)' }}>
          <nav className="flex items-center gap-0.5 sm:gap-1 relative">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => handleSectionChange(section.id)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 z-10"
                style={{
                  color: activeSection === section.id ? 'var(--accent-primary)' : 'var(--text-tertiary)',
                  fontWeight: activeSection === section.id ? '600' : '500'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== section.id) {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== section.id) {
                    e.currentTarget.style.color = 'var(--text-tertiary)';
                  }
                }}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 rounded-full -z-10"
                    style={{ 
                      backgroundColor: 'var(--accent-primary)',
                      opacity: 0.15
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>
        </div>
      </motion.div>
    </>
  );
};

export default SectionNav;

