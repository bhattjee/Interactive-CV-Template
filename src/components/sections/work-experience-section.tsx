"use client";

import React from 'react';
import { motion } from "framer-motion";

interface Job {
  title: string;
  details?: string;
  date: string;
}

interface Experience {
  company: string;
  location: string;
  jobs: Job[];
}

const experiences: Experience[] = [
  {
    company: "collins",
    location: "New York",
    jobs: [
      { title: "Creative Director", date: "Jan 2025 – Present" },
      { title: "Design Director", date: "Jan 2024 – Jan 2025" },
      { title: "Senior Designer", date: "Jul 2021 – Jan 2024" },
      { title: "Designer", date: "Jul 2019 – Jun 2021" },
    ],
  },
  {
    company: "Pentagram",
    location: "New York",
    jobs: [
      { title: "Designer, Full-time", date: "Jan 2019 – Jul 2019" },
      { title: "Design Intern, Internship", date: "Sep 2018 – Dec 2018" },
    ],
  },
  {
    company: "Freelance",
    location: "Warsaw, Poland",
    jobs: [
      { 
        title: "Designer & Art Director", 
        details: "Self Employed",
        date: "Feb 2014 – Apr 2019" 
      },
    ],
  },
  {
    company: "amastudio",
    location: "Warsaw, Poland",
    jobs: [
      { title: "Senior Designer", date: "Jun 2016 – Aug 2018" },
      { title: "Designer", date: "Jun 2014 – May 2016" },
    ],
  },
];

const WorkExperienceSection = () => {
  return (
    <motion.section 
      id="experience" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-card text-card-foreground rounded-[20px] p-10 lg:p-12 shadow-[0_2px_12px_rgba(0,0,0,0.08),0_1px_4px_rgba(0,0,0,0.04)]"
    >
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-start gap-10 mb-10"
      >
        <div className="w-[80px] shrink-0">
          <p className="text-[#999999] text-base leading-normal">(02)</p>
        </div>
        <h3 className="text-foreground text-xl font-bold uppercase tracking-[0.4px] leading-[1.3]">
          Work Experience
        </h3>
      </motion.div>
      <div className="flex flex-col gap-10">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="grid grid-cols-1 md:grid-cols-[240px_1fr] md:gap-10 gap-4"
          >
            <div className="flex flex-col gap-2">
              <h6 className="text-foreground text-base font-bold leading-[1.4]">{exp.company}</h6>
              <p className="text-[#999999] text-[15px] leading-normal">{exp.location}</p>
            </div>
            <div className="flex flex-col gap-6">
              {exp.jobs.map((job, jobIndex) => (
                <p key={jobIndex} className="text-[15px] leading-[1.5] text-foreground">
                  {job.title}
                  {job.details && (
                    <>
                      <br />
                      <span className="text-muted-foreground">{job.details}</span>
                    </>
                  )}
                  <br />
                  <span className="text-muted-foreground">{job.date}</span>
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WorkExperienceSection;