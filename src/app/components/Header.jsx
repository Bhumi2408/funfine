"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "PRODUCTS", href: "/#products" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT US", href: "/contact-us" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="absolute top-0 left-0 w-full z-50 h-auto md:h-[120px]"
      style={{
        backgroundImage: "url('/home/wave.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="w-full max-w-[1500px] mx-auto flex items-center justify-between h-full px-5 py-4 md:py-0">
        {/* Logo */}
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Image
            src="/logo.png"
            alt=""
            width={100}
            height={80}
            className="w-[90px] md:w-[130px] h-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`group relative pb-2 text-[16px] font-medium tracking-wide transition-all duration-300 ${
                      isActive
                        ? "text-[#ff4b55]"
                        : "text-[#444444] hover:text-[#ff4b55]"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 -bottom-[6px] h-[2px] bg-[#ff4b55] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <a
            href="tel:+918130878411"
            className="bg-[#F47A00] hover:bg-[#ea7200] text-white px-7 h-[46px] rounded-full flex items-center justify-center text-sm font-semibold transition-all"
          >
            Call us: +91 81308 78411
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-[#444444] z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full px-5 py-6">
          <ul className="flex flex-col gap-5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-[16px] font-medium tracking-wide ${
                      isActive ? "text-[#ff4b55]" : "text-[#444444]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            href="tel:+918130878411"
            className="mt-5 bg-[#F47A00] hover:bg-[#ea7200] text-white px-7 h-[46px] rounded-full flex items-center justify-center text-sm font-semibold w-full"
          >
            Call us: +91 81308 78411
          </a>
        </div>
      )}
    </header>
  );
}