"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    institution: "School of Visual Arts, New York",
    details: [
      "BFA in Graphic Design, Minor in Art Direction.",
      "Focused on branding, typography, motion graphics, and creative strategy.",
    ],
    year: "2014–2018",
  },
  {
    institution: "Future London Academy (Online)",
    details: ["Brand Strategy Masterclass."],
    year: "2022",
  },
  {
    institution: "The Futur (Online)",
    details: ["Typography & Art Direction Intensive."],
    year: "2021",
  },
  {
    institution: "California Institute of the Arts (Coursera)",
    details: ["Design Leadership & Creative Direction."],
    year: "2020",
  },
  {
    institution: "Motion Design School (Online)",
    details: ["Motion Design Fundamentals."],
    year: "2020",
  },
];

const EducationSection = () => {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-card text-card-foreground p-12 rounded-[20px] flex flex-col gap-8 w-full"
    >
      <motion.header 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-row items-center gap-4"
      >
        <p className="text-[18px] font-normal" style={{ color: 'rgb(153, 153, 153)' }}>
          (06)
        </p>
        <h2 className="text-[18px] font-bold uppercase tracking-[0.02em] text-foreground">
          EDUCATION
        </h2>
      </motion.header>
      <div className="flex flex-col gap-8">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="flex flex-col md:flex-row justify-between items-start md:gap-8 gap-2"
          >
            <h6 className="font-bold text-base text-foreground" style={{ color: "rgb(20, 20, 20)" }}>
              {item.institution}
            </h6>
            <div className="text-left md:text-right flex flex-col w-full md:w-auto">
              <div>
                {item.details.map((line, i) => (
                  <p key={i} className="text-[15px] text-foreground" style={{ color: "rgb(20, 20, 20)" }}>
                    {line}
                  </p>
                ))}
              </div>
              <p className="text-[15px] mt-1 md:mt-0" style={{ color: 'rgb(102, 102, 102)' }}>{item.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default EducationSection;