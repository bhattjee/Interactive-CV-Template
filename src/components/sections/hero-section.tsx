"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { name: "Slack", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f61d8ab-7867-4b5f-bdd7-b1467a7679ad-creativecv-framer-website/assets/svgs/XqzHYaAhY7MekImZl7Re5BrHeA-3.svg" },
  { name: "Spotify", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f61d8ab-7867-4b5f-bdd7-b1467a7679ad-creativecv-framer-website/assets/svgs/S6LEkaJTHmVXWNtnWw5Q7BAuvJs-2.svg" },
  { name: "Dropbox", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f61d8ab-7867-4b5f-bdd7-b1467a7679ad-creativecv-framer-website/assets/svgs/HcqravXZIw8s1urkhKLJHzG1W7c-4.svg" },
  { name: "Coinbase", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f61d8ab-7867-4b5f-bdd7-b1467a7679ad-creativecv-framer-website/assets/svgs/YZkZ3fMWvXzAnm4IbtHZUT6vQo-1.svg" },
];

const LogoMarquee = () => {
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full bg-white py-[40px] overflow-hidden">
      <div className="flex animate-marquee motion-reduce:animate-none whitespace-nowrap">
        {repeatedLogos.map((logo, index) => (
          <div key={`${logo.name}-${index}`} className="flex-shrink-0 w-[225px] px-8 flex items-center justify-center">
            <Image
              src={logo.src}
              alt={`${logo.name} logo`}
              width={110}
              height={32}
              className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="bg-[#ebebeb]">
      {/* Fixed Background for Large Screens */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10 hidden lg:flex">
        <div className="w-1/2 h-full bg-[#ebebeb] relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-[256px] left-[80px]"
          >
            <h1 className="font-black text-[90.24px] leading-[0.9] -tracking-[0.02em] uppercase text-[#141414]">
              Rebecca<br />Smith
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="absolute bottom-[80px] left-[80px]"
          >
            <h1 className="font-black text-[90.24px] leading-[0.9] -tracking-[0.02em] uppercase text-[#141414]">
              Creative<br />Director
            </h1>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-1/2 h-full relative"
        >
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f61d8ab-7867-4b5f-bdd7-b1467a7679ad-creativecv-framer-website/assets/images/HAU0mMgxdfLvy281z646lvwsY-1.jpg"
            alt="Portrait of a woman smiling, against a city skyline at dusk"
            layout="fill"
            objectFit="cover"
            priority
            className="object-center"
          />
        </motion.div>
      </div>
      
      {/* Background for small screens */}
      <div className="lg:hidden relative w-full h-[60vh]">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f61d8ab-7867-4b5f-bdd7-b1467a7679ad-creativecv-framer-website/assets/images/HAU0mMgxdfLvy281z646lvwsY-1.jpg"
          alt="Portrait of a woman smiling, against a city skyline at dusk"
          layout="fill"
          objectFit="cover"
          priority
          className="object-center"
        />
      </div>
      
      {/* Spacer to push content down, creating the effect of the fixed background on large screens */}
      <div className="h-[65vh] hidden lg:block"></div>

      {/* Content wrapper */}
      <div className="relative z-10 lg:-mt-12">
        <div className="max-w-[900px] mx-auto px-4">
          <section id="profile">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-[20px] shadow-[0_4px_16px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.06)] p-8 sm:p-10 w-full mt-[-6rem] lg:mt-0"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex-shrink-0"
                >
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f61d8ab-7867-4b5f-bdd7-b1467a7679ad-creativecv-framer-website/assets/images/ywG9ylByTBvHJJNQ1TJKknHQg-5.jpg"
                    alt="Rebecca Smith profile photo"
                    width={70}
                    height={70}
                    className="rounded-full border border-border"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex-1 w-full"
                >
                  <div className="flex justify-between items-start flex-wrap">
                    <h5 className="font-bold text-[18px] leading-[1.3] text-foreground uppercase">
                      Rebecca Smith<br />
                      Creative Director
                    </h5>
                    <span className="text-[13px] text-muted-foreground whitespace-nowrap ml-4 mt-1">
                      NY 02:25 AM
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-x-8 gap-y-2 mt-4 text-[15px] text-muted-foreground">
                    <a href="mailto:becky@smith.com" className="hover:text-foreground transition-colors duration-300">
                      becky@smith.com
                    </a>
                    <a href="tel:+14158298298" className="hover:text-foreground transition-colors duration-300">
                      +1 415 829 8298
                    </a>
                  </div>
                </motion.div>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 text-[18px] leading-[1.7] text-foreground"
              >
                I create visual identities and direct engaging video content for brands, startups, and creative teams worldwide. From concept to launch, I lead projects that merge storytelling, design, and motion to shape memorable brands and emotionally resonant experiences.
              </motion.p>
            </motion.div>
          </section>
        </div>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-[80px]"
        >
          <LogoMarquee />
        </motion.section>
      </div>
    </div>
  );
};

export default HeroSection;