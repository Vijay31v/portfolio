'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

type Experience = {
  company: string;
  position: string;
  period: string;
  description: string[];
  logo: string;
};

const experiences: Experience[] = [
  // {
  //   company: 'Capgemini, Chennai',
  //   position: 'Software Engineer',
  //   period: 'Jan 2022 - Dec 2022',
  //   logo: '/logos/Capgemini.webp',
  //   description: [
  //     'Spearheaded development and delivery of 5+ key MERN stack modules for client web applications, enhancing core application functionality and improving client operations.',
  //     'Implemented 20 responsive React components per technical specs and UI mockups, improving user interaction.',
  //     'Improved software quality and stability with comprehensive unit tests (Jest/React Testing Library), increasing vital component test coverage by 20%+ and resolving 30+ high-priority defects (JIRA/ADO).',
  //     'Applied Agile/Scrum, exceeding sprint commitments by 15% on average (9-11 story points vs 8-point target) and leveraged Git for version control, enhancing team productivity.',
  //   ],
  // },
  {
    company: 'iPLON India, Chennai',
    position: 'Software Engineer Intern',
    period: 'Dec 2022 - Mar 2023',
    logo: '/logos/iplon-logo.jpg',
    description: [
      'Built an LSTM model to forecast day ahead hourly solar energy generation, achieving an MAE of 31.25 W/m².',
      'Enabled informed decision making around energy storage and grid integration, leading to reduction in operational costs.',
      'Designed a node-red node for the model, seamlessly integrating it into the workflow.',
    ],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="bg-muted/40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading">Experience</h2>
          <p className="subheading mt-4 max-w-2xl mx-auto">
            My professional journey in the tech industry
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card mb-8 cursor-pointer overflow-hidden"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 bg-primary/10 p-2 rounded-full">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{exp.position}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2 sm:mt-0">
                      <p className="text-muted-foreground">{exp.period}</p>
                      {expandedIndex === index ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-4 pl-16"
                  >
                    <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
