'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we can show the theme toggle button
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Vijay
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}

          {/* Theme toggle button */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          )}
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <nav className="flex flex-col space-y-4 p-4 border-t md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
