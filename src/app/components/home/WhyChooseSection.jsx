"use client";

import Image from "next/image";
import { Award, Smile, Factory, Heart } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality Ingredients",
    desc: "Every Fun Fine Snack is Made with Premium-Grade Ingredients, Ensuring Superior Taste, Texture, and Lasting Freshness.",
    bg: "#F7A6A6",
  },
  {
    icon: Smile,
    title: "Crispy, Tasty & Healthy",
    desc: "Our Snacks are Thoughtfully Crafted to Preserve Crunch and Flavor While Keeping Nutrition in Balance - the Perfect Choice for Guilt-Free Snacking.",
    bg: "#EDB588",
  },
  {
    icon: Factory,
    title: "Modern Manufacturing, Trusted Quality",
    desc: "Our Modern Sonipat Facility Produces Every Snack with Strict Hygiene and International Food Safety Standards, So You Can Enjoy Every Bite with Confidence.",
    bg: "#F7A6A6",
  },
  {
    icon: Heart,
    title: "Authentic Indian Flavours",
    desc: "We Bring the True Essence of Indian Snacks - from Spicy Namkeens to Crunchy Chips - Crafted to Satisfy Every Craving.",
    bg: "#EDB588",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-[#FFE2CE] py-14 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-[#C65A02] text-3xl font-bold">
            Why Choose Fun Fine?
          </h2>

          <h3 className="font-heading text-[#2D3440] text-2xl font-bold mt-4">
            Premium Ingredients for the Best Chips and Namkeen Brand in India
          </h3>
        </div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Image */}
          <div className="lg:col-span-7 flex justify-center">
            <Image
              src="/home/whychoose.png"
              alt="Why Choose Fun Fine"
              width={900}
              height={800}
              priority
              className="w-full max-w-[860px] h-auto object-cover"
            />
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-5 space-y-3">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  style={{ backgroundColor: item.bg }}
                  className="rounded-lg p-3 flex items-center gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-[#FF6C55] flex items-center justify-center shrink-0">
                    <Icon className="text-white" size={24} />
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className=" text-[20px] font-semibold text-[#1F2937] leading-tight mb-1">
                      {item.title}
                    </h4>

                    <p className=" text-[#444]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}