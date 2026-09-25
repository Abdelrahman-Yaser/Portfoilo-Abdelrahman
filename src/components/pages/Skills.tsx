import { motion } from "framer-motion";
import { Network, Shapes, Database, Server } from "lucide-react";

import {
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";

import {
  SiNestjs,
  SiTypescript,
  SiPostgresql,
  SiAmazon,
  SiMysql,
  SiHostinger,
  SiExpress,
  SiPrisma,
  SiRedis,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: React.ReactNode;
  color: string;
};

type SkillGroup = {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    description:
      "Building scalable and maintainable server-side applications.",
    icon: <Server size={18} />,
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs size={21} />,
        color: "#339933",
      },
      {
        name: "NestJS",
        icon: <SiNestjs size={21} />,
        color: "#E0234E",
      },
      {
        name: "Express",
        icon: <SiExpress size={21} />,
        color: "#000000",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript size={21} />,
        color: "#3178C6",
      },
      {
        name: "JavaScript",
        icon: <FaJsSquare size={21} />,
        color: "#F7DF1E",
      },
      {
        name: "Prisma",
        icon: <SiPrisma size={21} />,
        color: "#5A67D8",
      },
      {
        name: "Redis",
        icon: <SiRedis size={21} />,
        color: "#DC382D",
      },
    ],
  },

  {
    title: "Frontend",
    description:
      "Creating modern, responsive and interactive interfaces.",
    icon: <FaReact size={18} />,
    skills: [
      {
        name: "HTML5",
        icon: <FaHtml5 size={21} />,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt size={21} />,
        color: "#1572B6",
      },
      {
        name: "JavaScript",
        icon: <FaJsSquare size={21} />,
        color: "#F7DF1E",
      },
      {
        name: "React",
        icon: <FaReact size={21} />,
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill size={21} />,
        color: "#000000",
      },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill size={21} />,
        color: "#06B6D4",
      },
    ],
  },

  {
    title: "Database & DevOps",
    description:
      "Working with data, infrastructure and deployment.",
    icon: <Database size={18} />,
    skills: [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql size={21} />,
        color: "#4169E1",
      },
      {
        name: "MySQL",
        icon: <SiMysql size={21} />,
        color: "#4479A1",
      },
      {
        name: "Docker",
        icon: <FaDocker size={21} />,
        color: "#2496ED",
      },
      {
        name: "AWS",
        icon: <SiAmazon size={21} />,
        color: "#FF9900",
      },
      {
        name: "Git",
        icon: <FaGitAlt size={21} />,
        color: "#F05032",
      },
      {
        name: "Hostinger",
        icon: <SiHostinger size={21} />,
        color: "#673DE6",
      },
    ],
  },

  {
    title: "Architecture",
    description:
      "Designing reliable systems and writing maintainable code.",
    icon: <Network size={18} />,
    skills: [
      {
        name: "System Design",
        icon: <Network size={21} />,
        color: "#FF6C37",
      },
      {
        name: "Design Patterns",
        icon: <Shapes size={21} />,
        color: "#06B6D4",
      },
    ],
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="
        relative overflow-hidden
        py-16 md:py-20
        bg-white
        dark:bg-gray-950
        text-gray-900
        dark:text-white
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-10
          -translate-x-1/2
          h-[300px]
          w-[550px]
          rounded-full
          bg-indigo-500/10
          blur-[100px]
        "
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          {/* Label */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-indigo-500/20
              bg-indigo-500/5
              px-3
              py-1.5
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-indigo-600
              dark:text-indigo-400
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />

            Technologies
          </div>

          <h2
            className="
              mt-4
              text-3xl
              font-black
              tracking-tight
              sm:text-4xl
              bg-gradient-to-r
              from-gray-950
              via-gray-700
              to-gray-400
              dark:from-white
              dark:via-gray-200
              dark:to-gray-500
              bg-clip-text
              text-transparent
            "
          >
            My Technical Stack
          </h2>

          <p
            className="
              mt-3
              text-sm
              leading-relaxed
              text-gray-600
              dark:text-gray-400
            "
          >
            Technologies and engineering practices I use to build
            scalable, reliable and modern applications.
          </p>
        </motion.div>

        {/* Skill Groups */}
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.4,
                delay: groupIndex * 0.06,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                dark:border-white/[0.08]
                bg-gray-50/70
                dark:bg-white/[0.025]
                p-4
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-indigo-500/30
                hover:shadow-xl
                hover:shadow-indigo-500/5
              "
            >
              {/* Card Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-32
                  w-32
                  rounded-full
                  bg-indigo-500/10
                  blur-3xl
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Group Header */}
              <div className="relative mb-4 flex items-center gap-3">
                {/* Icon */}
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-white
                    dark:bg-white/10
                    border
                    border-gray-200
                    dark:border-white/10
                    text-indigo-600
                    dark:text-indigo-400
                    shadow-sm
                  "
                >
                  {group.icon}
                </div>

                {/* Title + Description */}
                <div className="min-w-0">
                  <h3 className="text-sm font-bold">
                    {group.title}
                  </h3>

                  <p
                    className="
                      mt-0.5
                      text-[11px]
                      leading-4
                      text-gray-500
                      dark:text-gray-400
                    "
                  >
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div
                className="
                  relative
                  grid
                  grid-cols-2
                  sm:grid-cols-3
                  gap-2
                "
              >
                {group.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay:
                        groupIndex * 0.06 +
                        index * 0.03,
                    }}
                    whileHover={{
                      y: -2,
                    }}
                    className="
                      group/skill
                      relative
                      flex
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-gray-200
                      dark:border-white/[0.07]
                      bg-white
                      dark:bg-white/[0.035]
                      px-2.5
                      py-2
                      transition-all
                      duration-200
                      hover:bg-white
                      dark:hover:bg-white/[0.07]
                    "
                  >
                    {/* Icon */}
                    <div
                      className="
                        shrink-0
                        transition-transform
                        duration-200
                        group-hover/skill:scale-110
                      "
                      style={{
                        color: skill.color,
                      }}
                    >
                      {skill.icon}
                    </div>

                    {/* Name */}
                    <span
                      className="
                        truncate
                        text-[11px]
                        sm:text-xs
                        font-semibold
                        text-gray-700
                        dark:text-gray-300
                      "
                    >
                      {skill.name}
                    </span>

                    {/* Hover Line */}
                    <div
                      className="
                        absolute
                        bottom-0
                        left-2
                        right-2
                        h-px
                        scale-x-0
                        origin-left
                        transition-transform
                        duration-300
                        group-hover/skill:scale-x-100
                      "
                      style={{
                        backgroundColor: skill.color,
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
          }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Always learning. Always building.
          </p>
        </motion.div>
      </div>
    </section>
  );
};