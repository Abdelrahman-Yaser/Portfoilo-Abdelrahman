
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-500">Let's discuss your project or just say hello</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
<div className="flex items-center  justify-around"> 
<div className="space-y-4">

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                <MapPin  size={24} />
              </div>
                <p className="text-gray-600">  Cairo</p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                <Mail size={24} />
              </div>
              <a href="mailto:abdooy640@gmail.com" className="text-gray-600 hover:text-purple-600" >
                  abdooy640@gmail.com
                </a>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-600 ">
                <Phone size={24} />
              </div>
                <a href="tel:+01027427662" className="text-gray-600 hover:text-purple-600">
                  01027427662
                </a>
            </div>
</div>

{/* shoial  */}
<div className="flex flex-col space-y-8  ">
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/01027427662"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="hover:opacity-80 transition-opacity space-x-4" 
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 32 32"
          className="w-6 h-6 text-green-500"
        >
          <path d="M16 2C8.82 2 3 7.82 3 15c0 2.528.703 4.893 1.922 6.928L2 30l8.34-2.633A12.975 12.975 0 0 0 16 28c7.18 0 13-5.82 13-13S23.18 2 16 2zm0 24a10.974 10.974 0 0 1-5.828-1.664l-.418-.256-4.939 1.56 1.508-5.028-.27-.416A10.958 10.958 0 0 1 5 15c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11z" />
          <path d="M20.197 17.788c-.396-.198-2.345-1.164-2.707-1.297-.363-.133-.627-.198-.89.198s-1.019 1.297-1.248 1.563-.461.297-.857.099-1.668-.615-3.175-1.958c-.84-.748-1.41-1.672-1.577-1.958s-.018-.435.12-.633c.124-.177.275-.325.412-.488.132-.156.18-.267.276-.445.094-.178.046-.334-.024-.488-.072-.155-.895-2.16-1.226-2.964-.321-.785-.649-.66-.89-.672-.229-.01-.49-.012-.75-.012-.259 0-.68.098-1.035.48-.355.383-1.351 1.317-1.351 3.215s1.383 3.727 1.575 3.988c.195.26 2.72 4.14 6.587 5.804 2.246.967 3.11 1.052 4.213 1.001 1.276-.06 2.074-.62 2.366-.972.292-.353.292-.807.204-1.12-.088-.312-.326-.45-.672-.64z" />
        </svg>
      </a>

      {/* LinkedIn Icon */}
      <a
        href='https://www.linkedin.com/in/abdelrahman-yasser-37935b28b/'
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:opacity-80 transition-opacity space-x-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-blue-600"
        >
          <path d="M20.45 20.452H16.89V14.953c0-1.309-.024-2.993-1.825-2.993-1.827 0-2.105 1.428-2.105 2.902v5.59H9.4v-9.454h3.4v1.291h.047c.474-.897 1.633-1.846 3.364-1.846 3.598 0 4.261 2.368 4.261 5.447v6.562zM6.34 8.662a1.969 1.969 0 1 1 0-3.939 1.969 1.969 0 0 1 0 3.94zM7.75 20.452H4.93V11h2.82v9.452zM22.225 0H1.766C.791 0 0 .781 0 1.74v20.514c0 .957.792 1.745 1.766 1.745H22.23c.974 0 1.77-.788 1.77-1.746V1.74c-.005-.96-.796-1.74-1.775-1.74z" />
        </svg>
      </a>

      {/* GitHub Icon */}
      <a
        href="https://github.com/Abdelrahman-Yaser"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:opacity-80 transition-opacity space-x-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-black dark:text-white"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.599.112.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.086 1.84 1.236 1.84 1.236 1.07 1.833 2.807 1.304 3.492.997.108-.775.418-1.304.76-1.604-2.665-.303-5.466-1.333-5.466-5.93 0-1.31.469-2.38 1.236-3.22-.123-.303-.536-1.522.117-3.176 0 0 1.007-.322 3.301 1.23a11.488 11.488 0 0 1 3.003-.404c1.019.005 2.046.138 3.003.404 2.292-1.552 3.298-1.23 3.298-1.23.655 1.654.242 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.624-5.476 5.92.43.372.813 1.105.813 2.227 0 1.608-.015 2.905-.015 3.293 0 .32.192.694.8.577C20.565 21.795 24 17.297 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
    </div>
</div>

          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            action='mailto:abdooy640@gmail.com'
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1" >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border dark:text-slate-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};