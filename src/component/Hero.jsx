import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, InstagramIcon, LinkedinIcon } from './Icons';

const socialLinks = [
  { Icon: GithubIcon, href: "https://github.com/gracehdy", label: "GitHub" },
  { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/graceheidyc", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:gracehdyc@gmail.com", label: "Email" },
  { Icon: InstagramIcon, href: "https://www.instagram.com/gracehdyy", label: "Instagram" },
];

const HeroPhotoBlob = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [14, -14]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-14, 14]);

  const blobX = useTransform(mouseX, [-0.5, 0.5], [-18, 18]);
  const blobY = useTransform(mouseY, [-0.5, 0.5], [-18, 18]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex justify-center items-center w-full py-8 group [perspective:800px]"
    >
      <motion.div
        style={{ x: blobX, y: blobY }}
        className="absolute w-[300px] h-[340px] bg-rose-200 dark:bg-[#3A222B] rounded-[44%_56%_62%_38%/_48%_42%_58%_52%] transition-[border-radius] duration-500 ease-out group-hover:rounded-[58%_42%_38%_62%/_42%_58%_42%_58%]"
      />
      <motion.div
      style={{ rotateX, rotateY }}
      className="relative w-[260px] h-[300px] rounded-[24px] bg-[#F3EEEC] dark:bg-[#1E1B21] border border-stone-200 dark:border-[#312C31] shadow-xl group-hover:shadow-rose-400/30 transition-shadow duration-300 overflow-hidden [transform-style:preserve-3d]"
    >
      <img
        src="/photos/1764724329268.jpg"
        alt="Grace"
        draggable={false}
        className="w-full h-full object-cover pointer-events-none"
      />
    </motion.div>
    </div>
  );
};

export default function Hero() {

  return (
    <section id="home" className="max-w-6xl mx-auto px-6 pt-28 pb-16 md:py-24 grid md:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-500 dark:text-[#FF7C99]">
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl font-medium leading-tight">
          Hi, I'm Grace!
        </h1>

       <p className="text-stone-600 dark:text-[#B0A8AC] text-[17px] leading-relaxed max-w-[48ch] text-justify">
        I'm a Computer Science student who gets excited about data science and AI. I like taking an idea from a rough sketch to something people can actually open and use, whether that's a prediction tool, a dashboard, or a platform that helps a community solve a real problem.
      </p>

        <div className="flex flex-wrap gap-3.5 pt-2">
          <a 
            href="/CV_Grace.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            download="CV_Grace.pdf"
            className="px-6 py-3.5 bg-stone-900 dark:bg-[#F3EEEC] text-white dark:text-[#17151A] rounded-lg font-semibold text-sm hover:bg-rose-500 dark:hover:bg-[#FF7C99] dark:hover:text-white transition-colors cursor-pointer"
          >
            Download CV
          </a>
          <a href="#contact" className="px-6 py-3.5 border border-stone-300 dark:border-[#312C31] text-stone-900 dark:text-[#F3EEEC] rounded-lg font-semibold text-sm hover:border-rose-500 dark:hover:border-[#FF7C99] hover:text-rose-500 dark:hover:text-[#FF7C99] transition-colors">
            Get in touch
          </a>
        </div>

       <div className="flex gap-3.5 pt-4">
        {socialLinks.map(({ Icon, href, label }, idx) => (
          <a
            key={idx}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            aria-label={label}
            className="w-9 h-9 rounded-full border border-stone-200 dark:border-[#312C31] flex items-center justify-center text-stone-700 dark:text-[#F3EEEC] hover:bg-rose-100 dark:hover:bg-[#3A222B] hover:border-rose-400 dark:hover:border-[#FF7C99] hover:text-rose-600 dark:hover:text-[#FFB0C1] transition-all"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
 
      </div>

      <div>
        <HeroPhotoBlob />
      </div>
    </section>
  );
}
