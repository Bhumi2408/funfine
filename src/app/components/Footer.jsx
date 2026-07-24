"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ThumbsUp } from "lucide-react";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faPinterest,
  faThreads,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const usefulLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "PRODUCTS", href: "/#products" },
  { name: "CONTACT US", href: "/contact-us" },
];

const productLinks = [
  "CHIPS TANGY TOMATO",
  "DIET CHIWDA",
  "ZOO MAST MASALA",
  "MASALA SEV MURMURA",
  "SALTED PEANUT",
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/FunFineSnacks/",
    icon: faFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/parulfoodproducts/",
    icon: faInstagram,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@funfine_",
    icon: faYoutube,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/company/fun-fine-snacks/",
    icon: faLinkedinIn,
  },
  {
    name: "Pinterest",
    href: "https://in.pinterest.com/parulfoodproducts/",
    icon: faPinterest,
  },
  {
    name: "Thread",
    href: "https://www.threads.com/@parulfoodproducts?hl=en",
    icon: faThreads,
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-10">
      {/* Top SVG */}
      <div className="leading-none bg-[#2D2D5D]">
        <Image
          src="/drs.svg"
          alt=""
          width={1920}
          height={180}
          className="w-full block rotate-180 -translate-y-[1px]"
        />
      </div>

      {/* Footer Body */}
      <div className="bg-[#2D2D5D] text-white">
        <div className="max-w-[1450px] mx-auto px-5 py-14">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-12">
            {/* ================= LEFT ================= */}

            <div>
              <Image
                src="/logo.png"
                alt="Fun Fine"
                width={180}
                height={90}
                className="mb-8"
              />

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={22} className="mt-1 text-white shrink-0" />

                  <p className="leading-8">
                    Plot No. 2114, HSIIDC, Phase 2, Sector 38, Rai, Sonipat,
                    Haryana 131029, India
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={22} />

                  <a href="tel:+918130878411" className="hover:text-[#F28B20]">
                    +91-8130878411
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={22} />

                  <a
                    href="mailto:parulfoodproduct@gmail.com"
                    className="break-all hover:text-[#F28B20]"
                  >
                    parulfoodproduct@gmail.com
                  </a>
                </div>
              </div>

              {/* Social */}

              <div className="flex flex-wrap gap-2 mt-8">
                {socialLinks.map(({ name, href, icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="w-8 h-8 rounded bg-white  flex items-center justify-center transition duration-300 hover:bg-[#F28B20] hover:text-white"
                  >
                    <FontAwesomeIcon icon={icon} size="sm" className="text-[#34336A]"/>
                  </a>
                ))}
              </div>
            </div>

            {/* ================= USEFUL LINKS ================= */}

            <div>
              <h3 className="text-[25px] font-heading font-bold uppercase mb-8">
                Useful Links
              </h3>

              <ul className="space-y-3">
                {usefulLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 text-[17px] hover:text-[#F28B20] transition"
                    >
                      <ThumbsUp size={18} />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= PRODUCTS ================= */}

            <div>
              <h3 className="text-[25px] font-heading font-bold uppercase mb-8">
                Products
              </h3>

              <ul className="space-y-3">
                {productLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href="/products"
                      className="flex items-center gap-3 text-[17px] hover:text-[#F28B20] transition"
                    >
                      <ThumbsUp size={18} />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= LOCATION ================= */}

            <div>
              <div className="inline-flex items-center gap-3 bg-white text-[#34336A] px-5 py-2 mb-7 skew-x-[-12deg]">
                <MapPin size={22} className="shrink-0" />

                <h3 className="font-heading text-[25px] font-bold uppercase skew-x-[12deg]">
                  Location
                </h3>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg border border-white/10">
                <iframe
                  title="Fun Fine Location"
                  src="https://www.google.com/maps?q=Rai%20Industrial%20Area%20Sonipat&output=embed"
                  width="100%"
                  height="300"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[280px] md:h-[250px] border-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col md:flex-row items-center justify-center text-center gap-2">
            <p>Copyright © 2026 Fun Fine All Right Reserved |</p>

            <p>
              Powered by{" "}
              <Link
                href="https://www.cybertricksmedia.com/"
                target="_blank"
                className="text-[#F28B20] hover:underline"
              >
                Bharat Bizmart
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
