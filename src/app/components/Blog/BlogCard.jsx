"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

export default function BlogCard({ blog }) {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#F2E8D8]">
      <Link href={`/${blog.slug}`} className="block overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          width={600}
          height={400}
          className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition duration-500"
        />
      </Link>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="bg-[#FFF2E7] text-[#FF6A54] px-4 py-1 rounded-full text-sm font-semibold">
            {blog.category}
          </span>

          <span className="flex items-center gap-2 text-gray-500 text-sm">
            <CalendarDays size={16} />
            {blog.date}
          </span>
        </div>

        <Link href={`/${blog.slug}`}>
          <h3 className="text-2xl font-heading font-bold text-[#08122F] leading-snug group-hover:text-[#FF6A54] transition line-clamp-2">
            {blog.title}
          </h3>
        </Link>

        <p className="text-gray-600 mt-4 leading-7 line-clamp-3">
          {blog.shortDescription}
        </p>

        <Link
          href={`/${blog.slug}`}
          className="inline-flex items-center gap-2 mt-6 font-semibold text-[#FF6A54] hover:gap-3 transition-all"
        >
          Read More
          <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
}