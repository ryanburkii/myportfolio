'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg'
      : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}
              className="group flex items-center space-x-0 focus:outline-none transition-all duration-300 hover:scale-105"
            >
            <div className="w-12 h-12 relative rounded-full overflow-hidden transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.7)]">
              <Image
                src="/logo-nobg.png"
                alt="logo"
                fill
                className="object-contain"
              />
            </div>
            <span
              className="ml-3 overflow-hidden whitespace-nowrap text-white text-lg font-bold transform translate-x-[-30px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            >
              rjb.rip
            </span>
            </button>
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 group"
            >
              <span
                className={`block h-0.5 w-6 bg-slate-600 dark:bg-slate-300 rounded transition-all duration-300 ${
                  isMobileMenuOpen
                    ? 'rotate-45 translate-y-[8px]'
                    : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-slate-600 dark:bg-slate-300 rounded transition-all duration-300 ${
                  isMobileMenuOpen
                    ? 'opacity-0'
                    : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-slate-600 dark:bg-slate-300 rounded transition-all duration-300 ${
                  isMobileMenuOpen
                    ? '-rotate-45 -translate-y-[8px]'
                    : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu with animation */}
        <div
          className={`md:hidden mt-4 bg-white/90 dark:bg-slate-900/90 rounded-lg shadow-lg backdrop-blur-md overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-96 opacity-100 translate-y-0'
              : 'max-h-0 opacity-0 -translate-y-2'
          }`}
        >
          <div className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}