import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';


const ExperienceFannedStack = ({ 
  photos = [
    { src: '/photos/WhatsApp Image 2026-10-02 at 12.15.31 (1).jpeg', alt: 'Photo 1' },
    { src: '/photos/WhatsApp Image 2026-10-02 at 12.04.57.jpeg', alt: 'Photo 2' },
  ] 
}) => {
  const [cards, setCards] = useState(photos);
  const [isAnimating, setIsAnimating] = useState(false);

  const fanOffsets = [
    { r: 0, x: 0, y: 0, s: 1 },
    { r: 7, x: 7, y: 5, s: 0.96 },
    { r: -8, x: -7, y: 6, s: 0.93 },
    { r: 5, x: 9, y: -4, s: 0.9 },
    { r: -6, x: -9, y: -3, s: 0.88 },
  ];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCards((prev) => {
      const newArr = [...prev];
      const front = newArr.shift();
      newArr.push(front);
      return newArr;
    });
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleDotClick = (targetIdx) => {
    if (isAnimating) return;
    setIsAnimating(true);
    const activePhoto = photos[targetIdx];
    setCards((prev) => {
      const idxInCurrent = prev.indexOf(activePhoto);
      if (idxInCurrent === 0) return prev;
      const front = prev.slice(idxInCurrent);
      const back = prev.slice(0, idxInCurrent);
      return [...front, ...back];
    });
    setTimeout(() => setIsAnimating(false), 300);
  };

  const activeOriginalIndex = photos.indexOf(cards[0]);

  return (
    <div className="flex flex-col items-center gap-3">
      <motion.div 
        className="relative w-80 h-80 md:w-90 md:h-90 cursor-pointer group"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleNext}
      >
        <AnimatePresence mode="popLayout">
          {cards.map((photoItem, index) => {
            const off = fanOffsets[Math.min(index, fanOffsets.length - 1)];
            const isFront = index === 0;

            const imgSrc = typeof photoItem === 'object' ? photoItem.src : photoItem;
            const imgAlt = typeof photoItem === 'object' ? photoItem.alt : `Experience Photo ${index + 1}`;
            
            const isImage = typeof imgSrc === 'string' && (imgSrc.includes('/') || imgSrc.includes('.'));
            const itemKey = typeof photoItem === 'object' ? photoItem.src : photoItem;

            return (
              <motion.div
                key={itemKey}
                layout
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: off.s,
                  rotate: off.r,
                  x: off.x,
                  y: off.y,
                  opacity: 1,
                  zIndex: cards.length - index,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`absolute inset-0 bg-[#F3EEEC] dark:bg-[#1E1B21] border ${
                  isFront ? 'border-stone-300 dark:border-[#312C31] group-hover:border-rose-400' : 'border-stone-200 dark:border-[#312C31]'
                } rounded-2xl shadow-lg flex items-center justify-center text-stone-500 dark:text-[#B0A8AC] text-xs font-medium select-none overflow-hidden transition-colors duration-200`}
              >
                {isImage ? (
                  <img 
                    src={imgSrc} 
                    alt={imgAlt} 
                    className="w-full h-full object-cover pointer-events-none" 
                  />
                ) : (
                  <span>{photoItem}</span>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

     
      <div className="flex gap-1.5 z-10">
        {photos.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              handleDotClick(idx);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeOriginalIndex === idx ? 'w-4 bg-rose-400' : 'w-1.5 bg-stone-300 dark:bg-[#312C31]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Experience() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 60%"]
  });

  const timelineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const experiences = [
    {
      role: 'Master of Ceremony — CIPHER 2026',
      organization: 'Computer Science Student Association (HIMTI) BINUS',
      location: 'Jakarta, ID',
      period: 'Sep 2026',
      desc: 'Served as Master of Ceremonies for CIPHER 2026, a public tech expo at Mall @ Alam Sutera showcasing AI and Cybersecurity innovations. Hosted the event proceedings for a general audience, helping communicate emerging technologies in an accessible, non-commercial format.',
      tags: ['Public Speaking', 'Event Hosting', 'Tech Communication'],
      photos: [
        { src: '/photos/WhatsApp Image 2026-10-02 at 12.15.31 (1).jpeg', alt: 'Cipher Event 1' },
        { src: '/photos/WhatsApp Image 2026-10-02 at 12.04.57.jpeg', alt: 'Cipher Event 2' },
        { src: '/photos/WhatsApp Image 2026-10-02 at 12.04.56.jpeg', alt: 'Cipher Event 3' },
      ]
    },
    {
      role: 'Master of Ceremony — HILET 2025',
      organization: 'Computer Science Student Association (HIMTI) BINUS',
      location: 'Jakarta, ID',
      period: 'Dec 2025',
      desc: 'Served as Master of Ceremonies (Online Session) for HIMTI Leadership Training (HILET) 2025, a fundamental leadership training program organized by HIMTI BINUS University for incoming HIMTI activist candidates; hosted the virtual session proceedings and facilitated engagement among participants in a remote format.',
      tags: ['Virtual Hosting', 'Public Speaking', 'Adaptability'],
      photos: ['/photos/Screenshot_20260928_235830_Instagram.jpg'],
    },
    {
      role: 'Vice Event Leader & Master of Ceremony, Region Semarang (SESVENT 2025)',
      organization: 'Computer Science Student Association (HIMTI) BINUS',
      location: 'Jakarta, ID',
      period: 'Sep 2025 - Oct 2025',
      desc: 'Led the event committee and served as Master of Ceremonies for HIMTI\'s activist-selection program in Semarang; supervised planning, scheduling, and assessment coordination for new members while hosting the event proceedings.',
      tags: ['Leadership', 'Planning & Organizing', 'Event Hosting', 'Team Management', 'Time Management'],
      photos: [
        '/photos/DSC_0438.JPG', 
        '/photos/DSC_0466.JPG', 
        '/photos/DSC_0533 (1).JPG', 
        '/photos/image3-1.jpg'
      ],
    },
    {
      role: 'Moderator & PBP Staff, Region Semarang (TECHNO 2025)',
      organization: 'Computer Science Student Association (HIMTI) BINUS',
      location: 'Jakarta, ID',
      period: 'Aug 2025 - Sep 2025',
      desc: 'I served as a staff member for Techno 2025, a welcoming party event for new computer science students. At this event, I registered participants for the programming language class (PBP), sent out email blasts as reminders to participants, and served as Master of Ceremonies, hosting and guiding the event flow to maintain an engaging, lively, and structured atmosphere. Served as Moderator for the talk show "Down the AI Rabbit Hole: Prospects and Challenges in Academy & Careers" at HIMTI BINUS TECHNO 2025. Facilitated discussion on AI trends and their impact on academic and career opportunities for new students.',
      tags: ['Facilitation', 'Critical Thinking', 'Public Speaking'],
      photos: [
        '/photos/_DSC0075.JPG', 
        '/photos/_DSC0112.JPG', 
        '/photos/image3-2.jpg',
        '/photos/WhatsApp Image 2026-10-02 at 12.13.47.jpeg'
      ],
    },
    {
      role: 'Freshmen Partner',
      organization: 'First Year Program BINUS',
      location: 'Semarang, ID',
      period: 'Sep 2025 - Jun 2026',
      desc: [
        'Mentored freshmen through their first year to support their academic transition, strengthening facilitation, adaptability, and collaboration skills.',
        'Led a coastal mangrove/tree-planting project as part of the program\'s community initiative.',
      ],
      tags: ['Mentorship', 'Leadership', 'Public Speaking', 'Community Initiative'],
      photos: [
        '/photos/IMG_1566.jpg', 
        '/photos/IMG_1651 (1).jpg', 
        '/photos/IMG_1833.jpg', 
        '/photos/IMG_2294.jpg'
      ],
    },
    {
      role: 'Freshmen Leader',
      organization: 'First Year Program BINUS',
      location: 'Semarang, ID',
      period: 'Jul 2025 - Sep 2025',
      desc: [
        'Mentored and facilitated a class of 40+ freshmen at BINUS University as a Speaker for their orientation.',
      ],
      tags: ['Mentorship', 'Leadership', 'Public Speaking', 'Time Management'],
      photos: [
        '/photos/WhatsApp_Image_2026-09-16_at_00.24.26.jpeg', 
        '/photos/WhatsApp Image 2026-10-02 at 12.13.48 (1).jpeg', 
        '/photos/WhatsApp Image 2026-10-02 at 12.13.42.jpeg', 
        '/photos/IMG-20250818-WA0013.jpg'
      ],
    },
  ];

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20 border-t border-stone-200 dark:border-[#312C31]">
      <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12">Where I've grown outside the classroom</h2>
      
      <div ref={timelineRef} className="relative space-y-12">
        
    
        <div className="absolute left-0 top-2 bottom-2 w-[20px] flex justify-center pointer-events-none">
          <div className="w-[1px] h-full bg-stone-300 dark:bg-[#312C31]" />
          <motion.div 
            style={{ scaleY: timelineScaleY }} 
            className="absolute top-0 bottom-0 w-[1px] bg-rose-500 dark:bg-[#FF7C99] origin-top z-0" 
          />
        </div>

        {experiences.map((item, idx) => (
          <div key={idx} className="relative pl-[36px] group flex flex-col md:flex-row gap-6 items-start">
          
            <div className="absolute left-0 top-1.5 w-[20px] flex justify-center z-10">
              <div className="w-[15px] h-[15px] rounded-full bg-[#FAF9F7] dark:bg-[#17151A] border-2 border-stone-300 dark:border-[#312C31] group-hover:border-rose-500 dark:group-hover:border-[#FF7C99] group-hover:bg-rose-100 dark:group-hover:bg-[#3A222B] transition-all duration-300" />
            </div>

            <div className="shrink-0 pt-1">
              <ExperienceFannedStack photos={item.photos} />
            </div>

            <div className="space-y-2 flex-1 min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500 dark:text-[#B0A8AC]">
                <span>{item.organization} • {item.location}</span>
                <span className="font-medium bg-stone-200/60 dark:bg-[#312C31] px-2 py-0.5 rounded">{item.period}</span>
              </div>
              
              <h3 className="font-serif text-xl font-medium text-stone-900 dark:text-[#F3EEEC]">{item.role}</h3>

              {Array.isArray(item.desc) ? (
                <ul className="text-sm text-stone-600 dark:text-[#B0A8AC] max-w-2xl leading-relaxed list-disc pl-4 space-y-1">
                  {item.desc.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-stone-600 dark:text-[#B0A8AC] max-w-2xl leading-relaxed">{item.desc}</p>
              )}
              
              <div className="flex flex-wrap gap-2 pt-2">
                {item.tags.map((t) => (
                  <span key={t} className="text-xs text-rose-600 dark:text-[#FFB0C1] bg-rose-100 dark:bg-[#3A222B] px-2.5 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
