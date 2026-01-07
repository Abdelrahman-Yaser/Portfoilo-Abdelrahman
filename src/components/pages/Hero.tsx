import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import heroImage from '../../assets/hero-image.png';
import { IoLogoGithub } from 'react-icons/io';
import { FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';
import { FaSquareUpwork, FaYoutube } from 'react-icons/fa6';
import { SiMedium } from 'react-icons/si';

export const Hero = () => {
  const socials = [
    {
      name: 'WhatsApp',
      icon: <FaWhatsappSquare size={28} />,
      link: 'https://wa.me/01027427662',
      color: 'text-[#25D366]'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={28} />,
      link: 'https://www.linkedin.com/in/abdelrahman-yasser-37935b28b/',
      color: 'text-[#0077B5]'
    },
    {
      name: 'Upwork',
      icon: <FaSquareUpwork size={28} />,
      link: 'https://www.upwork.com/freelancers/~0114b9f7fd5426b600?mp_source=share',
      color: 'text-[#14a800]'
    },
    {
      name: 'GitHub',
      icon: <IoLogoGithub size={28} />,
      link: 'https://github.com/Abdelrahman-Yaser',
      color: 'text-black dark:text-white'
    },
    {
      name: 'Medium',
      icon: <SiMedium size={28} />,
      link: 'https://medium.com/@abdooy640',
      color: 'text-gray-800 dark:text-gray-200'
    },
    {
      name: 'YouTube',
      icon: <FaYoutube size={28} />,
      link: 'https://www.youtube.com/@deep_dive-z5w',
      color: 'text-[#FF0000]'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-black dark:bg-gray-900 dark:text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="text-center md:text-left flex-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Abdelrahman</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8 font-medium">
                Full Stack Developer
              </h2>

              {/* شبكة الأيقونات مع الأسماء تحتها */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-1 min-w-[70px] transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className={`${social.color} transition-transform duration-300 group-hover:scale-110`}>
                      {social.icon}
                    </div>
                    <span className="text-[10px] font-bold  tracking-wider text-gray-500 dark:text-gray-400 group-hover:text-emerald-500 transition-colors">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            <p className="text-gray-600 dark:text-gray-400 max-w-lg mb-10 leading-relaxed text-lg">
              Full-Stack Developer with a strong foundation in **Frontend** using React.js and **Backend** with NestJS. I build scalable, high-performance applications with clean code.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#projects" className="px-8 py-3 bg-gray-900 dark:bg-emerald-500 text-white dark:text-gray-900 rounded-xl hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] transition-all font-bold">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-3 border-2 border-gray-200 dark:border-gray-800 rounded-xl hover:border-emerald-500 transition-all font-bold">
                Contact Me
              </a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border-4 border-emerald-400 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="Abdelrahman" 
                className="w-full h-full object-cover scale-110"
              />
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-emerald-500"
      >
        <ArrowDown size={30} />
      </motion.div>
    </section>
  );
};