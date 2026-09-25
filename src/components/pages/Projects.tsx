import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Layers3,
} from 'lucide-react';

type ProjectCategory = 'FullStack' | 'Frontend' | 'Backend';

type Project = {
  title: string;
  category: ProjectCategory[];
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
};

const projects: Project[] = [
  {
    title: 'Multi-Tenant Booking SaaS',
    category: ['FullStack', 'Backend'],
    description:
      'A scalable booking SaaS with multi-tenancy, isolated tenant data, and clean backend architecture.',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    tech: ['NestJS', 'PostgreSQL', 'CQRS', 'TypeScript', 'TypeORM'],
    github: 'https://github.com/Abdelrahman-Yaser/booking',
    live: '#',
  },
  {
    title: 'Vacation Tracking System',
    category: ['Backend'],
    description:
      'A robust vacation management system with authentication, Redis caching, PostgreSQL, and role-based access.',
    image:
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80',
    tech: ['NestJS', 'Redis', 'PostgreSQL', 'JWT', 'Bcrypt'],
    github:
      'https://github.com/Abdelrahman-Yaser/VTS_vacation-tracking-system',
    live: '#',
  },
  {
    title: 'Mennova E-Commerce',
    category: ['FullStack', 'Backend'],
    description:
      'A scalable e-commerce backend with Stripe payments, PostgreSQL, REST APIs, and Swagger documentation.',
    image:
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
    tech: ['NestJS', 'Stripe', 'PostgreSQL', 'TypeORM', 'Swagger'],
    github: 'https://github.com/Abdelrahman-Yaser/mennova',
    live: '#',
  },
  {
    title: 'E-Commerce Platform',
    category: ['FullStack', 'Frontend'],
    description:
      'A dynamic e-commerce platform built with React, Redux Toolkit, TypeScript, and Tailwind CSS.',
    image:
      'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80',
    tech: ['React', 'Redux', 'TypeScript', 'Tailwind'],
    github:
      'https://github.com/Abdelrahman-Yaser/Ecommerce-redux-router-typeScrit',
    live: 'https://e-commerc-1.netlify.app',
  },
  {
    title: 'Dentist System',
    category: ['Frontend'],
    description:
      'A clean dental clinic system for managing appointments and patient information.',
    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Abdelrahman-Yaser/Dintist',
    live: 'https://dentist-m.netlify.app',
  },
  {
    title: 'Professional Portfolio',
    category: ['Frontend'],
    description:
      'A modern developer portfolio designed to showcase projects, technical skills, and backend expertise.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    github:
      'https://github.com/Abdelrahman-Yaser/Portfoilo-Abdelrahman',
    live: 'https://abdelrahman-y-m.netlify.app',
  },
  {
    title: 'Food Delivery App',
    category: ['FullStack', 'Backend'],
    description:
      'A full-stack food delivery application with authentication, orders, and scalable backend architecture.',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    tech: ['Node.js', 'NestJS', 'PostgreSQL', 'System Design'],
    github: 'https://github.com/Abdelrahman-Yaser/Food-Delivery',
    live: '#',
  },
];

const categories = ['All', 'FullStack', 'Backend', 'Frontend'] as const;

export const Projects = () => {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All');

  const filteredProjects = useMemo(() => {
    if (filter === 'All') {
      return projects;
    }

    return projects.filter((project) =>
      project.category.includes(filter)
    );
  }, [filter]);

  return (
    <section
      id="projects"
      className="bg-white py-14 text-black transition-colors duration-300 dark:bg-gray-950 dark:text-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <div className="mb-2 flex items-center justify-center gap-2">
            <Layers3
              size={20}
              className="text-cyan-500"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-500">
              My Work
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Projects I've Built
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-600 dark:text-gray-400">
            Backend and full-stack projects focused on scalable architecture,
            clean APIs, and reliable database systems.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-7 flex flex-wrap justify-center gap-2">
          {categories.map((category) => {
            const active = filter === category;

            return (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
                  active
                    ? 'bg-black text-white shadow-md dark:bg-white dark:text-black'
                    : 'border border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-black dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-400 dark:hover:text-white'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="group overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.04]"
              >
                {/* Image */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Number */}
                  <span className="absolute right-3 top-3 text-[10px] font-medium text-white/70">
                    #{String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Category */}
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                    {project.category.map((category) => (
                      <span
                        key={category}
                        className="rounded-full bg-black/50 px-2 py-1 text-[9px] font-medium text-white backdrop-blur-md"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">

                  {/* Title */}
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold leading-tight">
                      {project.title}
                    </h3>

                    <ArrowUpRight
                      size={16}
                      className="mt-0.5 shrink-0 text-gray-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-500"
                    />
                  </div>

                  {/* Description */}
                  <p className="mb-3 line-clamp-2 text-xs leading-5 text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4 flex min-h-[42px] flex-wrap content-start gap-1.5">
                    {project.tech.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-gray-100 px-2 py-1 text-[9px] font-medium text-gray-600 dark:bg-white/[0.07] dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-200 py-2 text-[11px] font-medium text-gray-700 transition-all hover:bg-gray-100 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/10"
                    >
                      <Github size={13} />
                      GitHub
                    </a>

                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-black py-2 text-[11px] font-medium text-white transition-all hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                      >
                        <ExternalLink size={13} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/Abdelrahman-Yaser"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-xs font-medium text-gray-700 transition-all hover:bg-gray-100 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/10"
          >
            <Github size={14} />
            View more on GitHub
            <ArrowUpRight size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};