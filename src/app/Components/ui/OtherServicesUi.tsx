"use client";

import { FC } from "react";
import {
  Zap,
  UsersRound,
  MonitorSmartphone,
  Megaphone,
  ArrowRight,
} from "lucide-react";

interface ServiceItem {
  icon: FC<any>;
  title: string;
  description: string;
  color?: string;
}

const services: ServiceItem[] = [
  {
    icon: Zap,
    title: "Digital Events & IP Design",
    description:
      "From corporate shows to concerts, we curate experiences and artists that elevate brand-led events and original IPs.",
    color: "from-orange-400 to-pink-500",
  },
  {
    icon: UsersRound,
    title: "Workshops & Engagements",
    description:
      "Sales, leadership, or culture — we design workshops that blend insight, interaction, and impact.",
    color: "from-orange-400 to-yellow-400",
  },
  {
    icon: MonitorSmartphone,
    title: "Onboarding & Casting",
    description:
      "From web series to branded content, our in-house casting and onboarding teams find talent that fits your vision.",
    color: "from-purple-400 to-indigo-500",
  },
  {
    icon: Megaphone,
    title: "Meme Marketing",
    description:
      "High-reach meme pages and creators combined with sharp strategy to deliver viral, brand-safe growth.",
    color: "from-green-400 to-teal-500",
  },
];

export default function OtherServices() {
  return (
    <section className="relative py-28 bg-gray-50 overflow-hidden">
      {/* subtle background accent */}
      <div className="absolute inset-0 bg-linear-to-b from-orange-50/60 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* ===== HEADING ===== */}
        <div className="text-center mb-20">
          <h2
            className="
              font-masvis
              text-4xl md:text-5xl lg:text-6xl
              font-normal
              tracking-wide
              text-gray-900
            "
          >
            Beyond <span className="text-orange-500">Influencer Marketing</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            We extend brand storytelling beyond creators — delivering immersive
            experiences, talent-driven content, and culture-led campaigns.
          </p>
        </div>

        {/* ===== CARDS GRID ===== */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="
                group relative bg-white
                rounded-3xl p-8
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-3
                transition-all duration-300
              "
            >
              {/* icon */}
              <div
                className={`
                  w-16 h-16 mb-6
                  flex items-center justify-center
                  rounded-full
                  bg-linear-to-br ${service.color}
                  text-white
                  shadow-md
                  group-hover:scale-110
                  transition-transform duration-300
                `}
              >
                <service.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>

              {/* title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* description */}
              <p className="text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>

              {/* arrow */}
              <div className="flex items-center gap-2 text-orange-500 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span>Explore</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
