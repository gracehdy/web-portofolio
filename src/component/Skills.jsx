import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Skills() {
  const skillGroups = [
    {
      cat: 'Languages',
      items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'C', 'HTML', 'CSS', 'Java']
    },
    {
      cat: 'Frameworks & Libraries',
      items: ['FastAPI', 'NestJS', 'Vue.js', 'Streamlit', 'Pandas', 'NumPy', 'Scikit-learn', 'LightGBM', 'XGBoost', 'Plotly', 'Seaborn', 'Matplotlib', 'Vuetify', 'UnoCSS']
    },
    {
      cat: 'Developer Tools & Databases',
      items: ['PostgreSQL', 'MySQL', 'Prisma', 'Docker', 'Git', 'GitHub', 'Vite', 'Turborepo', 'XAMPP', 'Groq']
    },
  ];

  const certifications = [
    {
      title: "Getting Started with Data",
      issuer: "IBM",
      link: "https://www.credly.com/badges/2af4a8a6-3bd6-427a-bdc2-ee0675ad7b2c/public_url",
    },
    {
      title: "Data Fundamentals",
      issuer: "IBM",
      link: "https://www.credly.com/badges/66205a1d-0d68-4bfe-8ac1-94f2f8ce0e9e/public_url",
    },
    {
      title: "Machine Learning for Data Science Projects",
      issuer: "IBM",
      link: "https://www.credly.com/badges/339db0cc-db7a-4bb0-b87c-16712eec64d0/public_url",
    },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20 border-t border-stone-200 dark:border-[#312C31]">
      <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12">What I work with</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {skillGroups.map((group) => (
          <div key={group.cat} className="space-y-6">
            <h3 className="text-sm font-semibold text-stone-500 dark:text-[#B0A8AC] uppercase tracking-wider">
              {group.cat}
            </h3>
            <div className="flex flex-wrap gap-4">
              {group.items.map((skill, idx) => (
                <motion.div
                  key={skill}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3 + (idx % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.15
                  }}
                  whileHover={{ scale: 1.18 }}
                  className="w-20 h-20 rounded-full bg-rose-100 dark:bg-[#1E1B21] border border-stone-200 dark:border-[#312C31] flex items-center justify-center text-center text-[11px] font-semibold leading-tight p-2 shadow-sm cursor-pointer transition-colors duration-300 text-stone-800 dark:text-[#F3EEEC]"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-sm font-semibold text-stone-500 dark:text-[#B0A8AC] uppercase tracking-wider mb-6">
          Certifications
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, idx) => (
            <a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white dark:bg-[#1E1B21] border border-stone-200 dark:border-[#312C31] hover:border-rose-400 dark:hover:border-[#FF7C99] rounded-2xl p-5 transition-colors duration-300"
            >
              <span className="text-xs text-rose-500 dark:text-[#FF7C99] font-medium">
                {cert.issuer}
              </span>
              <h4 className="font-serif text-base font-medium text-stone-900 dark:text-[#F3EEEC] mt-1.5 mb-3 leading-snug">
                {cert.title}
              </h4>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-500 dark:text-[#FFB0C1] group-hover:text-rose-600 transition-colors">
                View credential
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}