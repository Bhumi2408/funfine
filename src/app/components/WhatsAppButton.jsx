"use client";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "918130878411";

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] flex items-center group"
    >
      {/* Contact Bubble */}
      <div className="mr-3 bg-white text-[#2B2B2B] px-6 py-3 rounded-2xl shadow-xl border border-gray-100 opacity-0 translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
        Contact us
      </div>

      {/* WhatsApp Circle */}
      <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
        <FontAwesomeIcon
        icon={faWhatsapp}
          className="text-white text-3xl fill-white"
        />
      </div>
    </a>
  );
}