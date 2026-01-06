"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Megaphone,
  Users,
  Search,
  Camera,
  MonitorSmartphone,
  Mail,
  Star,
} from "lucide-react";

import SeoImg from "../../../public/SEO.jpg";
import AffilateMarketingImg from "../../../public/AffilateMarketing.jpg";
import SocialMediaImg from "../../../public/SocialMediaImg.jpg";
import PerformanceImg from "../../../public/PerformanceImg.jpg";
import EmailMarketingImg from "../../../public/EmailMarketing.jpg";
import ContentProductionImg from "../../../public/ContentProduction.jpg";
import InfluencerMarketingImg from "../../../public/InfluencerMarketingImg.jpg";
import ContactFormUi from "../Components/ui/ContactFormUi";

/* ---------------- DATA ---------------- */
const services = [
  {
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    icon: Megaphone,
    image: SocialMediaImg,
    description:
      "We build scroll stopping social media strategies that turn attention into action. From content planning to community growth, we help brands dominate feeds and convert followers into loyal customers.",
    stats: [
      { value: "4.2x", label: "Engagement Growth" },
      { value: "1M+", label: "Monthly Reach" },
      { value: "120+", label: "Campaigns Run" },
    ],
  },
  {
    title: "Influencer Marketing",
    slug: "influencer-marketing",
    icon: Star,
    image: InfluencerMarketingImg,
    description:
      "We connect brands with the right influencers using data-driven insights and smart discovery tools. From niche creators to global celebrities, we build authentic partnerships that drive strong engagement and real business impact. Our creative team produces high-quality content, while we handle end-to-end execution to ensure smooth, hassle-free campaigns backed by detailed performance reporting.",
    stats: [
      { value: "7%", label: "Avg Engagement Rate" },
      { value: "3M+", label: "Campaign Reach" },
      { value: "3×", label: "Return on Investment" },
    ],
  },
  {
    title: "Affiliate Marketing",
    slug: "affiliate-marketing",
    icon: Users,
    image: AffilateMarketingImg,
    description:
      "Our affiliate systems are designed to scale revenue without scaling costs. We onboard high quality partners, track performance in real time, and optimize payouts for maximum ROI.",
    stats: [
      { value: "35%", label: "Avg Revenue Lift" },
      { value: "300+", label: "Active Affiliates" },
      { value: "8+", label: "Global Networks" },
    ],
  },
  {
    title: "SEO",
    slug: "seo",
    icon: Search,
    image: SeoImg,
    description:
      "We don’t chase rankings, we chase qualified traffic. Our SEO approach focuses on technical excellence, high intent keywords, and sustainable growth that compounds month after month.",
    stats: [
      { value: "180%", label: "Organic Traffic" },
      { value: "90+", label: "Top-3 Keywords" },
      { value: "6 Mo", label: "Avg Growth Time" },
    ],
  },
  {
    title: "Paid Advertising",
    slug: "paid-advertising",
    icon: MonitorSmartphone,
    image: PerformanceImg,
    description:
      "Performance driven paid campaigns engineered for scale. From creatives to conversion tracking, we optimize every touchpoint to deliver measurable, profitable growth.",
    stats: [
      { value: "5.1x", label: "Avg ROAS" },
      { value: "$500k+", label: "Ad Spend Managed" },
      { value: "40%", label: "CPA Reduction" },
    ],
  },
  {
    title: "Email Marketing",
    slug: "email-marketing",
    icon: Mail,
    image: EmailMarketingImg,
    description:
      "From welcome flows to retention sequences, we craft emails that feel personal and perform consistently, driving repeat purchases and long term customer value.",
    stats: [
      { value: "42%", label: "Open Rate" },
      { value: "18%", label: "CTR Increase" },
      { value: "3x", label: "LTV Boost" },
    ],
  },
  {
    title: "Content Production",
    slug: "content-production",
    icon: Camera,
    image: ContentProductionImg,
    description:
      "High impact content built to convert. We create visuals, videos, and ad creatives that capture attention fast and communicate brand value instantly.",
    stats: [
      { value: "250+", label: "Creatives Delivered" },
      { value: "3x", label: "Ad Recall Lift" },
      { value: "98%", label: "Client Retention" },
    ],
  },
];

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState(services[0].slug);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false); // fix hydration

  useEffect(() => {
    setMounted(true);

    if (!mounted) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / docHeight) * 100);

      for (let service of services) {
        const elem = document.getElementById(service.slug);
        if (elem) {
          const rect = elem.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(service.slug);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  if (!mounted) return null; // prevent hydration error

  return (
    <div className="w-full bg-white text-gray-900 overflow-hidden relative">
      {/* ---------------- PROGRESS BAR ---------------- */}
      <div className="fixed top-0 left-0 w-1 h-full bg-gray-200 z-50">
        <motion.div
          className="w-1 bg-orange-500 origin-top"
          style={{ scaleY: scrollProgress / 100 }}
        />
      </div>

      {/* ---------------- STICKY NAV ---------------- */}
      <div className="fixed top-1/4 left-4 sm:left-6 flex flex-col gap-3 z-50">
        {services.map((service) => (
          <a
            key={service.slug}
            href={`#${service.slug}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === service.slug
                ? "bg-orange-500 scale-150"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* ================= HERO ================= */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 text-center bg-linear-to-b from-orange-50 to-white">
        <h1 className="font-masvis text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Our <span className="text-orange-500">Services</span>
        </h1>
        <p className="mt-4 sm:mt-6 max-w-3xl sm:max-w-4xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
          Powerful digital solutions designed to drive sustainable, measurable
          growth for modern brands.
        </p>
      </section>

      {/* ================= SERVICES ================= */}
      {services.map((service, index) => {
        const isAlt = index % 2 !== 0;
        const isFirst = index === 0;

        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-32 ${
              isFirst ? "pt-12 pb-16 sm:pb-24" : "py-20 sm:py-28"
            } ${isAlt ? "bg-orange-50/60" : "bg-white"}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center"
            >
              {/* IMAGE */}
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.25)]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-black/10 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="space-y-6 sm:space-y-8">
                {/* TITLE */}
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-orange-500" />
                  </div>
                  <h2 className="font-masvis text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    {service.title}
                  </h2>
                </div>

                {/* DESCRIPTION */}
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl leading-relaxed">
                  {service.description}
                </p>

                {/* STATS */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6">
                  {service.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-white border border-orange-100 px-4 py-4 sm:px-5 sm:py-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                    >
                      <p className="text-2xl sm:text-3xl font-bold text-orange-500">
                        {stat.value}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>
        );
      })}

      {/* ================= CONTACT ================= */}
      <ContactFormUi />
    </div>
  );
}
