import Image from "next/image";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import VisionMissionSection from "./components/home/VisionMissionSection";
import ProductsSection from "./components/home/ProductsSection";
import WhyChooseSection from "./components/home/WhyChooseSection";
import TestimonialSection from "./components/home/TestimonialSection";
import ContactSection from "./components/home/ContactSection";
import FaqAccordion, { homeFaqs } from "./components/FaqAccordion";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <ProductsSection />
      <WhyChooseSection />
      <TestimonialSection />
      <ContactSection />
      <FaqAccordion faqs={homeFaqs} />
    </>
  );
}
