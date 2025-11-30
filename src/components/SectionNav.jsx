import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaChevronRight } from 'react-icons/fa';
import { useNavigation } from '../context/NavigationContext';
import { useTheme } from '../context/ThemeContext';

const SectionNav = () => {
  const { activeSection, setActiveSection } = useNavigation();
  const { isDark, toggleTheme } = useTheme();
  const navContainerRef = useRef(null);
  const navRef = useRef(null);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'work-experience', label: 'Experience' },
    { id: 'work', label: 'Work' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skill' },
    { id: 'contact', label: 'Contact' },
  ];

  // Check if there's overflow content
  useEffect(() => {
    const checkOverflow = () => {
      if (navContainerRef.current && navRef.current) {
        const container = navContainerRef.current;
        const nav = navRef.current;
        const hasOverflow = nav.scrollWidth > container.clientWidth;
        const isScrolledToEnd = container.scrollLeft + container.clientWidth >= nav.scrollWidth - 10;
        setShowRightArrow(hasOverflow && !isScrolledToEnd);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    if (navContainerRef.current) {
      navContainerRef.current.addEventListener('scroll', checkOverflow);
    }

    return () => {
      window.removeEventListener('resize', checkOverflow);
      if (navContainerRef.current) {
        navContainerRef.current.removeEventListener('scroll', checkOverflow);
      }
    };
  }, []);

  const handleScrollRight = () => {
    if (navContainerRef.current) {
      const container = navContainerRef.current;
      const scrollAmount = container.clientWidth * 0.6; // Scroll 60% of container width
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      
      // Recheck overflow after scroll animation completes
      setTimeout(() => {
        if (navContainerRef.current && navRef.current) {
          const nav = navRef.current;
          const hasOverflow = nav.scrollWidth > container.clientWidth;
          const isScrolledToEnd = container.scrollLeft + container.clientWidth >= nav.scrollWidth - 10;
          setShowRightArrow(hasOverflow && !isScrolledToEnd);
        }
      }, 500); // Wait for smooth scroll to complete
    }
  };

  const handleSectionChange = (id) => {
    setActiveSection(id);
    // Scroll to top when switching sections
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Theme Toggle Switch - Right Corner (Mobile Friendly) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-3 right-3 sm:right-4 z-50"
      >
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center gap-1 sm:gap-1.5 rounded-full px-2 sm:px-2.5 py-1.5 sm:py-2 shadow-lg border backdrop-blur-sm transition-all duration-300"
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
            className="flex items-center justify-center w-3.5 h-3.5 sm:w-4 sm:h-4"
          >
            <FaSun className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-colors duration-300 ${!isDark ? 'text-yellow-400' : 'text-gray-500'}`} />
          </motion.div>
          
          {/* Slider Toggle */}
          <div className="relative w-10 h-5 sm:w-12 sm:h-6 rounded-full p-0.5 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
            <motion.div
              animate={{
                x: isDark ? 20 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
              className="absolute top-0.5 left-0.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full shadow-md flex items-center justify-center transition-all duration-300"
              style={{ backgroundColor: 'var(--card-bg)' }}
            >
              {isDark ? (
                <FaMoon className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-gray-700" />
              ) : (
                <FaSun className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-yellow-500" />
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
            className="flex items-center justify-center w-3.5 h-3.5 sm:w-4 sm:h-4"
          >
            <FaMoon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-colors duration-300 ${isDark ? 'text-blue-400' : 'text-gray-500'}`} />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Navigation Bar - Centered with Mobile Scroll */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 nav-container-responsive"
      >
        <div className="relative flex items-center w-full">
          <div 
            ref={navContainerRef}
            className="rounded-full px-1.5 sm:px-2.5 py-1.5 sm:py-2 shadow-lg border backdrop-blur-sm transition-all duration-300 overflow-x-auto overflow-y-hidden scrollbar-hide w-full" 
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-primary)' }}
          >
            <nav ref={navRef} className="flex items-center gap-0.5 sm:gap-1 relative min-w-max sm:min-w-0">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => handleSectionChange(section.id)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-200 z-10 whitespace-nowrap flex-shrink-0"
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
          
          {/* Right Arrow Button - Shows when there's overflow */}
          {showRightArrow && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleScrollRight}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full ml-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shadow-md border backdrop-blur-sm transition-all duration-300 z-50"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--border-primary)',
                color: 'var(--accent-primary)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--card-bg)';
                e.currentTarget.style.color = 'var(--accent-primary)';
              }}
              aria-label="Scroll right"
            >
              <FaChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </motion.button>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default SectionNav;

