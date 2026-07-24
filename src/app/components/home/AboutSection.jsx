"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className=" py-10 lg:py-14 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-[#C86A00] text-2xl lg:text-3xl font-heading font-bold uppercase">
              About Us
            </h2>

            <div className="mt-8 space-y-5 text-[#5C5C5C] leading-7">
              <p>
                <strong>Parul Food Product</strong> is a leading{" "}
                <strong>Snack Food Company in India</strong>, established in{" "}
                <strong>2005</strong>, dedicated to delivering high-quality,
                delicious snacks to consumers nationwide. Headquartered in{" "}
                <strong>Sonipat, Haryana</strong>, we combine experience,
                innovation, and excellence to manufacture products that meet the
                highest standards of taste, hygiene, and quality.
              </p>

              <p>
                Under our renowned brand, <strong>Fun Fine</strong>, we offer a
                wide range of snacks including <strong>Chips</strong>,
                <strong> Namkeen</strong>, <strong>Spicy Snacks</strong>,
                <strong> Puffs</strong>, <strong>Rice Puffs</strong>,
                <strong> Sticks</strong>, and more. Every product is crafted
                using premium quality ingredients under strict hygienic
                conditions.
              </p>

              <p>
                Our{" "}
                <strong>
                  state-of-the-art manufacturing and packaging facilities
                </strong>{" "}
                follow international food safety standards. Advanced machinery,
                computerized production, and quality control ensure freshness,
                crunch, and delicious taste in every pack.
              </p>

              <p>
                As a trusted <strong>Snack Food Company</strong>, Parul Food
                Product continues to innovate with quality and customer
                satisfaction, making <strong>Fun Fine</strong> one of the{" "}
                <strong>Best Chips Brands in India</strong> and{" "}
                <strong>Best Namkeen Brands in India</strong>.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            {/* Background Shape */}
            <div />

            <Image
              src="/home/about.png"
              alt="About Fun Fine"
              width={650}
              height={700}
              priority
              className="w-full max-w-[620px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
