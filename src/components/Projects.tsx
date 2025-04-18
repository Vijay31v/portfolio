'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    id: 'learning-management',
    title: 'Learning Management App',
    description:
      'A scalable full-stack learning management system using Next.js and Node.js on AWS, incorporating user authentication and video streaming. Features serverless backend architecture leveraging AWS Lambda, DynamoDB, S3, and CloudFront for data storage and media delivery.',
    technologies: [
      'Next.js',
      'Node.js',
      'AWS Lambda',
      'DynamoDB',
      'S3',
      'CloudFront',
      'Clerk',
      'Stripe',
      'Redux Toolkit',
      'Tailwind CSS',
      'TypeScript',
      'Docker',
    ],
    imageUrl: '/projects/learning-management.jpg',
    githubUrl: 'https://github.com/Vijay31v/learning-management',
  },
  {
    id: 'ai-trip-planner',
    title: 'AI Trip Planner',
    description:
      'An AI-powered platform to generate personalized travel itineraries using Google Gemini AI. Built with a responsive React interface styled with Tailwind CSS, backed by Firebase for efficient data management. Implements secure Google OAuth2 authentication for user data protection and one-click login.',
    technologies: [
      'React',
      'Tailwind CSS',
      'Firebase',
      'Google Gemini AI',
      'Google OAuth2',
    ],
    imageUrl: '/projects/ai-trip-planner.jpg',
    githubUrl: 'https://github.com/Vijay31v/AI-Trip-Planner',
  },
  {
    id: 'real-estate-app',
    title: 'Real Estate Application',
    description:
      'A full-stack real estate application using MERN stack with features like property search and filtering, real-time chat with Socket.IO, and user profile management. Prisma ORM was used for database interactions, enabling flexibility to switch between various database providers without code modifications for queries.',
    technologies: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'Socket.IO',
      'Prisma ORM',
      'JWT',
    ],
    imageUrl: '/projects/real-estate.jpg',
    githubUrl: 'https://github.com/Vijay31v/Real-Estate-Application',
  },
];

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading">Projects</h2>
          <p className="subheading mt-4 max-w-2xl mx-auto">
            Showcasing my technical expertise through real-world applications
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-10 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
                  <div className="relative h-full w-full bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">Project Image</span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                <p className="text-muted-foreground mb-4">
                  {expandedProject === project.id
                    ? project.description
                    : project.description.length > 150
                      ? `${project.description.substring(0, 150)}...`
                      : project.description}
                </p>

                {project.description.length > 150 && (
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="text-primary font-medium mb-6 hover:underline focus:outline-none"
                  >
                    {expandedProject === project.id ? 'Show Less' : 'Read More'}
                  </button>
                )}

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 btn btn-outline"
                    >
                      <FaGithub className="h-4 w-4" />
                      GitHub
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 btn btn-primary"
                    >
                      <FaExternalLinkAlt className="h-4 w-4" />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
