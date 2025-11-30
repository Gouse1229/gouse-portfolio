import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex items-center justify-center px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center"
      >
        <h1 className="text-6xl sm:text-8xl font-bold text-teal-500 mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-md transition-transform duration-200 hover:scale-105"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;

