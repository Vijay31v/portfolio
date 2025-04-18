'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <motion.div
        className="container text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="heading">
          Vijay
          <span className="block text-primary mt-2">
            Full-Stack Developer & AI Enthusiast
          </span>
        </h1>

        <p className="subheading mt-6 max-w-2xl mx-auto">
          Crafting innovative solutions with Next.js, AWS, and AI
          implementations. Currently pursuing MS in Computer Science, graduating
          May 2025.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#projects" className="btn btn-primary">
            View Projects
          </Link>
          <Link href="#contact" className="btn btn-outline">
            Contact Me
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
