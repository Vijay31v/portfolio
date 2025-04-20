'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaHackerrank } from 'react-icons/fa';

type Education = {
  institution: string;
  degree: string;
  field: string;
  period: string;
  gpa: string;
  logo: string;
  website?: string;
};

type Certificate = {
  name: string;
  issuer?: string;
  logo: React.ReactNode;
  url?: string;
};

const educationList: Education[] = [
  {
    institution: 'University of Central Missouri',
    degree: 'MS',
    field: 'Computer Science',
    period: 'Aug 2023 - May 2025',
    gpa: '3.66/4.0',
    logo: '/logos/ucm-logo.png',
    website: 'https://www.ucmo.edu/',
  },
  {
    institution: 'Hindustan University',
    degree: 'B.Tech',
    field: 'Electronics and Communication Engineering',
    period: 'July 2019 - June 2023',
    gpa: '9.0/10.0',
    logo: '/logos/hindustan-logo.png',
    website: 'https://hindustanuniv.ac.in/',
  },
];

const certificates: Certificate[] = [
  {
    name: 'Problem Solving',
    logo: <FaHackerrank className="h-6 w-6 text-[#00EA64]" />,
    url: 'https://www.hackerrank.com/certificates/e6c6ba2c0d1d',
  },
  {
    name: 'Python',
    logo: <FaHackerrank className="h-6 w-6 text-[#00EA64]" />,
    url: 'https://www.hackerrank.com/certificates/d03d12733cd2',
  },
  {
    name: 'SQL',
    logo: <FaHackerrank className="h-6 w-6 text-[#00EA64]" />,
    url: 'https://www.hackerrank.com/certificates/1bb53388df2a',
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading">Education</h2>
          <p className="subheading mt-4 max-w-2xl mx-auto">
            My academic background and certifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6 text-center md:text-left">
              Academic Degrees
            </h3>

            <div className="space-y-8">
              {educationList.map((edu, index) => (
                <Link
                  key={index}
                  href={edu.website || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div
                    className="card hover:shadow-md transition-all duration-300 flex items-start gap-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex-shrink-0 w-16 h-16 relative bg-white rounded-full p-2 flex items-center justify-center">
                      <Image
                        src={edu.logo}
                        alt={edu.institution}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-bold">{edu.institution}</h4>
                        <FaExternalLinkAlt className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-primary font-medium">
                        {edu.degree} in {edu.field}
                      </p>
                      <div className="flex justify-between mt-2 text-muted-foreground">
                        <span>{edu.period}</span>
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Certificates Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-center md:text-left">
              Certifications & Awards
            </h3>

            <div className="card h-full flex flex-col justify-center">
              <ul className="space-y-4">
                {certificates.map((cert, index) => (
                  <li key={index}>
                    <Link
                      href={cert.url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.div
                        className="flex items-start gap-3 hover:bg-accent/50 p-3 rounded-md transition-all"
                        whileHover={{ x: 5 }}
                      >
                        <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                          {cert.logo}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium">{cert.name}</p>
                            <FaExternalLinkAlt className="h-3 w-3 text-primary" />
                          </div>
                          {cert.issuer && (
                            <p className="text-muted-foreground text-sm">
                              {cert.issuer}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
