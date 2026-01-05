"use client";

import Image, { StaticImageData } from "next/image";
import {
  Zap,
  UsersRound,
  MonitorSmartphone,
  Megaphone,
  ArrowRight,
} from "lucide-react";

import Meme from "../../../../public/MEME.jpg";
import onboard from "../../../../public/Onboarding.jpg";
import workshop from "../../../../public/Workshops.jpg";
import digital from "../../../../public/Digital.jpg";

interface ServiceItem {
  icon: any;
  title: string;
  description: string;
  iconBg: string;
  bg: StaticImageData;
}

const services: ServiceItem[] = [
  {
    icon: Zap,
    title: "Digital Events & IP Design",
    description:
      "From corporate shows to concerts, we curate experiences and artists that elevate brand led events and original IPs.",
    iconBg: "bg-linear-to-br from-orange-400 to-pink-500",
    bg: digital,
  },
  {
    icon: UsersRound,
    title: "Workshops & Engagements",
    description:
      "Sales, leadership, or culture  we design workshops that blend insight, interaction, and impact.",
    iconBg: "bg-linear-to-br from-orange-400 to-yellow-400",
    bg: workshop,
  },
  {
    icon: MonitorSmartphone,
    title: "Onboarding & Casting",
    description:
      "From web series to branded content, our in house casting and onboarding teams find talent that fits your vision.",
    iconBg: "bg-linear-to-br from-purple-400 to-indigo-500",
    bg: onboard,
  },
  {
    icon: Megaphone,
    title: "Meme Marketing",
    description:
      "High reach meme pages and creators combined with sharp strategy to deliver viral, brand safe growth.",
    iconBg: "bg-linear-to-br from-green-400 to-teal-500",
    bg: Meme,
  },
];

export default function OtherServices() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Section background */}
      <div className="absolute inset-0 -z-20 bg-linear-to-b from-[#1a120c] via-[#120e0b] to-[#0e0b09]" />

      {/* Soft orange ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-32 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <h2 className="font-masvis text-4xl tracking-wide text-white drop-shadow-[0_2px_20px_rgba(255,140,0,0.25)] md:text-5xl lg:text-6xl">
            Beyond{" "}
            <span className="text-orange-500">Influencer Marketing</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            We extend brand storytelling beyond creators  delivering immersive
            experiences, talent driven content, and culture led campaigns.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => {
            const Icon = service.icon;

            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl border border-orange-500/20 bg-white/10 p-8 backdrop-blur-xl shadow-[0_0_60px_rgba(255,165,0,0.18)] transition-all duration-500 hover:-translate-y-3"
              >
                {/* Background image */}
                <Image
                  src={service.bg}
                  alt={service.title}
                  fill
                  className="object-cover opacity-35 transition-all duration-500 group-hover:opacity-45"
                />

                {/* Soft overlay (not dark) */}
                <div className="absolute inset-0 bg-linear-to-br from-black/30 via-black/10 to-orange-900/20" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${service.iconBg}`}
                  >
                    <Icon className="h-8 w-8" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-8 leading-relaxed text-gray-200">
                    {service.description}
                  </p>

                  {/* CTA */}
                  {/* <div className="flex items-center gap-2 text-orange-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="font-medium">Explore</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
