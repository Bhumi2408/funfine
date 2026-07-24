"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, User, ChevronRight } from "lucide-react";

export default function BlogDetailsHero({ blog }) {
  return (
    <section className="relative h-[380px] md:h-[460px] lg:h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={blog.image}
        alt={blog.title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-5">

          <div className="max-w-4xl">

            <div className="flex flex-wrap items-center gap-5 text-white/90 text-sm md:text-base mb-5 mt-20">

              <span className="flex items-center gap-2">
                <CalendarDays size={18} />
                {blog.date}
              </span>

              <span className="flex items-center gap-2">
                <User size={18} />
                {blog.author}
              </span>

              <span className="bg-[#FF6A54] px-4 py-1 rounded-full text-white">
                {blog.category}
              </span>

            </div>

            <h1 className="text-white font-heading text-xl md:text-3xl lg:text-5xl font-bold leading-tight">
              {blog.title}
            </h1>

            <div className="flex items-center gap-2 mt-8 text-white">

              <Link
                href="/"
                className="hover:text-[#FF6A54] transition"
              >
                Home
              </Link>

              <ChevronRight size={18} />

              <Link
                href="/blog"
                className="hover:text-[#FF6A54] transition"
              >
                Blog
              </Link>

              <ChevronRight size={18} />

              <span className="text-[#FFD088]">
                {blog.title}
              </span>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}