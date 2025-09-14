"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { CONTACT_SECTION } from "../../constants/portfolio";
import { useState, useRef } from "react";

// Icon mapping
const iconMap = {
  Mail: FiMail,
  Github: FiGithub,
  Linkedin: FiLinkedin,
  Leetcode: SiLeetcode,   // added Leetcode icon here
};

export default function ContactSection() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get('email'),
      message: formData.get('message')
    };

        try {
      const response = await fetch('https://formspree.io/f/xnnzlgoy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });


      if (response.status === 200 || response.status === 302) {
        if (formRef.current) {
          formRef.current.reset();
        }
        setSuccess(true);
        setError(null);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (error) {
      setError('Network error. Please check your connection and try again.');
      console.error(error);
    }

    setTimeout(() => {
      setSuccess(false);
      setError(null);
    }, 3000);
  };


  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800 scroll-mt-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">{CONTACT_SECTION.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300">
            {CONTACT_SECTION.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">
              {CONTACT_SECTION.subtitle}
            </h3>
            <div className="space-y-4">
              {CONTACT_SECTION.socialLinks.map((link) => {
                const IconComponent = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <a
                    key={link.type}
                    href={link.href}
                    target={link.type !== "email" ? "_blank" : undefined}
                    rel={link.type !== "email" ? "noopener noreferrer" : undefined}
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <IconComponent size={20} />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-6">
              {CONTACT_SECTION.form.title}
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                {CONTACT_SECTION.form.submitButton}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      
      {/* Success Toast */}
      {success && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50"
        >
          <div className="flex items-center justify-between">
            <p>Message sent successfully!</p>
            <button 
              onClick={() => setSuccess(false)}
              className="ml-4 text-white hover:text-gray-200"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
      
      {/* Error Toast */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50"
        >
          <div className="flex items-center justify-between">
            <p>Something went wrong!</p>
            <button 
              onClick={() => setError(null)}
              className="ml-4 text-white hover:text-gray-200"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}
