import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import heroImage from '../../assets/hero-image.png';
import { IoLogoGithub } from 'react-icons/io';
import { FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';
import { FaSquareUpwork } from 'react-icons/fa6';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-black dark:bg-gray-900 dark:text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* الجانب الأيسر: النصوص والمعلومات */}
          <div className="text-center md:text-left flex-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Abdelrahman</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">
        Full Stack Developer

              </h2>

              {/* Social Icons */}
              <div className="flex space-x-4 justify-center md:justify-start mb-8">
                {/* WhatsApp */}
                <a href="https://wa.me/01027427662" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-500">
<FaWhatsappSquare  size={30} />
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/abdelrahman-yasser-37935b28b/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-blue-600">
                <FaLinkedin size={30} />
                </a>
                <a href="https://www.upwork.com/freelancers/~0114b9f7fd5426b600?mp_source=share" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform  text-blue-600">
                        <FaSquareUpwork  size={30}/>
                          </a>
      
              
                {/* GitHub */}
                <a href="https://github.com/Abdelrahman-Yaser" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-black dark:text-white">
                  <IoLogoGithub size={30} />
                </a>
              </div>
            </motion.div>

            <p className="text-gray-600 dark:text-gray-400 max-w-lg mb-10 leading-relaxed">
             Full-Stack Developer with a strong foundation in Frontend development using React.js and Tailwind CSS, and a growing expertise in building scalable Backend services with NestJS. Experienced in optimizing application performance through Redis caching and managing complex data structures with TypeORM. Passionate about UI/UX design and committed to writing clean, maintainable code that delivers seamless user experiences.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center md:justify-start space-x-4"
            >
              <a href="#projects" className="px-8 py-3 bg-slate-800 text-white border-2 border-emerald-400 rounded-full hover:bg-emerald-400 hover:text-black transition-all">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-full hover:border-emerald-400 transition-all">
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* الجانب الأيمن: الصورة */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-400 shadow-2xl">
              <img 
                src={heroImage} 
                alt="Abdelrahman" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* سهم النزول */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-purple-600" size={30} />
      </motion.div>
    </section>
  );
};