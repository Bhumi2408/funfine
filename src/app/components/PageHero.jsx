"use client";

import Link from "next/link";
import { Home } from "lucide-react";

export default function PageHero({
  title,
  currentPage,
  background = "#FDF6E7",
}) {
  return (
    <section
      className="relative overflow-hidden bg-[#FFF7E8]"
    >
      {/* Space for Header */}
      <div className="h-[100px] lg:h-[120px]" />

      <div className="max-w-7xl mx-auto px-5">

        <div className="py-20 md:py-24 lg:py-28 text-center">

          <h1 className="font-heading text-[#08122F] font-bold text-[25px] md:text-[30px] lg:text-[35px] uppercase">
            {title}
          </h1>

          <div className="mt-2 flex justify-center items-center gap-3 text-lg">

            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-[#FF6A54] hover:text-[#D74A34] transition"
            >
              <Home size={18} />
              Home
            </Link>

            <span className="text-gray-400">
              »
            </span>

            <span className="text-[#5D6470] text-sm">
              {currentPage}
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}