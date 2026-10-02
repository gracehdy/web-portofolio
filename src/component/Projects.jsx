import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SpotlightCard = ({ title, company, date, description, tags, link = "#" }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      className="relative bg-white dark:bg-[#1E1B21] border border-stone-200 dark:border-[#312C31] hover:border-rose-400 rounded-2xl p-6 flex flex-col justify-between overflow-hidden transition-colors duration-300 group shadow-sm hover:shadow-lg"
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(240px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 124, 153, 0.15), transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          {company && (
            <span className="text-xs text-rose-500 dark:text-[#FF7C99] font-medium">
              {company}
            </span>
          )}
          {date && (
            <span className="text-xs text-stone-400 dark:text-[#726B72] font-medium whitespace-nowrap">
              {date}
            </span>
          )}
        </div>
        <h3 className="font-serif text-2xl font-medium text-stone-900 dark:text-[#F3EEEC]">
          {title}
        </h3>
        <p className="text-sm text-stone-600 dark:text-[#B0A8AC] leading-relaxed">
          {description}
        </p>
      </div>

      <div className="relative z-10 mt-6 flex flex-col gap-4">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-stone-600 dark:text-[#B0A8AC] bg-stone-100 dark:bg-[#17151A] px-2.5 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-500 dark:text-[#FFB0C1] hover:text-rose-600 transition-colors"
        >
          View project <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const projectsData = [
    {
      title: "StressPredict",
      company: "Health & ML Benchmark",
      date: "June 2026",
      description: "Developed a web application to classify stress level into 3 classes; ran EDA, preprocessing, and benchmarking across 5 algorithms, selecting LightGBM (75.51% accuracy and 75.69% macro F1). Accepted as one of the projects showcased in Computer Science Festival 2026.",
      tags: ["Python", "Streamlit", "LightGBM", "Scikit-learn", "FastAPI", "Groq LLM"],
      link: "https://github.com/gracehdy/stress-predict-ml",
    },
    {
      title: "AksiKita",
      company: "Civic Tech Platform",
      date: "June 2026",
      description: "Built a location-based civic tech platform that lets communities report local issues and convert them into real action coordinated by volunteers; structured as a Turborepo monorepo with a NestJS + Prisma/PostgreSQL API (JWT auth) and a Vue 3 + Vuetify frontend running on Bun.",
      tags: ["Bun", "NestJS", "Prisma", "PostgreSQL", "JWT", "Vue 3", "Vite", "Vuetify", "UnoCSS", "Turborepo"],
      link: "https://github.com/gracehdy/aksikita",
    },
    {
      title: "Career Success Factor Analysis",
      company: "Data Mining & Analytics",
      date: "June 2026",
      description: "Conducted a data mining analysis on 400 graduate records to identify key drivers of career success; performed EDA, correlation analysis, and comparative benchmarking across academic, skill-based, and demographic variables.",
      tags: ["Python", "Pandas", "Seaborn", "Matplotlib"],
      link: "https://github.com/gracehdy/education-career",
    },
    {
      title: "Conference Paper Accepted (ICIMTech 2026)",
      company: "Scopus-indexed Research",
      date: "June 2026",
      description: "Designed and implemented a systematic ablation study for aboveground carbon estimation in Pulau Rinca, Komodo National Park using Sentinel-2 and GEDI LiDAR. Accepted with revisions for publication and presented at ICIMTech 2026.",
      tags: ["Python", "JavaScript"],
      link: "https://drive.google.com/file/d/1N4QyXPCk1mXupphc1KVnB1DNkLheQCec/view?usp=sharing",
    },
    {
      title: "StuntingApp",
      company: "Health Tech & Prevention",
      date: "Dec 2025",
      description: "Built an AI-based system using a Decision Tree Classifier to predict stunting status from anthropometric data in real time, replacing error-prone manual measurement methods. Included patient data management and a monitoring dashboard with city-level case analytics.",
      tags: ["Python"],
      link: "https://github.com/gracehdy/stunting-app",
    },
    {
      title: "Academic Information System",
      company: "Database Systems",
      date: "Dec 2025",
      description: "Normalized a raw academic dataset to eliminate insert, update, and delete anomalies, decomposing it into 5 relational entities with a proper ERD. Implemented and validated the schema in MySQL using XAMPP.",
      tags: ["SQL"],
      link: "https://github.com/gracehdy/Academic-Information-System",
    },
    {
      title: "Student Record Management System",
      company: "Systems Programming",
      date: "June 2025",
      description: "Built a student record system using a self-balancing B-Tree data structure to keep search and insert operations at O(log n) regardless of dataset size. Chosen over BSTs for its balanced structure and reduced disk access on large datasets.",
      tags: ["C", "Data Structure"],
      link: "https://github.com/gracehdy/student-record-management-system",
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-stone-200 dark:border-[#312C31]">
      <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12">A few things I've built</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, idx) => (
          <SpotlightCard
            key={idx}
            title={project.title}
            company={project.company}
            date={project.date}
            description={project.description}
            tags={project.tags}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}