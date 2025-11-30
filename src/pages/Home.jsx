import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaArrowDown, FaDownload } from 'react-icons/fa';
import { latest_photo } from '../assets/base64Images';
import { about_photo } from '../assets/base64About';
import resumePDF from '../assets/resume.pdf';
import { useNavigation } from '../context/NavigationContext';

const Home = () => {
  const { setActiveSection } = useNavigation();

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'GouseMohiddinShaik_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navigateToSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <div id="home" className="min-h-screen bg-gradient-theme relative overflow-hidden pt-20 pb-12 transition-all duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob" style={{ backgroundColor: 'var(--orb-indigo)' }}></div>
        <div className="absolute top-40 -right-20 w-96 h-96 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" style={{ backgroundColor: 'var(--orb-cyan)' }}></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000" style={{ backgroundColor: 'var(--orb-purple)' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[size:24px_24px]" style={{ backgroundImage: `linear-gradient(to right, var(--grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)` }}></div>

      <div className="relative z-10 min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-4">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center"
          >
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-2 sm:space-y-3 -mt-2 text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 backdrop-blur-sm rounded-full shadow-md border transition-all duration-300"
                style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-primary)' }}
              >
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-medium transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>Available for opportunities</span>
              </motion.div>

              {/* Name */}
              <motion.h1
                variants={itemVariants}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
              >
                <span className="transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Hi, I'm </span>
                <span className="gradient-text break-words">Gouse Mohiddin</span>
              </motion.h1>

              {/* Surname */}
              <motion.div
                variants={itemVariants}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold transition-colors duration-300"
                style={{ color: 'var(--text-primary)' }}
              >
                <span className="gradient-text">Shaik</span>
              </motion.div>

              {/* Title Animation */}
              <motion.div variants={itemVariants} className="h-6 sm:h-8 min-h-[1.5rem] sm:min-h-[2rem]">
                <TypeAnimation
                  sequence={[
                    'Java Full-Stack Developer',
                    2000,
                    'Spring Boot Specialist',
                    2000,
                    'Backend Architect',
                    2000,
                    'React Enthusiast',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-sm sm:text-base lg:text-lg font-semibold block transition-colors duration-300"
                  style={{ color: 'var(--accent-primary)' }}
                  repeat={Infinity}
                />
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-2 pt-1 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigateToSection('work')}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  View My Work
                  <FaArrowDown className="w-3.5 h-3.5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadResume}
                  className="px-6 py-3 font-semibold rounded-xl shadow-lg hover:shadow-xl border-2 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                  style={{ 
                    backgroundColor: 'var(--card-bg)', 
                    color: 'var(--text-primary)',
                    borderColor: 'var(--border-primary)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-primary)'}
                >
                  <FaDownload className="w-3.5 h-3.5" />
                  Resume
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-4 pt-1 justify-center lg:justify-start"
              >
                <motion.a
                  href="https://www.linkedin.com/in/gouse-mohiddin-shaik-2682b720b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl shadow-md flex items-center justify-center transition-all duration-300"
                  style={{ 
                    backgroundColor: 'var(--card-bg)',
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
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="https://github.com/Gouse1229/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl shadow-md flex items-center justify-center transition-all duration-300"
                  style={{ 
                    backgroundColor: 'var(--card-bg)',
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
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right - Clean Circular Photo */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-center relative mt-8 lg:mt-0"
            >
              <div className="relative">
                {/* Animated Rotating Border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full z-10"
                  style={{
                    background: 'conic-gradient(from 0deg, #6366f1, #06b6d4, #8b5cf6, #ec4899, #6366f1)',
                    padding: '4px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                >
                  <div className="w-full h-full rounded-full bg-transparent"></div>
                </motion.div>

                {/* Outer Glow */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.4, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 rounded-full blur-2xl -z-10 opacity-50 dark:opacity-30 transition-all duration-300"
                  style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))' }}
                ></motion.div>
                
                {/* Photo Container - Simple Circle */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl border-4 transition-colors duration-300" style={{ borderColor: 'var(--card-bg)' }}>
                  <img
                    src={latest_photo}
                    alt="Gouse Mohiddin Shaik"
                    className="object-cover w-full h-full"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl shadow-xl z-30"
                >
                  <div className="text-lg sm:text-xl font-bold">5+</div>
                  <div className="text-[10px] sm:text-xs font-medium">Years Exp</div>
                </motion.div>

                {/* Decorative Dots */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.8, 0.4],
                    y: [0, -10, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-3 -left-3 w-4 h-4 rounded-full z-30 transition-all duration-300"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                ></motion.div>
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.8, 0.4],
                    y: [0, -10, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="absolute top-1/2 -right-3 w-3 h-3 rounded-full z-30 transition-all duration-300"
                  style={{ backgroundColor: 'var(--accent-secondary)' }}
                ></motion.div>
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.8, 0.4],
                    y: [0, 10, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-3 left-1/4 w-3 h-3 rounded-full z-30 transition-all duration-300"
                  style={{ backgroundColor: 'var(--accent-tertiary)' }}
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* About Me Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 sm:mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Side - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-center order-2 lg:order-1"
            >
              <div className="relative mx-auto">
                <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] h-auto aspect-[9/10] rounded-2xl overflow-hidden border-4 sm:border-8 shadow-2xl transition-colors duration-300" style={{ borderColor: 'var(--card-bg)' }}>
                  <img
                    src={about_photo}
                    alt="Gouse Mohiddin Shaik on bike"
                    className="object-cover w-full h-full"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 sm:space-y-6 order-1 lg:order-2"
            >
              {/* Small Heading */}
              <div className="text-base sm:text-lg font-medium transition-colors duration-300 text-center lg:text-left" style={{ color: 'var(--accent-primary)' }}>
                How About Me ?
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed transition-colors duration-300 text-center lg:text-left" style={{ color: 'var(--text-secondary)' }}>
                Technical Associate and Java Full-Stack Developer with <span className="font-bold transition-colors duration-300" style={{ color: 'var(--accent-primary)' }}>5+ years</span> building enterprise web applications across DNS management, legal tech, and survey platforms.
                I specialize in Java and Spring Boot on the backend, combined with modern frontend technologies, to deliver scalable, reliable services and clean, maintainable UIs.
                I enjoy turning complex business requirements into production-ready solutions that are performant, secure, and easy to use.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 transition-colors duration-300" style={{ color: 'var(--accent-primary)' }}>3+</div>
                  <div className="text-[10px] sm:text-xs lg:text-sm font-medium leading-tight transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                    Projects<br />Delivered
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 transition-colors duration-300" style={{ color: 'var(--accent-primary)' }}>3+</div>
                  <div className="text-[10px] sm:text-xs lg:text-sm font-medium leading-tight transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                    Business<br />Domains
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 transition-colors duration-300" style={{ color: 'var(--accent-primary)' }}>3+</div>
                  <div className="text-[10px] sm:text-xs lg:text-sm font-medium leading-tight transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                    Awards &<br />Recognition
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px transition-all duration-300" style={{ background: 'linear-gradient(to right, transparent, var(--accent-primary), transparent)' }}></div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Home;
