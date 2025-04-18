'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-muted/40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="heading">About Me</h2>
          <p className="mt-6 text-lg leading-relaxed">
            I&apos;m a full-stack developer specializing in modern web
            technologies and AI implementations. With a strong foundation in
            Computer Science and a passion for building scalable applications, I
            combine technical expertise with creative problem-solving to deliver
            impactful solutions.
          </p>

          <p className="mt-4 text-lg leading-relaxed">
            My journey began with a B.Tech in Electronics and Communication
            Engineering, and I&apos;m currently pursuing an MS in Computer
            Science at the University of Central Missouri (graduating May 2025).
            I&apos;m particularly interested in cloud architecture with AWS and
            developing AI-powered applications that solve real-world problems.
          </p>

          <p className="mt-4 text-lg leading-relaxed">
            When I&apos;m not coding, I&apos;m enhancing my skills through
            platforms like HackerRank, where I&apos;ve earned 5-star badges in
            Problem Solving and Python.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
