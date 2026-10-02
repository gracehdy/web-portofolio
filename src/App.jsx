import React, { useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Experience from './component/Experience';
import Contact from './component/Contact';

export default function Portfolio() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="bg-[#FAF9F7] dark:bg-[#17151A] text-stone-900 dark:text-[#F3EEEC] font-sans min-h-screen transition-colors duration-300">
      <Navbar darkMode={theme === 'dark'} toggleDarkMode={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      <footer className="border-t border-stone-200 dark:border-[#312C31] py-8 text-center text-xs text-stone-500 dark:text-[#B0A8AC]">
        © 2026 Grace Heidy.
      </footer>
    </div>
  );
}