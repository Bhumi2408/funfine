import Image from "next/image";
import Link from "next/link";
import StaticPageHero from "@/app/components/StaticPageHero";
import FaqSchema from "@/app/components/FaqSchema";
import { staticPages } from "../pages-data";

const pageData = staticPages.find(
  (item) => item.slug === "best-puff-manufacturer",
);

export const metadata = {
  title: pageData.seoTitle,
  description: pageData.seoDescription,
  keywords: pageData.keywords,
  alternates: {
    canonical: `/${pageData.slug}`,
  },
  openGraph: {
    title: pageData.seoTitle,
    description: pageData.seoDescription,
    url: `/${pageData.slug}`,
    images: [pageData.image],
  },
};

const flavours = [
  {
    name: "Mast Masala Puff",
    image: "/products/mast-masala.png",
    description:
      "A perfect blend of traditional Indian spices that delivers a bold and spicy taste. This flavour remains one of the most popular choices among snack lovers.",
  },
  {
    name: "Tangy Tomato Puff",
    image: "/products/tangy.png",
    description:
      "A delicious combination of sweet and tangy tomato seasoning that creates a mouth-watering snacking experience.",
  },
  {
    name: "Pudina Masala Puff",
    image: "/products/pudina.png",
    description:
      "Refreshing mint combined with flavourful Indian spices makes this puff ideal for customers looking for a cool and spicy taste.",
  },
  {
    name: "Khatta Meetha Puff",
    image: "/products/khatta.png",
    description:
      "A balanced combination of sweet and tangy flavours that offers a unique taste suitable for all age groups.",
  },
  {
    name: "Mocktail & Cocktail Puff",
    image: "/products/mocktail.png",
    description:
      "One of our signature flavours that delivers a unique seasoning profile and premium snacking experience.",
  },
  {
    name: "Twiny Chatpata Masala Puff",
    image: "/products/chatpata.png",
    description:
      "Twiny Chatpata Masala Puff is made from premium-quality corn and coated with a delicious chatpata masala seasoning. Its crunchy texture and spicy flavour make it a favourite choice for snack lovers looking for a tasty and satisfying bite.",
  },
];

const strengths = [
  "Premium quality ingredients",
  "Advanced manufacturing process",
  "Consistent taste and freshness",
  "Attractive packaging options",
  "Multiple exciting flavours",
  "Hygienic production environment",
  "Competitive wholesale pricing",
  "Bulk manufacturing capability",
  "Reliable product supply",
  "Customer-focused service",
];

const retailChannels = [
  "Kirana Stores",
  "Supermarkets",
  "Departmental Stores",
  "Snack Distributors",
  "FMCG Dealers",
  "Wholesalers",
  "School & College Canteens",
  "Modern Trade Stores",
  "Online Grocery Sellers",
];

const faqs = [
  {
    question: "Who is the Best Puff Manufacturer in India?",
    answer:
      "Fun Fine is one of the best puff manufacturers in India, offering premium-quality corn puffs in multiple flavours, hygienic manufacturing, attractive packaging, and bulk supply for distributors, wholesalers, and retailers across the country.",
  },
  {
    question: "Which company manufactures premium puff snacks in India?",
    answer:
      "Fun Fine manufactures premium puff snacks in India with consistent quality, crispy texture, and popular flavours including Mast Masala, Tangy Tomato, Pudina Masala, Khatta Meetha, and Mocktail & Cocktail.",
  },
  {
    question: "Who is the Best Puff Manufacturer in Delhi NCR?",
    answer:
      "Fun Fine is a trusted puff manufacturer in Delhi NCR, supplying premium-quality puff snacks to wholesalers, distributors, supermarkets, and FMCG businesses with reliable delivery and competitive pricing.",
  },
  {
    question: "Who is the Best Puff Manufacturer in Sonipat?",
    answer:
      "Fun Fine is recognized as one of the best puff manufacturers in Sonipat, providing fresh, high-quality puff snacks for distributors, retailers, and wholesale buyers across India.",
  },
  {
    question: "What flavours are available in Fun Fine Puff?",
    answer:
      "Fun Fine Puff is available in Mast Masala, Tangy Tomato, Pudina Masala, Khatta Meetha, and Mocktail & Cocktail flavours, offering delicious options for every taste preference.",
  },
  {
    question: "Does Fun Fine supply puff snacks in bulk?",
    answer:
      "Yes. Fun Fine manufactures and supplies puff snacks in bulk for wholesalers, distributors, supermarkets, retail chains, and private-label businesses across India.",
  },
  {
    question: "Are Fun Fine Puff snacks suitable for retail stores?",
    answer:
      "Yes. Fun Fine Puff snacks are ideal for kirana stores, supermarkets, departmental stores, grocery chains, and FMCG retailers because of their attractive packaging, consistent quality, and popular flavours.",
  },
  {
    question: "Why choose Fun Fine as a puff manufacturer?",
    answer:
      "Fun Fine offers hygienic manufacturing, premium ingredients, modern production facilities, multiple flavour options, consistent product quality, and dependable bulk supply, making it a trusted puff manufacturing partner in India.",
  },
  {
    question: "Does Fun Fine offer private label puff manufacturing?",
    answer:
      "Yes. Fun Fine can support private label and bulk puff manufacturing for distributors, wholesalers, retailers, and businesses looking to launch their own snack brand.",
  },
  {
    question: "How can I order puff snacks from Fun Fine?",
    answer:
      "You can contact Fun Fine directly to discuss wholesale requirements, bulk orders, distributor partnerships, private label manufacturing, and product availability across India.",
  },
];

export default function BestPuffManufacturer() {
  return (
    <>
      <FaqSchema faqs={faqs} />

      <StaticPageHero
        title={pageData.title}
        breadcrumbLabel={pageData.breadcrumbLabel}
        image={pageData.image}
      />

      {/* Banner Image */}
      <section className="bg-[#FEF9F0] py-10 lg:py-14">
        <div className="max-w-6xl mx-auto px-5">
          <div className="rounded-3xl overflow-hidden shadow-md">
            <Image
              src="/products/puffbanner.jpeg"
              alt="Fun Fine Premium Puffs Made for Everyone"
              width={1600}
              height={840}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-[#FDF1E0] py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-[#08122F]">
            Best Puff Manufacturer in India – Fun Fine
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            A crunchy snack becomes memorable when it delivers the perfect
            balance of taste, freshness, and quality. At{" "}
            <Link href="/" className="text-[#FF6A54] font-bold italic">
              Fun Fine{" "}
            </Link>{" "}
            we believe every puff should bring a smile with every bite. As the{" "}
            <Link href="/contact-us" className="text-[#FF6A54] font-bold">
              Best Puff Manufacturer in India
            </Link>
            , we manufacture delicious corn puffs in exciting flavors that
            appeal to children, teenagers, and adults alike.{" "}
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            Our puffs are made using carefully selected ingredients and advanced
            manufacturing processes to ensure consistent quality in every pack.
            Whether you are looking for a trusted distributor, wholesaler,
            supermarket supplier, or want to build your own snack brand, Fun
            Fine offers premium puff products that match today's market demand.
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            From classic Indian masala flavors to refreshing mint and tangy
            tomato varieties, our growing range of puff snacks is loved for its
            crispy texture, rich seasoning, and fresh taste
          </p>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#08122F] mb-6">
            Crispy Puffs Made with Quality Ingredients
          </h2>

          <p className="text-gray-600 leading-8">
            Every Fun Fine Puff is prepared with quality corn grits, premium
            seasonings, and hygienic manufacturing standards. We focus on
            delivering products that not only taste great but also maintain the
            same crunch and freshness from production to the consumer's hands.
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            As the{" "}
            <Link
              href="/top-chips-manufacturer-in-india"
              className="text-[#FF6A54]"
            >
              Best Puff Manufacturer in India
            </Link>
            , our manufacturing process follows strict quality control measures
            to maintain food safety, consistency, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Flavours Grid */}
      <section className="bg-[#FDF1E0] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-14">
            <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-[#08122F]">
              Explore Our Delicious Puff Flavours
            </h2>
            <p className="mt-3 ">
              At Fun Fine, we understand that every customer has a different
              taste preference. That's why we manufacture multiple exciting
              flavors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {flavours.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#F2E8D8]"
              >
                <div className="bg-[#FBE8CC] p-6 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="w-full max-w-[200px] h-auto object-contain"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-[#08122F] mb-3">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 leading-7 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Fun Fine */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#08122F] mb-6 text-center">
            Why Choose Fun Fine?
          </h2>

          <p className="text-gray-600 leading-8 mb-8 text-center max-w-3xl mx-auto">
            Choosing the right snack manufacturer is important for distributors
            and retailers. Fun Fine has earned customer trust by consistently
            delivering quality products that perform well in the market.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {strengths.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-[#FFF2E7] rounded-xl px-5 py-3"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF6A54] flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-600 leading-8 mt-8 text-center max-w-3xl mx-auto">
            These qualities make Fun Fine one of the preferred names for puff
            manufacturing across India.
          </p>
        </div>
      </section>

      {/* Delhi NCR & Sonipat */}
      <section className="bg-[#FDF1E0] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl p-8">
              <h3 className="text-2xl font-heading font-bold text-[#08122F] mb-4">
                Best Puff Manufacturer in Delhi NCR
              </h3>
              <p className="text-gray-600 leading-7">
                Businesses looking for a reliable{" "}
                <strong className="text-[#FF6A54]">
                  Best Puff Manufacturer in Delhi NCR
                </strong>{" "}
                can trust Fun Fine for consistent product quality and timely
                supply.
              </p>
              <p className="text-gray-600 leading-7">
                We work with distributors, wholesalers, supermarkets, grocery
                chains, retailers, and food businesses across Delhi NCR. Our
                manufacturing capacity allows us to fulfil both small and bulk
                orders without compromising on quality.
              </p>
              <p className="text-gray-600 leading-7">
                Whether you're introducing a new snack range or expanding your
                existing product portfolio, Fun Fine provides dependable
                manufacturing support with premium puff products.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8">
              <h3 className="text-2xl font-heading font-bold text-[#08122F] mb-4">
                Best Puff Manufacturer in Sonipat
              </h3>
              <p className="text-gray-600 leading-7">
                Being recognized as the{" "}
                <strong className="text-[#FF6A54]">
                  Best Puff Manufacturer in Sonipat
                </strong>
                , Fun Fine proudly serves local distributors, retailers,
                wholesalers, and snack businesses with fresh and high-quality
                puff products.
              </p>
              <p className="text-gray-600 leading-7">
                Our strategic location enables efficient production and faster
                distribution to nearby cities and states. We focus on building
                long-term partnerships by offering consistent quality,
                competitive pricing, and dependable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retail Channels */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#08122F] mb-8">
            Perfect for Retail &amp; Distribution
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {retailChannels.map((item) => (
              <span
                key={item}
                className="bg-[#FFF2E7] text-[#FF6A54] font-semibold px-5 py-2 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="text-gray-600 leading-8 mt-8 max-w-3xl mx-auto">
            We understand the needs of today's retail market and manufacture
            products that attract customers through their taste, quality, and
            attractive packaging.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#08122F] mb-8">
            Quality That Customers Trust
          </h2>

          <p className="text-gray-600 leading-8 mt-8 max-w-3xl mx-auto">
            At Fun Fine, quality is never an afterthought. Every batch undergoes
            careful inspection before packaging. From selecting raw materials to
            seasoning, packaging, and dispatch, every step is monitored to
            maintain high manufacturing standards. <br />
            Our commitment to freshness, hygiene, and taste has helped us become
            a trusted partner for businesses looking for reliable puff
            manufacturing solutions.
          </p>
        </div>
      </section>

      {/* Quality & CTA */}
      <section className="bg-[#08122F] py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Partner with Fun Fine
          </h2>

          <p className="text-white/80 leading-8">
            If you're searching for the{" "}
            <strong className="text-[#FF6A54]">
              Best Puff Manufacturer in India
            </strong>
            , Fun Fine offers the perfect combination of quality, taste,
            affordability, and reliable supply. Whether you need premium puff
            snacks for retail shelves, wholesale distribution, or business
            expansion, our experienced team is ready to deliver products that
            customers enjoy and trust.
          </p>

          <p className="text-white/80 leading-8">
            With delicious flavours, modern manufacturing practices, and a
            customer-first approach, Fun Fine continues to build its reputation
            as a leading puff manufacturer serving businesses across India.
          </p>

          <Link
            href="/contact-us"
            className="inline-block mt-8 bg-[#FF6A54] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#ff8066] transition"
          >
            Get in Touch with Us Today
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#08122F] mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <h3 className="text-lg font-heading font-bold text-[#08122F] mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
