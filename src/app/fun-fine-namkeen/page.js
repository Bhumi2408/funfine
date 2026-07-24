import StaticPageHero from "@/app/components/StaticPageHero";
import { staticPages } from "../pages-data";
import Image from "next/image";
import Link from "next/link";

// const pageData = {
//   title: "FUN FINE NAMKEEN",
//   breadcrumbLabel: "Fun Fine Namkeen",
//   image: "/pages/fun-fine-namkeen.png",

//   seoTitle: "Best Namkeen Brand in India | Namkeen Distributorship Near me",
//   seoDescription:
//     "Choose Fun Fine, the Best Namkeen Brand in India, and find a namkeen distributorship near me with quality snacks, strong market demand, and profitable business growth.",
//   keywords: [
//     "Best Namkeen Brand in India",
//     "Namkeen Distributorship Near Me",
//     "Fun Fine Namkeen",
//   ],
// };

const pageData = staticPages.find(
  (item) => item.slug === "fun-fine-namkeen"
);

export const metadata = {
  title: pageData.seoTitle,
  description: pageData.seoDescription,
  keywords: pageData.keywords,
  alternates: {
    canonical: "/fun-fine-namkeen",
  },
  openGraph: {
    title: pageData.seoTitle,
    description: pageData.seoDescription,
    url: "/fun-fine-namkeen",
    images: [pageData.image],
  },
};

export default function FunFineNamkeen() {
  return (
    <>
      <StaticPageHero
        title={pageData.title}
        breadcrumbLabel={pageData.breadcrumbLabel}
        image="/namkeen.jpg"
      />

      {/* Section 2 — Image Left, Text Right */}
      <section className="bg-[#FDF1E0] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
            <div className="bg-[#FBE8CC] rounded-3xl p-8 flex items-center justify-center">
              <Image
                src="/products/product8.png"
                alt="Fun Fine Khush Mijaz Namkeen Mixture"
                width={500}
                height={500}
                className="w-full max-w-sm h-auto object-contain"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#08122F] mb-6">
                Best Namkeen Brand in India
              </h2>

              <p className="text-gray-600 leading-8 mb-6">
                Indian snack culture features namkeen as an essential snack which every family in India prepares. People from every generation enjoy namkeen which they consume during tea time and special celebrations. The
                <Link href="/contact-us" className="text-[#FF6A54] font-bold italic">
                  Best Namkeen Brand in India
                </Link>
                has become vital for both customers and business partners because packaged snack products experience rising market demand. Fun Fine provides a dependable distribution opportunity which generates profits for businesses seeking a trustworthy brand to distribute their products.
              </p>

              <p className="text-gray-600 leading-8">
                Fun Fine operates as a rapidly expanding namkeen business which delivers exceptional flavor through its clean manufacturing methods and extensive product collection. The company has become a leading choice among customers in the Indian snack industry because it emphasizes fresh products and high-quality standards and total customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Text Left, Image Right */}
      <section className=" py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#08122F] mb-6">
                Growing Demand for Namkeen Distributorship Near Me
              </h2>

              <p className="text-gray-600 leading-8 mb-6">
                The packaged snacks market in India shows rapid expansion because people now prefer ready-to-eat foods which suit their hectic daily routines. This growth creates a great business opportunity for distributors and retailers. Many entrepreneurs now search online for
                <Link href="/" className="text-[#FF6A54] font-bold italic">
                  Namkeen Distributorship Near Me
                </Link>
               to establish partnerships with established brands.
              </p>

              <p className="text-gray-600 leading-8 mb-8">
                Fun Fine provides distributorship opportunities which include complete business support to its partners. The company guarantees partners business growth through its reliable product availability and appealing profit margins and its promotional support.
              </p>

              <h3 className="text-xl md:text-2xl font-heading font-bold text-[#08122F] mb-4">
                Benefits of Choosing Fun Fine Distributorship:
              </h3>

              <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-7">
                <li>High market demand for namkeen products</li>
                <li>Competitive profit margins</li>
                <li>Brand recognition and customer trust</li>
                <li>Timely delivery and logistics support</li>
                <li>Promotional and marketing guidance</li>
              </ul>
            </div>

            <div className="bg-[#FBE8CC] rounded-3xl p-8 flex items-center justify-center lg:sticky lg:top-24">
              <Image
                src="/products/product15.png"
                alt="Fun Fine Corn Flakes Mixture"
                width={500}
                height={500}
                className="w-full max-w-sm h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Image Left, Text Right */}
      <section className="bg-[#FDF1E0] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#FBE8CC] rounded-3xl p-8 flex items-center justify-center">
              <Image
                src="/products/product9.png"
                alt="Fun Fine Shahi Masur Namkeen"
                width={500}
                height={500}
                className="w-full max-w-sm h-auto object-contain"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#08122F] mb-6">
                Quality, Taste, and Trust
              </h2>

              <p className="text-gray-600 leading-8 mb-6">
                Quality is the foundation of Fun Fine&apos;s success. The
                company follows strict hygiene practices and uses advanced
                processing methods. From raw material selection to final
                packaging, every step is monitored carefully. This
                commitment ensures that customers always receive fresh and
                tasty namkeen.
              </p>

              <p className="text-gray-600 leading-8 mb-6">
               As a result, Fun Fine has gained customer loyalty and is becoming a preferred option for those searching for the{" "}
                <span className="font-bold text-[#08122F]">
                  Best Namkeen Brand in India
                </span>
                .
              </p>

              <p className="text-gray-600 leading-8">
                Whether you are a wholesaler, retailer, or new entrepreneur,
                Fun Fine&apos;s distributorship model is designed to be flexible and supportive. This makes it easier for individuals looking for Namkeen Distributorship Near Me to start their business journey with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Text Left, Image Right */}
      <section className=" py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#08122F] mb-6">
                Wide Range of Namkeen Products
              </h2>

              <p className="text-gray-600 leading-8 mb-3">
                Fun Fine offers a diverse range of namkeen to suit different taste preferences across India. Their product line includes:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-5 mb-3">
                <li>Sev and Bhujia</li>
                <li>Mixture Namkeen</li>
                <li>Chana Dal and Moong Dal</li>
                <li>Aloo Bhujia</li>
                <li>Peanuts and spicy snacks</li>
                <li>Special flavored namkeen</li>
              </ul>

              <p className="text-gray-600 leading-8 mb-3">
                Each product is crafted to maintain authentic taste while meeting modern quality standards. This variety helps distributors cater to a wide customer base, increasing sales potential.
              </p>

              <p className="text-gray-600 leading-8">
                If you want to associate with a growing and trusted snack brand, Fun Fine is the right choice. Known as one of the Best Namkeen Brand in India, the company offers high-quality products and profitable distributorship opportunities. With its focus on taste, hygiene, and customer satisfaction, Fun Fine continues to win hearts across the country. Partnering with Fun Fine means entering a business with strong demand, reliable support, and long-term growth potential.
              </p>
            </div>

            <div className="bg-[#FBE8CC] rounded-3xl p-8 flex items-center justify-center lg:sticky lg:top-24">
              <Image
                src="/products/product10.png"
                alt="Fun Fine Jhal Mixture Namkeen"
                width={500}
                height={500}
                className="w-full max-w-sm h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}