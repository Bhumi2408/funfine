"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import FaqSchema from "./FaqSchema";

export const homeFaqs = [
  {
    question: "Which is the best namkeen brand in India?",
    answer:
      "Fun Fine is one of the best namkeen brands in India, known for hygienic manufacturing, authentic Indian flavours, and consistent product quality.",
  },
  {
    question: "Which is the best chips brand in India?",
    answer:
      "Fun Fine is among the top chips brands in India, offering crispy, flavourful chips made under strict quality standards.",
  },
  {
    question: "Where can I buy Fun Fine namkeen?",
    answer:
      "Fun Fine namkeen is available across India through retailers, wholesalers, and distributors, with a strong presence in Delhi-NCR and Sonipat.",
  },
  {
    question: "Which company owns Fun Fine?",
    answer:
      "Fun Fine is a brand owned by Parul Food Product, a snack food company that has been operating since 2005.",
  },
  {
    question: "How is Fun Fine namkeen manufactured?",
    answer:
      "Fun Fine snacks are manufactured in a modern facility in Sonipat, Haryana, using premium ingredients and strict hygiene standards.",
  },
  {
    question: "How can I become a namkeen wholesaler or distributor?",
    answer:
      "To become a Fun Fine namkeen distributor, you can call +91-8130878411 or email parulfoodproduct@gmail.com.",
  },
  {
    question: "Who is a trusted namkeen manufacturer near me in Sonipat?",
    answer:
      "Fun Fine (Parul Food Product) is a trusted namkeen manufacturer based in Sonipat, Haryana, with its facility located in HSIIDC, Sector 38, RAI.",
  },
  {
    question: "What products does Fun Fine offer?",
    answer:
      "Fun Fine offers 50+ products, including Bhujia, Sev, Jhal Mixture, Chatpati Dal, Dalmoth, Moong Dal Namkeen, Crunchy Sticks, and Chiwda.",
  },
  {
    question: "Are Fun Fine snacks fresh and hygienically made?",
    answer:
      "Yes, all Fun Fine snacks are made in a modern, hygienic facility that follows international food safety standards.",
  },
  {
    question: "What is Fun Fine's contact number and address?",
    answer:
      "Fun Fine's contact number is +91-8130878411, and its factory address is Plot No. 2114, HSIIDC, Phase 2, Sector 38, RAI, Sonipat, Haryana, 131029.",
  },
];

export default function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className=" py-10">
      <FaqSchema faqs={faqs} />

      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="text-[#FF6A54] font-semibold uppercase tracking-[3px] text-sm">
            Got Questions?
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-[#08122F]">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto leading-7">
            Everything you need to know about Fun Fine's products, quality,
            and distributorship.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#FF6A54] bg-white shadow-md"
                    : "border-gray-200 bg-white hover:border-[#FF6A54]/40"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-lg font-heading font-bold text-[#08122F]">
                    {faq.question}
                  </span>

                  <span
                    className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-[#FF6A54] text-white rotate-45"
                        : "bg-[#FFF2E7] text-[#FF6A54]"
                    }`}
                  >
                    <Plus size={18} />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-gray-600 leading-7">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}