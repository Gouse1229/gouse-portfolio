import React from 'react';
import { NavigationProvider, useNavigation } from '../context/NavigationContext';
import { ThemeProvider } from '../context/ThemeContext';
import Home from './Home';
import Education from './Education';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import SectionNav from '../components/SectionNav';

const PortfolioContent = () => {
  const { activeSection } = useNavigation();

  return (
    <div className="min-h-screen bg-gradient-theme transition-all duration-300">
      {/* Navigation Bar - Always visible, fixed position */}
      <SectionNav />
      
      {/* Content based on active section */}
      <div>
        {activeSection === 'home' && <Home />}
        {activeSection === 'work-experience' && <WorkExperience />}
        {activeSection === 'work' && <Projects />}
        {activeSection === 'education' && <Education />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'contact' && <Contact />}
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <PortfolioContent />
      </NavigationProvider>
    </ThemeProvider>
  );
};

export default Portfolio;

