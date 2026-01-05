"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Who will create this content exactly?",
    a: "We have an in house team of social media experts who will create your content end to end research, scripting, shooting and editing.",
  },
  {
    q: "How long will it take to start posting content on my page?",
    a: "Once we finalize our partnership, we will start posting content within 7–10 days.",
  },
  {
    q: "Can I post this content on other platforms like YouTube & Facebook?",
    a: "Yes! You can use the content we create on any platform of your choice.",
  },
  {
    q: "Who will be my point of contact and how do I communicate?",
    a: "Each partner gets a dedicated content manager and creative team. We usually communicate via WhatsApp for speed.",
  },
  {
    q: "My requirements are different from the listed packages. Can you help?",
    a: "Absolutely. We offer fully customized social media solutions. Book a call and let’s discuss.",
  },
];

export default function FAQs() {
  const [active, setActive] = useState<number | null>(0);

  const cardClass =
    "relative overflow-hidden rounded-2xl border border-orange-500/30 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(255,140,0,0.15)] transition-all duration-500";

  const arrowClass = (open: boolean) =>
    "text-orange-400 transition-transform duration-300" + (open ? " rotate-180" : "");

  const answerClass = (open: boolean) =>
    "relative overflow-hidden px-7 transition-all duration-500" + (open ? " max-h-40 pb-7" : " max-h-0");

  // Group FAQs: first 4 in pairs, last one separately
  const rows = [
    [faqs[0], faqs[1]],
    [faqs[2], faqs[3]],
    [faqs[4]],
  ];

  return (
    <section className="bg-orange-500/10 px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-20 text-6xl font-bold text-white">FAQs</h2>

        <div className="space-y-12">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid grid-cols-1 gap-8 ${
                row.length === 2 ? "md:grid-cols-2" : "md:grid-cols-1"
              }`}
            >
              {row.map((item, index) => {
                const globalIndex = rowIndex * 2 + index; // unique index
                const open = active === globalIndex;

                return (
                  <div key={globalIndex} className={cardClass}>
                    {/* Glow layer */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-orange-500/10 to-transparent opacity-60" />

                    {/* Question */}
                    <button
                      onClick={() => setActive(open ? null : globalIndex)}
                      className="relative flex w-full items-start justify-between p-7 text-left"
                    >
                      <h3 className="text-xl font-semibold leading-snug text-white">
                        {item.q}
                      </h3>
                      <ChevronDown size={26} className={arrowClass(open)} />
                    </button>

                    {/* Answer */}
                    <div className={answerClass(open)}>
                      <p className="text-[15px] leading-relaxed text-gray-300">
                        <span className="font-semibold text-orange-400">a.</span>{" "}
                        {item.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
