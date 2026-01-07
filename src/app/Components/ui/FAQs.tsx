"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Who will create this content exactly?",
    a: "We have an in-house team of social media experts who handle research, scripting, shooting, and editing end to end.",
  },
  {
    q: "How long will it take to start posting content on my page?",
    a: "Once we finalize our partnership, we begin posting within 7–10 days.",
  },
  {
    q: "Can I post this content on other platforms like YouTube & Facebook?",
    a: "Yes. You’re free to repurpose the content across any platform you choose.",
  },
  {
    q: "Who will be my point of contact and how do I communicate?",
    a: "You’ll get a dedicated content manager and creative team. We usually communicate via WhatsApp for faster execution.",
  },
  {
    q: "How do I know if my digital marketing efforts are working?",
    a: "We track performance through regular reports, website traffic analysis, lead quality, and conversion tracking. Clear metrics ensure you always know what’s driving growth when working with a professional digital marketing agency.",
  },
  {
    q: "My requirements are different from the listed packages. Can you help?",
    a: "Absolutely. We build fully customized digital marketing solutions aligned with your business goals.",
  },
];

export default function FAQs() {
  const [active, setActive] = useState<number | null>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // ✅ hydration safe

  return (
    <section className="bg-neutral-950 px-4 py-16 sm:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="mb-12 text-center sm:text-left font-masvis text-3xl sm:text-5xl text-white">
          FAQs that <span className="text-orange-500">Matter</span>
        </h2>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {faqs.map((item, index) => {
            const open = active === index;

            return (
              <div
                key={index}
                className={`relative rounded-2xl border transition-all duration-300
                  ${
                    open
                      ? "border-orange-500/70 shadow-[0_20px_60px_rgba(249,115,22,0.25)]"
                      : "border-neutral-800"
                  }
                  bg-linear-to-br from-neutral-900 to-neutral-950`}
              >
                {/* Accent strip */}
                <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl bg-linear-to-b from-orange-400 to-orange-600" />

                {/* Question */}
                <button
                  onClick={() => setActive(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 sm:px-7 sm:py-6 text-left"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                    {item.q}
                  </h3>

                  <ChevronDown
                    size={22}
                    className={`shrink-0 text-orange-500 transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                    open ? "max-h-44 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 pb-5 sm:px-7 sm:pb-6 text-sm sm:text-[15px] text-neutral-300 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
