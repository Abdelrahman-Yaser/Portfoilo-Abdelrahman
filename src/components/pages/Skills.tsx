import { motion } from 'framer-motion';
import { Code2, Server, Wrench, Layout, Database, ShieldCheck } from 'lucide-react';
import { FaJsSquare, FaNodeJs, FaReact, FaDocker, FaGitAlt } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { 
  SiAxios, SiBootstrap, SiCss3, SiHtml5, SiNestjs, 
  SiReacthookform, SiTypescript, SiPostgresql, 
  SiRedis, SiPrisma, SiSwagger, SiPostman, SiStripe 
} from 'react-icons/si';
import { TbBrandRedux } from 'react-icons/tb';

const skills = [
  {
    category: 'Backend & Cloud',
    icon: <Server className="w-6 h-6" />,
    items: [
      { name: 'NestJS', icon: <SiNestjs />, color: '#E0234E' },
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
      { name: 'Redis', icon: <SiRedis />, color: '#DC382D' },
      { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
      { name: 'Prisma ORM', icon: <SiPrisma />, color: '#2D3748' },
    ]
  },
  {
    category: 'Frontend Excellence',
    icon: <Layout className="w-6 h-6" />,
    items: [
      { name: 'React', icon: <FaReact />, color: '#61DAFB' },
      { name: 'Next.js', icon: <RiNextjsFill />, color: '#000000' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
      { name: 'Redux Toolkit', icon: <TbBrandRedux />, color: '#764ABC' },
      { name: 'Tailwind CSS', icon: <RiTailwindCssFill />, color: '#06B6D4' },
      { name: 'React Hook Form', icon: <SiReacthookform />, color: '#EC5990' },
      { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
    ]
  },
  {
    category: 'Architecture & Security',
    icon: <ShieldCheck className="w-6 h-6" />,
    items: [
      { name: 'JWT Auth', icon: <ShieldCheck size={14} />, color: '#000000' },
      { name: 'Multi-Tenancy', icon: <Database size={14} />, color: '#4433FF' },
      { name: 'Stripe Pay', icon: <SiStripe />, color: '#008CDD' },
      { name: 'Swagger UI', icon: <SiSwagger />, color: '#85EA2D' },
      { name: 'CQRS Pattern', icon: <Code2 size={14} />, color: '#FF5733' },
    ]
  },
  {
    category: 'Development Tools',
    icon: <Wrench className="w-6 h-6" />,
    items: [
      { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
      { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
      { name: 'Axios', icon: <SiAxios />, color: '#5A29E4' },
      { name: 'JavaScript', icon: <FaJsSquare />, color: '#F7DF1E' },
      { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
      { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold dark:text-white text-gray-900 mb-4">Expertise & Tech Stack</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Advanced technologies I use to build enterprise-grade systems</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-8">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400 mr-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold dark:text-white text-gray-900">{skill.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {skill.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center gap-3 px-4 py-2 dark:bg-gray-800 bg-white border border-gray-200 dark:border-gray-600 rounded-xl shadow-sm hover:shadow-md transition-all cursor-default group"
                    style={{ '--hover-color': item.color } as React.CSSProperties}
                  >
                    <span 
                      className="text-gray-600 dark:text-gray-400 text-xl transition-all duration-300 group-hover:scale-125"
                      style={{ color: item.color }} // اللون يظهر هنا مباشرة
                    >
                      {item.icon}
                    </span>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};