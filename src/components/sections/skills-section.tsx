"use client";

import { motion } from "framer-motion";

const SkillsSection = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-lg bg-card p-10 text-card-foreground shadow-[0_2px_12px_rgba(0,0,0,0.08),_0_1px_4px_rgba(0,0,0,0.04)] md:p-12"
    >
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-baseline gap-4"
      >
        <p className="font-normal text-muted-foreground text-base">(03)</p>
        <h3 className="text-xl font-bold uppercase tracking-[0.02em]">SKILLS</h3>
      </motion.div>
      <div className="mt-8 flex flex-col gap-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg font-normal leading-[1.6]"
        >
          Creative Strategy, Team Leadership &amp; Mentoring, Cross-functional Collaboration, Client Presentations,
          Pitching &amp; Proposal Writing.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg font-normal leading-[1.6]"
        >
          Brand Identity, Art Direction, Visual Storytelling, Typography, Color Theory, UI Design, UX Design, Motion
          Design, Concept Development, Design Systems.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default SkillsSection;