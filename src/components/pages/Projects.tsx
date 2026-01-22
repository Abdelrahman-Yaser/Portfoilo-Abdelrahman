import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { CiLink } from 'react-icons/ci';

const projects = [
  {
    title: 'Multi-Tenant Booking SaaS',
    category: 'FullStack',
    description: 'نظام حجوزات SaaS متقدم يدعم تعدد المستأجرين مع عزل تام للبيانات باستخدام نمط CQRS وتقنية Schema-per-Tenant لضمان أمان الفنادق.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000',
    tech: ['NestJS', 'PostgreSQL', 'CQRS', 'TypeScript', 'TypeORM'],
    github: 'https://github.com/Abdelrahman-Yaser/booking',
    live: '#'
  },
  {
    title: 'Vacation Tracking System (VTS)',
    category: 'Backend',
    description: 'A robust vacation tracking system built with NestJS, featuring Redis caching, PostgreSQL database, JWT authentication, and Bcrypt for secure password management.',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1000',
    tech: ['NestJS', 'Redis', 'PostgreSQL', 'JWT', 'Bcrypt'],
    github: 'https://github.com/Abdelrahman-Yaser/VTS_vacation-tracking-system',
    live: '#'
  },
  {
    title: 'Mennova E-Commerce Store',
    category: ['FullStack', 'Backend'],
    description: 'Developed a scalable e-commerce backend with NestJS, integrating Stripe for payments and PostgreSQL for data management, complete with API documentation via Swagger.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1000',
    tech: ['NestJS', 'Stripe API', 'PostgreSQL', 'TypeORM', 'Swagger'],
    github: 'https://github.com/Abdelrahman-Yaser/mennova',
    live: '#'
  },
  {
    title: 'E-Commerce Platform',
    category: 'FullStack',
    description: 'Built a dynamic e-commerce dashboard using React, Redux Toolkit, and TypeScript. Integrated an API for real-time data.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    tech: ['React', 'Redux', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/Abdelrahman-Yaser/Ecommerce-redux-router-typeScrit',
    live: 'https://e-commerc-1.netlify.app'
  },
  {
    title: 'Dentist System',
    category: 'Frontend',
    description: 'Web-based system for managing dental clinic appointments and patient records with a user-friendly interface.',
    image: 'https://nhssomerset.nhs.uk/wp-content/uploads/2022/10/Dentist-image.jpg',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Abdelrahman-Yaser/Dintist',
    live: 'https://dentist-m.netlify.app'
  },
  {
    title: 'Professional Portfolio',
    category: 'Frontend',
    description: 'Personal portfolio website to showcase high-end projects and backend expertise using modern web technologies.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Abdelrahman-Yaser/Portfoilo-Abdelrahman',
    live: 'https://abdelrahman-y-m.netlify.app'
  },{
    title: 'Food Delivery App',
    category: 'FullStack',
    description: 'A full-stack food delivery application with user authentication, order management, and real-time tracking.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1000',
    tech: ['Node.js', 'nest', 'postgreSQL','design system'],
    github: 'https://github.com/Abdelrahman-Yaser/Food-Delivery.git',
    live: '#' 
  }
];

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'FullStack', 'Frontend', 'Backend'];

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter(p => 
      Array.isArray(p.category) ? p.category.includes(filter) : p.category === filter
    );
  }, [filter]);

  return (
    <section id="projects" className="py-20 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Filtering by expertise to showcase specific solutions</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border-2 ${
                filter === cat ? 'bg-purple-600 border-purple-600 text-white shadow-lg scale-105' : 'border-gray-200 dark:border-gray-700 hover:border-purple-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 flex gap-1">
                    {(Array.isArray(project.category) ? project.category : [project.category]).map(c => (
                       <span key={c} className="bg-purple-600 text-white text-[10px] px-2 py-1 rounded-full uppercase font-bold">{c}</span>
                    ))}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded text-[10px] font-bold">{t}</span>
                    ))}
                  </div>
                  <div className="flex space-x-4 border-t dark:border-gray-700 pt-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-semibold hover:text-purple-600"><FaGithub className="mr-1" /> Code</a>
                    {project.live !== '#' && <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-semibold hover:text-purple-600"><CiLink size={20} className="mr-1" /> Live</a>}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};