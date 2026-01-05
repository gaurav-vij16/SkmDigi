"use client";

import Image from "next/image";
import BgImg from "../../../../public/SKMBg.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function LandingUi() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // Ensures no hydration error
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const featuredServices = [
    "Performance Marketing",
    "Influencer Marketing",
    "Web Design & Development",
    "Talent Management",
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <Image
        src={BgImg}
        alt="Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* CINEMATIC DARK OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-br from-black/80 via-black/60 to-black/90" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-44 pb-24 flex flex-col md:flex-row justify-between gap-16">
        {/* LEFT CONTENT */}
        <div className="flex flex-col max-w-2xl text-white">
          <h1 className="font-masvis text-4xl md:text-6xl leading-tight tracking-tight">
            Your <span className="text-orange-500">Growth.</span>
            <br />
            Powered by Our Expertise
          </h1>

          <p className="mt-6 text-lg leading-relaxed max-w-xl text-white/80">
            SKM DIGI drives growth with innovation, strategy, and lasting impact.
          </p>

          <button
            onClick={() => router.push("/ContactUs")}
            className="relative mt-9 w-fit px-10 py-4 rounded-xl 
                       bg-linear-to-r from-orange-500 to-orange-600
                       text-white font-semibold tracking-wide
                       shadow-[0_20px_60px_rgba(249,115,22,0.6)]
                       transition-all duration-300 hover:scale-105"
          >
            Let’s Discuss
          </button>
        </div>

        {/* FEATURED SERVICES CARD */}
        <div className="relative w-full md:w-[380px] rounded-2xl 
                        bg-black/40 backdrop-blur-xl
                        border border-orange-500/40
                        p-7 shadow-[0_0_40px_rgba(249,115,22,0.45)]">

          {/* GLOW BORDER */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-orange-500/30 pointer-events-none" />

          <h3 className="font-masvis text-xl mb-6 tracking-widest text-orange-400">
            FEATURED SERVICES
          </h3>

          <div className="flex flex-col gap-5">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="flex justify-between items-center cursor-pointer 
                           text-white/85 transition-all duration-200 
                           hover:text-orange-400"
              >
                <span className="tracking-wide">{service}</span>
                <MdKeyboardArrowRight className="text-2xl" />
              </div>
            ))}
          </div>

          <div className="mt-7 pt-5 border-t border-orange-500/30
                          flex justify-between items-center cursor-pointer
                          font-semibold tracking-wide text-orange-400
                          transition hover:text-orange-300">
            <span className="text-lg">Explore All Services</span>
            <MdKeyboardArrowRight className="text-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
