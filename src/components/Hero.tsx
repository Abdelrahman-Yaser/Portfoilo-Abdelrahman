
import { motion } from 'framer-motion';
import { ArrowDown, Linkedin, Github } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold  from-purple-600 to-blue-500 mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Abdelrahman</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
            Frontend Developer & UI/UX 
            </h2>
 
          <div className="flex justify-center md:flex-col ">

       <span>  < Github /> Profoilo </span>
          <a className="block text-gray-700 dark:text-gray-300 hover:text-purple-600  py-1 -5 ">
          <Linkedin size={20} className="" />  Linkedin Profoilo
          </a>

          </div>


          </motion.div>
          <span className="">Front-End Developer specializing in React.js with a focus on scalable, user-friendly web apps. Experienced in modern JavaScript frameworks</span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ArrowDown className="text-purple-600" size={24} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};