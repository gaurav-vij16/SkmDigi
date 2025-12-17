"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevents SSR HTML mismatch

  return (
    <a
      href="https://wa.me/919818931982?text=Hello!%20I’m%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        bg-green-400 text-white 
        p-4 rounded-full shadow-xl 
        hover:scale-110 hover:shadow-orange-500/40 hover:shadow-2xl
        transition-all duration-300
      "
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
