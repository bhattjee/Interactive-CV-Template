"use client";

import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <motion.section 
      id="contact" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="container py-10 md:py-12"
    >
      <div className="grid lg:grid-cols-[310px_1fr] gap-x-8 gap-y-6">
        {/* Header Column */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center lg:items-start lg:justify-end gap-4 pt-1"
        >
          <p className="text-lg font-normal text-muted-foreground">(07)</p>
          <h3 className="font-display font-bold text-xl uppercase tracking-[0.02em] text-foreground">
            LET'S TALK
          </h3>
        </motion.div>

        {/* Card Column */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-card text-card-foreground rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.08),_0_1px_4px_rgba(0,0,0,0.04)] p-10 md:p-12"
        >
          <div className="max-w-lg">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg leading-relaxed mb-8"
            >
              If you're looking for someone to lead creative with heart, vision, and uncompromising standards, I'm ready to jump in.
            </motion.p>
            
            <motion.a 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ x: 5 }}
              href="mailto:becky@smith.com" 
              className="block text-lg text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              becky@smith.com
            </motion.a>
            <motion.a 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{ x: 5 }}
              href="tel:+14158298298" 
              className="block text-lg text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              +1 415 829 8298
            </motion.a>
            
            <div className="space-y-4">
              <motion.a 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
                whileHover={{ x: 5 }}
                href="#" 
                className="block text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </motion.a>
              <motion.a 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 }}
                whileHover={{ x: 5 }}
                href="#" 
                className="block text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                Instagram
              </motion.a>
              <motion.a 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 }}
                whileHover={{ x: 5 }}
                href="#" 
                className="block text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                Portfolio
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;