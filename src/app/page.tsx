import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import WorkExperienceSection from "@/components/sections/work-experience-section";
import SkillsSection from "@/components/sections/skills-section";
import ProjectsSection from "@/components/sections/projects-section";
import SoftwareSection from "@/components/sections/software-section";
import EducationSection from "@/components/sections/education-section";
import ContactSection from "@/components/sections/contact-section";
import FooterSection from "@/components/sections/footer-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ebebeb]">
      <HeroSection />
      
      <main className="max-w-[900px] mx-auto px-4 pb-16">
        <div className="flex flex-col gap-20 mt-20">
          <AboutSection />
          <WorkExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <SoftwareSection />
          <EducationSection />
          <ContactSection />
        </div>
      </main>

      <FooterSection />
    </div>
  );
}