import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/gouse-mohiddin-shaik-2682b720b/',
      label: 'LinkedIn Profile',
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: 'https://github.com/Gouse1229/',
      label: 'GitHub Profile',
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-gray-300 text-sm flex items-center gap-2">
            © {currentYear} Designed and Developed by Gouse Mohiddin Shaik. All Rights Reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-600 transition-all duration-300 shadow-lg"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
