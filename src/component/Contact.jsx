import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { Icon: Mail, href: "mailto:gracehdyc@gmail.com", label: "Email"},
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-stone-200 dark:border-[#312C31] text-center flex flex-col items-center justify-center">
      <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Let's talk</h2>
      <p className="text-stone-500 dark:text-[#B0A8AC] mb-8 max-w-md mx-auto">
        Have a project in mind, an opportunity, or want to collaborate?
      </p>

      <div className="flex flex-col items-center justify-center gap-3">
        

        <span className="text-xs font-semibold uppercase tracking-wider text-rose-500 dark:text-[#FF7C99]">
          Contact me!
        </span>

        <div className="flex items-center justify-center pt-1">
          {socialLinks.map(({ Icon, href, label, email }, idx) => (
            <a
              key={idx}
              href={href}
              aria-label={label}
              className="px-6 py-3 rounded-full border border-stone-300 dark:border-[#312C31] bg-white dark:bg-[#1E1B21] text-stone-900 dark:text-[#F3EEEC] hover:border-rose-400 hover:text-rose-600 dark:hover:text-[#FFB0C1] hover:bg-rose-50 dark:hover:bg-[#3A222B] transition-all flex items-center gap-2.5 text-sm font-semibold shadow-sm group"
            >
              <Icon size={18} className="text-rose-500 dark:text-[#FF7C99]" />
              <span>{email}</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-stone-400 dark:text-[#B0A8AC]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}