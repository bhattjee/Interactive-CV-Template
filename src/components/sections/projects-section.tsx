"use client";

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Warby Parker – "See More" Social Media Campaign',
    description: 'Led concept and execution for a nationwide digital campaign highlighting individuality through eyewear.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f61d8ab-7867-4b5f-bdd7-b1467a7679ad-creativecv-framer-website/assets/images/fk3IaYF4oepNUXTvM6UzjYBToyE-6.jpeg',
    link: '#',
  },
  {
    title: 'Live Nation – Ticket Agent Brand Refresh',
    description: 'Redefined the visual and verbal identity of Live Nation\'s ticket sale platform.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f61d8ab-7867-4b5f-bdd7-b1467a7679ad-creativecv-framer-website/assets/images/2JvwkIppVjOJpdBpPtvYQfwAkUI-7.jpeg',
    link: '#',
  },
  {
    title: 'Disney\'s Blizzard Beach – Seasonal Photo Campaign',
    description: 'Directed a lifestyle photoshoot capturing the spirit of adventure at Blizzard Beach Water Park.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f61d8ab-7867-4b5f-bdd7-b1467a7679ad-creativecv-framer-website/assets/images/KmGsodB86Ai0RNfPgEpZQRcMeAQ-8.jpeg',
    link: '#',
  },
  {
    title: 'Gold Flower – Jewelry Brand Launch',
    description: 'Crafted the brand identity for a boutique fine jewelry label. From logo to lookbook, established an elegant, feminine aesthetic that celebrates craftsmanship and emotion.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f61d8ab-7867-4b5f-bdd7-b1467a7679ad-creativecv-framer-website/assets/images/j7mzmsSvH96NuzpzIoHWwFsk-9.jpeg',
    link: '#',
  },
];

const ProjectsSection = () => {
  return (
    <motion.section 
      id="projects" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-card rounded-[20px] p-10 md:p-12 shadow-sm"
    >
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center gap-6 pb-12"
      >
        <p className="text-lg text-muted-foreground">(04)</p>
        <h3 className="text-lg font-bold uppercase tracking-[0.02em]">
          PROJECTS
        </h3>
      </motion.div>
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ y: -4 }}
            className="group block border-t border-border pt-6 first:border-t-0 first:pt-0"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full sm:w-[120px] h-[120px] flex-shrink-0"
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={120}
                  height={120}
                  className="rounded-xl object-cover w-full h-full"
                />
              </motion.div>
              <div className="flex flex-col justify-center gap-2">
                <h6 className="font-bold text-base uppercase leading-tight">
                  {project.title}
                </h6>
                <p className="text-[15px] leading-6 text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex items-center gap-1 text-[15px] font-medium text-foreground mt-2">
                  <span>View case</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;