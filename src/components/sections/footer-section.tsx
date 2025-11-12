"use client";

import { motion } from "framer-motion";
import { Framer } from 'lucide-react';

const FooterSection = () => {
  return (
    <div className="w-full bg-background mt-24 pb-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container flex justify-between items-center"
      >
        <p className="font-body text-xs text-[#a6a6a6]">
          Design by XPLAI
        </p>
        <a
          href="https://www.framer.com/?utm_source=sites"
          rel="noopener"
          target="_blank"
          className="flex items-center gap-2 font-body text-xs text-[#a6a6a6] hover:text-foreground transition-colors"
        >
          <Framer className="w-4 h-4 text-[#141414]" />
          <span>Made in Framer</span>
        </a>
      </motion.div>
    </div>
  );
};

export default FooterSection;