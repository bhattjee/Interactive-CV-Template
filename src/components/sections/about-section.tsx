"use client";

import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-card text-card-foreground p-12 rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.08),_0_1px_4px_rgba(0,0,0,0.04)] flex flex-col gap-8"
    >
      <motion.header 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center gap-6"
      >
        <p className="text-muted-foreground text-lg font-normal leading-[1.5]">
          (01)
        </p>
        <h3 className="text-lg text-foreground">
          ABOUT
        </h3>
      </motion.header>

      <div className="flex flex-col gap-8">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-foreground text-lg font-normal leading-[1.6]"
        >
          I'm a Creative Director with over a decade of experience in branding, design, and storytelling. My work sits at the intersection of visual identity, motion, and narrative, creating brands that not only look sharp but feel deeply human.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-foreground text-lg font-normal leading-[1.6]"
        >
          Currently, I lead creative at COLLINS, where I've grown through the ranks over six years, from Designer to Senior Designer, then to Design Director, and now Creative Director. Across this journey, I've helped shape bold identities and immersive brand experiences for global names and future-shaping startups. I guide teams from strategy to launch, ensuring that every detail, from typography to tone of voice, aligns with a brand's deeper purpose.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AboutSection;