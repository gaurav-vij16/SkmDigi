"use client";

import Image from "next/image";
import Logo from "../../../../public/SkmLogo.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

import {
  Megaphone,
  Users,
  Search,
  Camera,
  MonitorSmartphone,
  Mail,
} from "lucide-react";

/* ---------------- SERVICES MENU DATA ---------------- */
const services = [
  { title: "Social Media Marketing", slug: "social-media-marketing", icon: Megaphone },
  { title: "Affiliate Marketing", slug: "affiliate-marketing", icon: Users },
  { title: "SEO", slug: "seo", icon: Search },
  { title: "Paid Advertising", slug: "paid-advertising", icon: MonitorSmartphone },
  { title: "Email Marketing", slug: "email-marketing", icon: Mail },
  { title: "Content Production", slug: "content-production", icon: Camera },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { label: "About Us", path: "/AboutUs" },
    { label: "Contact Us", path: "/ContactUs" },
    { label: "Career", path: "/Career" },
  ];

  return (
    <>
      {/* ================= NAVBAR (WHITE) ================= */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto h-[88px] px-6 flex items-center justify-between">
          <div onClick={() => router.push("/")} className="cursor-pointer">
            <Image src={Logo} alt="SKM Digi Logo" width={150} />
          </div>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-4">
              <a href="https://www.instagram.com/skmdigimedia" target="_blank">
                <FaInstagram className="text-xl text-gray-700 hover:text-pink-500 hover:scale-125 transition" />
              </a>
              <FaLinkedin className="text-xl text-gray-700 hover:text-blue-500 hover:scale-125 transition" />
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="ml-8 bg-orange-500 text-white px-4 py-2 rounded-xl text-3xl shadow-lg"
            >
              ☰
            </motion.button>
          </div>

          {/* MOBILE */}
          <motion.button
            onClick={() => setIsOpen(true)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden bg-orange-500 text-white px-3 py-2 rounded-lg text-3xl"
          >
            ☰
          </motion.button>
        </div>
      </nav>

      {/* ================= DARK SIDEBAR ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25 }}
              className="fixed top-0 right-0 h-full w-[280px] z-50 p-6 bg-linear-to-b from-[#0f172a] via-[#1e293b] to-[#334155] text-gray-100 flex flex-col shadow-2xl"
            >
              {/* Close + Social */}
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-2xl hover:text-orange-500 transition"
                >
                  ✕
                </button>
                <div className="flex gap-4 text-xl">
                  <FaInstagram className="hover:text-pink-500 transition" />
                  <FaLinkedin className="hover:text-blue-500 transition" />
                </div>
              </div>

              {/* Contact */}
              <a
                href="mailto:info@skmdigi.com"
                className="underline mb-6 text-gray-300 hover:text-white transition"
              >
                info@skmdigi.com
              </a>

              <div className="border-t border-gray-700 mb-6" />

              {/* Navigation */}
              <ul className="flex flex-col gap-5 text-lg font-medium">
                {/* Services Dropdown */}
                <li>
                  <div className="flex justify-between items-center">
                    <Link
                      href="/Services"
                      onClick={() => setIsOpen(false)}
                      className="hover:text-orange-400 transition relative group"
                    >
                      Services
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all"></span>
                    </Link>

                    <button onClick={() => setServiceOpen(!serviceOpen)}>
                      <span
                        className={`transition-transform ${serviceOpen ? "rotate-180" : ""}`}
                      >
                        ⌃
                      </span>
                    </button>
                  </div>

                  <AnimatePresence>
                    {serviceOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-3 ml-3 flex flex-col gap-3 text-base"
                      >
                        {services.map((item) => (
                          <li key={item.slug}>
                            <Link
                              href={`/Services#${item.slug}`}
                              onClick={() => {
                                setIsOpen(false);
                                setServiceOpen(false);
                              }}
                              className="flex items-center gap-2 hover:text-orange-400 transition"
                            >
                              <item.icon size={16} className="text-gray-300 group-hover:text-orange-400 transition" />
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                {/* Other Nav Links */}
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.path}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-orange-400 transition relative group"
                    >
                      {link.label}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all"></span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              {/* Footer */}
              <div className="mt-auto text-xs  transition-colors duration-300 text-white font-bold">
                <div className="border-t border-gray-700 transition-colors duration-300 mb-4 group-hover:border-orange-500"></div>
                © SKM DIGI — All Rights Reserved.
              </div>


            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
