"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  Camera,
  Megaphone,
  Search,
  MonitorSmartphone,
  Mail,
  Users,
} from "lucide-react";

const services = [
  { title: "Social Media Marketing", icon: Megaphone },
  { title: "Affiliate Marketing", icon: Users },
  { title: "SEO Optimization", icon: Search },
  { title: "Branding & Design", icon: Camera },
  { title: "Paid Advertising", icon: MonitorSmartphone },
  { title: "Email Marketing", icon: Mail },
  { title: "Content Production", icon: Camera },
];

export default function ServicesCircleSlider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // hydration fix

  return (
    <section className="relative overflow-hidden bg-white pt-6 sm:pt-12 pb-16 sm:pb-24">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-orange-50/60 via-white to-white" />

      {/* Heading */}
      <div className="mb-8 sm:mb-12 text-center px-4">
        <h2 className="font-masvis text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900">
          Our <span className="text-orange-500">Services</span>
        </h2>
        <p className="mx-auto mt-4 sm:mt-6 max-w-xl sm:max-w-2xl text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
          End-to-end digital marketing solutions designed to scale brands with
          precision and creativity.
        </p>
      </div>

      {/* Slider */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop
          centeredSlides
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          slidesPerView={4}
          spaceBetween={40}
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 16 },
            480: { slidesPerView: 1.5, spaceBetween: 20 },
            640: { slidesPerView: 2.2, spaceBetween: 24 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
          }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <SwiperSlide key={i} className="flex justify-center">
                <div className="group flex cursor-pointer flex-col items-center text-center transition-all duration-500">
                  {/* Circle */}
                  <div className="flex h-20 sm:h-24 w-20 sm:w-24 items-center justify-center rounded-full bg-linear-to-r from-orange-500 to-red-500 shadow-lg transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-10 sm:h-14 w-10 sm:w-14 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 sm:mt-5 text-sm sm:text-lg font-semibold tracking-wide text-gray-800 transition group-hover:text-orange-600">
                    {service.title}
                  </h3>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* CTA */}
      <div className="mt-10 sm:mt-14 text-center px-4">
        <a
          href="/Services"
          className="inline-block font-semibold tracking-wide text-gray-900 transition-all duration-300 hover:text-orange-600 border-b-2 border-transparent hover:border-orange-500"
        >
          View All Services →
        </a>
      </div>
    </section>
  );
}
