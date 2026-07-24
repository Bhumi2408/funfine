"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "MOHIT VERMA",
    review:
      "Fun Fine has become my go-to snack brand. Whether it’s their Moong Dal or Chatpati Katori, every product tastes amazing and feels light to eat. Truly premium quality!",
  },
  {
    name: "MAYUR",
    review:
      "I’ve tried many brands, but Fun Fine stands out for its variety and flavor. Each pack delivers the perfect crunch — ideal for tea time or on-the-go snacking.",
  },
  {
    name: "RIYA SHARMA",
    review:
      "I absolutely love Fun Fine snacks! The flavors are so authentic and fresh. My whole family enjoys the namkeens and chips — they’re the perfect mix of taste and crunch!",
  },
  {
    name: "SNEHA GUPTA",
    review:
      "The best thing about Fun Fine snacks is that they’re tasty yet not oily. You can really tell they use high-quality ingredients. Great packaging and freshness too!",
  },
];

export default function TestimonialSection() {
  return (
    <section className=" py-10 md:py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}

        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-heading text-[#C65A02] text-3xl sm:text-4xl lg:text-5xl font-bold">
            Why People Love Our Snacks?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left */}

          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <button className="testimonial-prev hidden lg:flex absolute -left-16 xl:-left-20 top-1/2 -translate-y-1/2 z-20 w-12 h-12 xl:w-14 xl:h-14 rounded-b-[50px] rounded-tr-[50px] bg-[#CC5A00] text-white items-center justify-center">
              <ChevronLeft size={26} />
            </button>

            <Swiper
              modules={[Navigation, Autoplay]}
              loop
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".testimonial-prev",
                nextEl: ".testimonial-next",
              }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-[#CC5A00] rounded-b-[35px] rounded-tl-[35px] md:rounded-b-[60px] md:rounded-tl-[60px] p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg min-h-[280px] flex flex-col justify-center">
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-3">
                      {item.name}
                    </h3>

                    <p className="text-white text-sm sm:text-base md:text-lg leading-7 md:leading-9">
                      "{item.review}"
                    </p>

                    <div className="flex gap-1 mt-5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          size={20}
                          fill="white"
                          className="text-white md:w-6 md:h-6"
                        />
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="testimonial-next hidden lg:flex absolute -right-16 xl:-right-20 top-1/2 -translate-y-1/2 z-20 w-12 h-12 xl:w-14 xl:h-14 rounded-b-[50px] rounded-tl-[50px] bg-[#CC5A00] text-white items-center justify-center">
              <ChevronRight size={26} />
            </button>
          </div>

          {/* Right */}

          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            <Image
              src="/home/chips.png"
              alt="Chips"
              width={600}
              height={600}
              className="w-[260px] sm:w-[340px] md:w-[430px] lg:w-full max-w-[520px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
