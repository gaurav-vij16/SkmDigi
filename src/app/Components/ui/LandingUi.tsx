"use client";

import Image from "next/image";
import BgImg from "../../../../public/BgImg.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function LandingUi() {
  const router = useRouter();

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

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/80" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-44 pb-24 flex flex-col md:flex-row justify-between gap-14">
        
        {/* LEFT TEXT */}
        <div className="flex flex-col max-w-2xl text-white">
          <h1 className="font-masvis text-4xl md:text-6xl leading-tight tracking-tight">
            Your <span className="text-orange-500">Growth,</span> <br />
            Powered by Our Expertise
          </h1>

          <p className="mt-6 text-lg leading-relaxed max-w-xl text-white/85">
            SKM DIGI drives growth with innovation, strategy, and lasting impact.
          </p>

          <button
            onClick={() => router.push("/ContactUs")}
            className="relative overflow-hidden mt-8 w-fit px-9 py-4 rounded-xl bg-linear-to-r from-orange-500 to-orange-700 text-white font-semibold tracking-wide shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">Let’s Discuss</span>
            <span className="absolute inset-0 bg-white/20 -translate-x-full skew-x-12 transition-transform duration-500 ease-out hover:translate-x-[200%]" />
          </button>
        </div>

        {/* RIGHT FEATURE BOX */}
        <div className="w-full md:w-[380px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-7 shadow-xl">
          <h3 className="font-masvis text-xl mb-5 tracking-wider text-orange-400">
            FEATURED SERVICES
          </h3>

          <div className="flex flex-col gap-5">
            {[
              "Performance Marketing",
              "Influencer Marketing",
              "Web Design & Development",
              "Talent Management",
            ].map((service, index) => (
              <div
                key={index}
                className="flex justify-between items-center cursor-pointer text-white/85 transition-all duration-200 hover:text-white"
              >
                <span className="tracking-wide">{service}</span>
                <MdKeyboardArrowRight className="text-xl" />
              </div>
            ))}
          </div>

          <div className="mt-7 pt-5 border-t border-white/20 flex justify-between items-center cursor-pointer font-semibold tracking-wide text-orange-400 transition hover:text-orange-300">
            <span className="text-lg">Explore All Services</span>
            <MdKeyboardArrowRight className="text-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
