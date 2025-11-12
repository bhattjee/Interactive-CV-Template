"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface SoftwareItemProps {
  iconSrc?: string;
  iconAlt: string;
  name: string;
  description: string;
}

const softwareTools: SoftwareItemProps[] = [
  {
    iconAlt: "Framer logo",
    name: "Framer",
    description: "A powerful design and prototyping tool used to create interactive, high-fidelity user interfaces.",
  },
  {
    iconAlt: "Figma logo",
    name: "Figma",
    description: "A collaborative interface design tool used for creating UI/UX designs, wireframes, and prototypes.",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f61d8ab-7867-4b5f-bdd7-b1467a7679ad-creativecv-framer-website/assets/icons/At00H7gKc3zrCtbYsldzQ6iGst0-1.png",
    iconAlt: "Zapier logo",
    name: "Zapier",
    description: "An automation platform that connects apps and services to streamline workflows.",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f61d8ab-7867-4b5f-bdd7-b1467a7679ad-creativecv-framer-website/assets/icons/RiqgoXYAmyfLLKqIRRYgUN34ew-2.png",
    iconAlt: "Miro logo",
    name: "Miro",
    description: "A collaborative online whiteboard platform designed for brainstorming, planning, and team workshops.",
  },
];

const SoftwareItem = ({ iconSrc, iconAlt, name, description }: SoftwareItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-start gap-x-4"
    >
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
        className="w-12 h-12 flex-shrink-0 rounded-lg border border-border flex items-center justify-center p-2"
      >
        {iconSrc && (
          <Image src={iconSrc} alt={iconAlt} width={32} height={32} className="object-contain" />
        )}
      </motion.div>
      <div className="flex-1">
        <h6 className="font-bold text-[18px] tracking-[0.02em] leading-[1.4] text-foreground">
          {name}
        </h6>
        <p className="text-muted-foreground text-[15px] leading-[1.6] mt-1">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default function SoftwareSection() {
  return (
    <motion.section 
      id="software" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-card p-10 rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.08),_0_1px_4px_rgba(0,0,0,0.04)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-x-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 md:mb-0"
        >
          <p className="text-base text-muted-foreground">(05)</p>
        </motion.div>
        <div className="md:col-span-3">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl font-bold uppercase tracking-[0.02em] text-foreground"
          >
            SOFTWARE
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-lg leading-[1.7] max-w-[550px] text-foreground"
          >
            A curated toolkit of design, development, and productivity tools that power my creative process and streamline how I work:
          </motion.p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {softwareTools.map((tool) => (
              <SoftwareItem key={tool.name} {...tool} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}