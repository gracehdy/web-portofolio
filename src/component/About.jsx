import React from 'react';

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-stone-200 dark:border-[#312C31]">
      <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12">A little more about me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-start">
     
        <div className="space-y-4 text-stone-600 dark:text-[#B0A8AC] text-base leading-relaxed text-justify">
          <p>
            I've always been a naturally curious person, drawn to understanding how things work beneath the surface. Since so much of how our world works today is shaped by technology, that curiosity pulled me toward it, particularly data science and AI. What keeps me hooked is the problem-solving side of it: I'm drawn to challenges that have real stakes, the small and large frictions people run into in everyday life, and the chance to build something that actually makes a difference for them. There's something satisfying about taking a messy, real-world problem and slowly shaping it into something structured, functional, and useful.
          </p>
          <p>
            Outside of building things, I'm a reader and a movie person, always looking for a good story, whether it's on a page or a screen. I also enjoy mentoring and getting involved in community projects, something about helping someone else figure things out tends to sharpen how I think about my own work, too.
          </p>
        </div>

        <div className="bg-white dark:bg-[#1E1B21] border border-stone-200 dark:border-[#312C31] rounded-2xl divide-y divide-stone-200 dark:divide-[#312C31]">
          {[
            { k: 'University', v: 'Bina Nusantara University' },
            { k: 'Major', v: 'Computer Science' },
            { k: 'GPA', v: '3.84 / 4.00' },
            { k: 'Recent achievement', v: 'Paper accepted at ICIMTech 2026' },
          ].map((row) => (
            <div key={row.k} className="flex justify-between p-4 text-sm">
              <span className="text-stone-500 dark:text-[#B0A8AC]">{row.k}</span>
              <span className="font-semibold text-right text-stone-900 dark:text-[#F3EEEC]">{row.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}