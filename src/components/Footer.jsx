// Footer.jsx
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-8 text-center">
      <p className="text-sm mb-4 opacity-80">
        © 2025 Gouse Portfolio | All Rights Reserved
      </p>
      <div className="flex justify-center space-x-6 mt-4">
        <a
          href="https://www.linkedin.com/in/gouse-mohiddin-shaik-2682b720b/"
          className="hover:text-yellow-500 transition-colors duration-300"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/Gouse1229/"
          className="hover:text-yellow-500 transition-colors duration-300"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="#"
          className="hover:text-yellow-500 transition-colors duration-300"
        >
          <FaTwitter size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
