"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/SkmLogo.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

/* ---------------- DATA ---------------- */

const quickLinks = [
  { label: "About Us", href: "/AboutUs" },
  { label: "Services", href: "/Services" },
  { label: "Contact Us", href: "/ContactUs" },
  { label: "Careers", href: "/Career" },
];

const services = [
  { label: "Social Media Marketing", slug: "social-media-marketing" },
  { label: "Affiliate Marketing", slug: "affiliate-marketing" },
  { label: "SEO", slug: "seo" },
  { label: "Paid Advertising", slug: "paid-advertising" },
  { label: "Email Marketing", slug: "email-marketing" },
  { label: "Content Production", slug: "content-production" },
];

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-white to-orange-50 pt-20 pb-10 px-6 border-t border-orange-200/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 items-start">

        {/* LOGO + ABOUT */}
        <div className="flex flex-col items-start">
          <div className="-mt-9">
            <Image src={Logo} alt="SKMDigi Logo" width={150} height={60} />
          </div>

          <p className="text-gray-600 text-sm leading-relaxed max-w-[220px] mt-3">
            SKM DIGI drives growth with creativity, innovation, and
            performance driven digital strategies built for modern brands.
          </p>

          <div className="flex gap-4 text-2xl text-gray-700 mt-5">
            <a
              href="https://www.instagram.com/skmdigimedia"
              target="_blank"
              className="hover:text-red-600 transition hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/skm-digi/"
              target="_blank"
              className="hover:text-blue-600 transition hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-xl text-orange-700 mb-5">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-700">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover:text-orange-600 transition-all hover:translate-x-1 inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-xl text-orange-700 mb-5">
            Our Services
          </h3>

          <ul className="space-y-2 text-gray-700">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/Services#${service.slug}`}
                  className="hover:text-orange-600 transition-all hover:translate-x-1 inline-block"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* GET CONNECTED */}
        <div className="bg-orange-50 p-8 rounded-xl shadow-xl flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
          <h3 className="font-bold text-2xl text-orange-700 mb-3">
            Get Connected
          </h3>

          <p className="text-gray-700 mb-4 italic">
            Over a cup of hot or cold brew, maybe?
          </p>

          <p className="text-gray-700 mb-6">
            Have an idea or want to scale your brand? Let’s talk growth.
          </p>

          <div className="flex gap-4 mb-6 w-full">
            <Link
              href="/ContactUs"
              className="flex-1 bg-white border border-orange-300 text-orange-600 font-semibold py-2 px-4 rounded-lg hover:bg-orange-100 transition"
            >
              Brand
            </Link>

            <Link
              href="/Career"
              className="flex-1 bg-white border border-orange-300 text-orange-600 font-semibold py-2 px-4 rounded-lg hover:bg-orange-100 transition"
            >
              Influencer
            </Link>
          </div>

          <p className="text-gray-700 font-bold">
             Email us at{" "}
            <a
              href="mailto:info@skmdigi.com"
              className="text-orange-500 hover:underline"
            >
              info@skmdigi.com
            </a>
          </p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-orange-200/40 mt-14 pt-6" />

      {/* COPYRIGHT */}
      <div className="text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} SKM DIGI. All rights reserved.
      </div>
    </footer>
  );
}
