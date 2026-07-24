import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";
import TestimonialSection from "../components/home/TestimonialSection";
import VisionMissionSection from "../components/home/VisionMissionSection";
import PageHero from "../components/PageHero";

export const metadata = {
  title: "Parul Food | Fun Fine",

  description:
    "PARUL FOOD is the manufacturer with ultra modern facilities, involved in the processing and packaging of a wide variety of products choosen with great care such as Rice Puffs, Sticks, Namkeen, Chips & many more.",

  keywords: [
    "Parul Food Product",
    "About Fun Fine",
    "Namkeen Company",
  ],

  alternates: {
    canonical: "/about",
  },

};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="ABOUT"
        currentPage="ABOUT"
      />

      <AboutSection/>
      <VisionMissionSection/>
      <TestimonialSection/>
      <ContactSection/>
    </>
  );
}