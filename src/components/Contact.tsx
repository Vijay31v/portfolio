'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  contactFormSchema,
  ContactFormValues,
} from '@/lib/validations/contact';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (formData: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus({
        success: true,
        message: 'Message sent successfully! I will get back to you soon.',
      });
      reset();
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-muted/40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading">Contact Me</h2>
          <p className="subheading mt-4 max-w-2xl mx-auto">
            Interested in working together? Let&apos;s connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold">Get In Touch</h3>

            <p className="text-muted-foreground">
              I&apos;m currently looking for new opportunities. Whether you have
              a question or just want to say hi, I&apos;ll try my best to get
              back to you!
            </p>

            <div className="space-y-4 mt-8">
              <a
                href="mailto:vijayvelaga31@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <FaEnvelope className="h-5 w-5" />
                </div>
                <span className="group-hover:text-primary transition-colors">
                  vijayvelaga31@gmail.com
                </span>
              </a>

              <a
                href="https://github.com/Vijay31v"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <FaGithub className="h-5 w-5" />
                </div>
                <span className="group-hover:text-primary transition-colors">
                  github.com/Vijay31v
                </span>
              </a>

              <a
                href="https://linkedin.com/in/vijay-velaga"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <FaLinkedin className="h-5 w-5" />
                </div>
                <span className="group-hover:text-primary transition-colors">
                  linkedin.com/in/vijay-velaga
                </span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  {...register('name')}
                  className={`w-full rounded-md border ${
                    errors.name ? 'border-red-500' : 'border-input'
                  } bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className={`w-full rounded-md border ${
                    errors.email ? 'border-red-500' : 'border-input'
                  } bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message')}
                  className={`w-full rounded-md border ${
                    errors.message ? 'border-red-500' : 'border-input'
                  } bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus.message && (
                <p
                  className={`text-sm ${
                    submitStatus.success
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-red-600 dark:text-red-400'
                  }`}
                >
                  {submitStatus.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
