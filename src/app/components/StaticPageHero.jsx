import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function StaticPageHero({ title, breadcrumbLabel, image }) {
  return (
    <section
      className="relative h-[400px] overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center w-full">
        <div className="w-full px-5">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white font-heading text-3xl md:text-5xl font-bold leading-tight mt-20">
              {title}
            </h1>

            <div className="flex items-center justify-center gap-2 mt-6 text-white/80 text-sm">
              <Link href="/" className="hover:text-[#FF6A54] transition">
                Home
              </Link>
              <ChevronRight size={16} />
              <span className="text-[#FFD088]">{breadcrumbLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}