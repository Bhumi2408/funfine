import ContactSection from "../components/home/ContactSection";
import PageHero from "../components/PageHero";

export const metadata = {
  title: "CONTACT US - Fun Fine",

  description:
    "Contact Fun Fine for dealership, distributorship and product enquiries.",

  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="CONTACT US"
        currentPage="Contact Us"
      />
      <ContactSection />

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-5">
          <div className="overflow-hidden rounded-3xl shadow-lg border border-[#E7D8BE]">
            <iframe
              title="Fun Fine Location"
              src="https://www.google.com/maps?q=Plot+No.+2114,+HSIIDC,+Phase+2,+Sector+38,+Rai,+Sonipat,+Haryana+131029,+India&output=embed"
              width="100%"
              height="550"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}