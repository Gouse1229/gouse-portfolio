import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setStatus(''), 3000); // Clear status after 3s
        },
        (error) => {
          console.error('Email failed:', error.text);
          setStatus('error');
          setTimeout(() => setStatus(''), 3000);
        }
      );
  };

  return (
    <div className="min-h-[80vh] bg-gray-100 text-gray-800 px-4 sm:px-6 lg:px-8 flex items-center justify-center py-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="max-w-sm w-full bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-teal-500 mb-6 text-center tracking-tight">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:bg-teal-50 text-sm transition-all duration-300 placeholder:text-gray-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:bg-teal-50 text-sm transition-all duration-300 placeholder:text-gray-400"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="3"
              placeholder="Your Message"
              className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:bg-teal-50 text-sm transition-all duration-300 placeholder:text-gray-400"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-block px-4 py-1.5 bg-gradient-to-r from-teal-500 to-teal-600 hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-102 hover:shadow-lg text-sm disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {status === 'success' && (
            <p className="text-center text-sm text-teal-500 mt-2">Message Sent!</p>
          )}
          {status === 'error' && (
            <p className="text-center text-sm text-red-500 mt-2">Failed to send. Try again.</p>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;