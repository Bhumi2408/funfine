"use client";

import { Lightbulb, Rocket, Handshake } from "lucide-react";

const cards = [
  {
    title: "OUR VISION",
    icon: Lightbulb,
    bg: "#CF8C01",
    content:
      "To be a leading snack food brand in India, setting benchmarks for taste, quality, and consumer trust.",
  },
  {
    title: "OUR MISSION",
    icon: Rocket,
    bg: "#CA5600",
    content:
      "To provide hygienically processed, high-quality snacks, innovate continuously, maintain international quality standards, and ensure complete customer satisfaction.",
  },
  {
    title: "OUR CORE VALUES",
    icon: Handshake,
    bg: "#CF8C01",
    content:
      "Quality, Integrity, Innovation, Customer Satisfaction, and Consumer Trust.",
  },
];

export default function VisionMissionSection() {
  return (
    <section className=" py-10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                style={{ backgroundColor: card.bg }}
                className="relative rounded-xl px-8 pt-3 pb-2 text-center flex flex-col items-center text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="h-10 w-10 rounded-full bg-[#FFF4E8] flex items-center justify-center shadow-md">
                  <Icon
                    size={22}
                    className="text-[#6C4A14]"
                    strokeWidth={2.2}
                  />
                </div>

                <h3 className="text-[22px] font-heading font-bold uppercase mt-4 mb-2">
                  {card.title}
                </h3>

                <p className="font-body text-[15px] leading-[1.7] font-normal">
                  {card.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}