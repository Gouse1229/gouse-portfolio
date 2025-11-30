import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaUser, FaComment } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation: min 2, max 100 characters
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'Name must be less than 100 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation: min 10, max 1000 characters
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    if (!validateForm()) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      // API URL - use environment variable or default to localhost for development
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';
      
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        console.log('Message sent successfully:', data.message);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        setTimeout(() => setStatus(''), 3000);
      } else {
        console.error('Error:', data.error || data.message || 'Failed to send message');
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      console.error('Network error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-theme relative transition-all duration-300">
      {/* Animated Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-full transition-all duration-300"
          style={{ background: 'linear-gradient(to right, transparent, var(--accent-primary), transparent)' }}
        ></motion.div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left Column - Header & Text (Vertically Centered) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center min-h-[300px] sm:min-h-[400px] mb-8 lg:mb-0"
          >
            {/* Animated Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center mb-4 sm:mb-6"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                {/* Animated Background Circle */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    scale: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                  className="absolute inset-0 rounded-full blur-2xl opacity-30"
                  style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}
                />
                
                {/* Main Envelope Icon */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10 w-full h-full flex items-center justify-center"
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl"
                    style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}>
                    <FaEnvelope className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" />
                  </div>
                </motion.div>

                {/* Floating Particles */}
                <motion.div
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute top-0 right-0 w-4 h-4 rounded-full"
                  style={{ backgroundColor: 'var(--accent-primary)', opacity: 0.6 }}
                />
                <motion.div
                  animate={{
                    x: [0, -15, 0],
                    y: [0, 15, 0],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-0 left-0 w-3 h-3 rounded-full"
                  style={{ backgroundColor: 'var(--accent-secondary)', opacity: 0.6 }}
                />
                <motion.div
                  animate={{
                    x: [0, 15, 0],
                    y: [0, 20, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                  className="absolute top-1/2 right-0 w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: 'var(--accent-primary)', opacity: 0.5 }}
                />
              </div>
            </motion.div>

            {/* Header */}
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                Let's Work
                <span className="block gradient-text">Together</span>
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed transition-colors duration-300 px-4 sm:px-0" style={{ color: 'var(--text-secondary)' }}>
                Have a project in mind? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg border transition-all duration-300" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
              <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-5 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Contact us</h3>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                <div>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300" style={{ color: errors.name ? 'rgb(239, 68, 68)' : 'var(--text-tertiary)' }}>
                      <FaUser className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      maxLength={100}
                      className="w-full pl-12 pr-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 transition-all text-sm"
                      style={{ 
                        backgroundColor: 'var(--bg-secondary)', 
                        color: 'var(--text-primary)',
                        border: `1px solid ${errors.name ? 'rgb(239, 68, 68)' : 'var(--border-primary)'}`
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent-primary)';
                        e.currentTarget.style.boxShadow = '0 0 0 3px var(--overlay-light)';
                        e.currentTarget.parentElement.querySelector('div').style.color = 'var(--accent-primary)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = errors.name ? 'rgb(239, 68, 68)' : 'var(--border-primary)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.parentElement.querySelector('div').style.color = errors.name ? 'rgb(239, 68, 68)' : 'var(--text-tertiary)';
                      }}
                      placeholder="Name (min 2 characters)"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1 ml-1">{errors.name}</p>
                  )}
                  {formData.name && !errors.name && (
                    <p className="text-xs text-gray-500 mt-1 ml-1">{formData.name.length}/100 characters</p>
                  )}
                </div>
                <div>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300" style={{ color: errors.email ? 'rgb(239, 68, 68)' : 'var(--text-tertiary)' }}>
                      <FaEnvelope className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 transition-all text-sm"
                      style={{ 
                        backgroundColor: 'var(--bg-secondary)', 
                        color: 'var(--text-primary)',
                        border: `1px solid ${errors.email ? 'rgb(239, 68, 68)' : 'var(--border-primary)'}`
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent-primary)';
                        e.currentTarget.style.boxShadow = '0 0 0 3px var(--overlay-light)';
                        e.currentTarget.parentElement.querySelector('div').style.color = 'var(--accent-primary)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = errors.email ? 'rgb(239, 68, 68)' : 'var(--border-primary)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.parentElement.querySelector('div').style.color = errors.email ? 'rgb(239, 68, 68)' : 'var(--text-tertiary)';
                      }}
                      placeholder="Email"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1 ml-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <div className="relative">
                    <div className="absolute left-4 top-4 transition-colors duration-300" style={{ color: errors.message ? 'rgb(239, 68, 68)' : 'var(--text-tertiary)' }}>
                      <FaComment className="w-4 h-4" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      maxLength={1000}
                      rows="5"
                      className="w-full pl-12 pr-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 transition-all resize-none text-sm"
                      style={{ 
                        backgroundColor: 'var(--bg-secondary)', 
                        color: 'var(--text-primary)',
                        border: `1px solid ${errors.message ? 'rgb(239, 68, 68)' : 'var(--border-primary)'}`
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent-primary)';
                        e.currentTarget.style.boxShadow = '0 0 0 3px var(--overlay-light)';
                        e.currentTarget.parentElement.querySelector('div').style.color = 'var(--accent-primary)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = errors.message ? 'rgb(239, 68, 68)' : 'var(--border-primary)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.parentElement.querySelector('div').style.color = errors.message ? 'rgb(239, 68, 68)' : 'var(--text-tertiary)';
                      }}
                      placeholder="Message (min 10 characters)"
                    />
                  </div>
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1 ml-1">{errors.message}</p>
                  )}
                  {formData.message && !errors.message && (
                    <p className="text-xs text-gray-500 mt-1 ml-1">{formData.message.length}/1000 characters</p>
                  )}
                </div>
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-3 text-sm text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))' }}
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-3.5 h-3.5" />
                    Send Message
                  </>
                )}
              </motion.button>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 border rounded-lg text-center text-xs font-medium transition-all duration-300"
                  style={{ 
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    borderColor: 'rgba(34, 197, 94, 0.3)',
                    color: 'rgb(34, 197, 94)'
                  }}
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {status === 'error' && Object.keys(errors).length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 border rounded-lg text-center text-xs font-medium transition-all duration-300"
                  style={{ 
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    borderColor: 'rgba(239, 68, 68, 0.3)',
                    color: 'rgb(239, 68, 68)'
                  }}
                >
                  ✗ Failed to send message. Please try again.
                </motion.div>
              )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
