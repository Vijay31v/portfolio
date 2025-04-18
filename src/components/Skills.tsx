'use client';

import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
} from 'react-icons/si';
import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPrisma,
} from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa';
import { SiDocker, SiGit } from 'react-icons/si';
import { SiPython } from 'react-icons/si';

type SkillIcon = {
  icon: React.ReactNode;
  name: string;
  color: string;
};

export default function Skills() {
  const skillIcons: SkillIcon[] = [
    {
      icon: <SiReact className="h-10 w-10" />,
      name: 'React',
      color: 'text-[#61DAFB]',
    },
    {
      icon: <SiNextdotjs className="h-10 w-10" />,
      name: 'Next.js',
      color: 'text-[#000000] dark:text-white',
    },
    {
      icon: <SiTypescript className="h-10 w-10" />,
      name: 'TypeScript',
      color: 'text-[#3178C6]',
    },
    {
      icon: <SiJavascript className="h-10 w-10" />,
      name: 'JavaScript',
      color: 'text-[#F7DF1E]',
    },

    {
      icon: <SiPython className="h-10 w-10" />,
      name: 'Python',
      color: 'text-[#3776AB]',
    },
    {
      icon: <FaJava className="h-10 w-10" />,
      name: 'Java',
      color: 'text-[#ED8B00]',
    },
    {
      icon: <SiTailwindcss className="h-10 w-10" />,
      name: 'Tailwind CSS',
      color: 'text-[#06B6D4]',
    },

    {
      icon: <SiNodedotjs className="h-10 w-10" />,
      name: 'Node.js',
      color: 'text-[#339933]',
    },
    {
      icon: <SiExpress className="h-10 w-10" />,
      name: 'Express.js',
      color: 'text-[#000000] dark:text-white',
    },
    {
      icon: <SiMongodb className="h-10 w-10" />,
      name: 'MongoDB',
      color: 'text-[#47A248]',
    },
    {
      icon: <SiMysql className="h-10 w-10" />,
      name: 'MySQL',
      color: 'text-[#4479A1]',
    },
    {
      icon: <SiPrisma className="h-10 w-10" />,
      name: 'Prisma ORM',
      color: 'text-[#2D3748]',
    },

    {
      icon: <FaAws className="h-10 w-10" />,
      name: 'AWS',
      color: 'text-[#232F3E]',
    },
    {
      icon: <SiDocker className="h-10 w-10" />,
      name: 'Docker',
      color: 'text-[#2496ED]',
    },
    {
      icon: <SiGit className="h-10 w-10" />,
      name: 'Git',
      color: 'text-[#F05032]',
    },
  ];

  return (
    <section id="skills" className="bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="heading">Skills</h2>
          <p className="subheading mt-4 max-w-2xl mx-auto">
            My technical toolkit for building modern web applications
          </p>
        </motion.div>

        {/* Skills Icons Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-4xl mx-auto"
        >
          {skillIcons.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div
                className={`${skill.color} transition-transform hover:scale-110`}
              >
                {skill.icon}
              </div>
              <span className="text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
