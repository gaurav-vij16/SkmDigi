"use client";

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
  return (
    <section className="pt-16 pb-24 bg-white relative overflow-hidden">
      {/* soft background accent */}
      <div className="absolute inset-0 bg-linear-to-b from-orange-50/60 via-white to-white -z-10" />

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="font-masvis text-4xl md:text-6xl text-gray-900">
          Our <span className="text-orange-500">Services</span>
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          End-to-end digital marketing solutions designed to scale brands with
          precision and creativity.
        </p>
      </div>

      {/* Slider */}
      <div className="w-full max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop
          centeredSlides
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          slidesPerView={4}
          spaceBetween={40}
          breakpoints={{
            0: { slidesPerView: 1.4, spaceBetween: 20 },
            640: { slidesPerView: 2.3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
          }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <SwiperSlide key={i} className="flex justify-center">
                <div className="group flex flex-col items-center text-center cursor-pointer transition-all duration-500">
                  {/* Circle */}
                  <div
                    className="w-28 h-28 rounded-full flex items-center justify-center
                    bg-linear-to-br from-orange-500 to-orange-700
                    text-white shadow-xl
                    transition-all duration-500
                    group-hover:scale-110
                    group-hover:shadow-orange-400/40"
                  >
                    <Icon className="w-14 h-14" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-lg font-semibold text-gray-800 tracking-wide group-hover:text-orange-600 transition">
                    {service.title}
                  </h3>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <a
          href="/Services"
          className="inline-block font-semibold tracking-wide
          text-gray-900 hover:text-orange-600
          border-b-2 border-transparent hover:border-orange-500
          transition-all duration-300"
        >
          View All Services →
        </a>
      </div>
    </section>
  );
}
