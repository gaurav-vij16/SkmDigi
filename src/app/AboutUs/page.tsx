"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactFormUi from "../Components/ui/ContactFormUi";

import aboutUsImg from "../../../public/AboutUsImg.jpg";
import About1 from "../../../public/About1.jpg";
import About2 from "../../../public/About2.jpg";
import About3 from "../../../public/About3.jpg";

export default function AboutUs() {
  return (
    <div className="w-full bg-white text-gray-900 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="font-masvis text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Built by <span className="text-orange-500">Founders</span>
              <br />
              For <span className="text-orange-500">Founders</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
              Whether you're an early stage startup looking to validate your
              product or an established business aiming to unlock the next level
              of growth, we design marketing strategies that deliver real
              business outcomes.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative h-64 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src={aboutUsImg}
              alt="About SKM Digi"
              fill
              priority
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center">
          {[
            { value: "120+", label: "Clients Served" },
            { value: "6+", label: "Countries" },
            { value: "5+ Years", label: "Growth Marketing Experience" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500">
                {stat.value}
              </p>
              <p className="mt-2 text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHO ARE WE ================= */}
      <section className="py-20 sm:py-28 relative px-4 sm:px-6 lg:px-12">
        <div className="absolute inset-0 bg-linear-to-br from-orange-50 via-white to-transparent -z-10" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ZIGZAG IMAGES */}
          <div className="relative grid grid-cols-2 gap-4 sm:gap-6 max-h-[540px] sm:max-h-[560px]">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-36 sm:h-44 md:h-56 rounded-2xl overflow-hidden shadow-2xl z-20 hover:shadow-3xl"
            >
              <Image src={About1} alt="Team culture" fill className="object-cover" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ duration: 0.5 }}
              className="relative h-40 sm:h-52 md:h-64 rounded-2xl overflow-hidden shadow-2xl translate-y-6 sm:translate-y-12 z-30 hover:shadow-3xl"
            >
              <Image src={About3} alt="Team brainstorming" fill className="object-cover" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ duration: 0.5 }}
              className="relative col-span-2 h-36 sm:h-44 md:h-52 rounded-2xl overflow-hidden shadow-2xl -translate-y-3 sm:-translate-y-6 z-10 hover:shadow-3xl"
            >
              <Image src={About2} alt="Team collaboration" fill className="object-cover" />
            </motion.div>
          </div>

          {/* CONTENT */}
          <div className="space-y-8 sm:space-y-12">
            <h2 className="font-masvis text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-14">
              Who <span className="text-orange-500">are we?</span>
            </h2>

            {[
              {
                title: "Number  Crunching  Maniacs",
                text: "We live in dashboards, breathe performance metrics, and obsess over data until every click turns into measurable impact.",
              },
              {
                title: "Creative  Mavericks",
                text: "We blend trends, storytelling, and instinct to craft scroll-stopping ideas that don’t just look good — they perform.",
              },
              {
                title: "Unshakable  Strategists",
                text: "We don’t rest until the plan is perfect. We test, tweak, and stick to what actually delivers results.",
              },
              {
                title: "Obsessed  Growth  Specialists",
                text: "Scaling brands is our adrenaline. From smart funnels to sharp campaigns — we chase growth like it’s a full-time sport.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_16px] gap-4 sm:gap-6 items-start relative"
              >
                {/* TEXT CONTENT */}
                <div>
                  <h3 className="font-masvis text-lg sm:text-xl md:text-2xl font-bold text-orange-500 leading-relaxed ">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                    {item.text}
                  </p>

                </div>

                {/* ORANGE LINE */}
                <div className="relative flex justify-center">
                  <span className="block h-full w-1 bg-orange-500 rounded-full shadow-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-gray-50">
        <ContactFormUi />
      </section>
    </div>
  );
}
