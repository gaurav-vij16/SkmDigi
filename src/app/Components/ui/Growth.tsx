"use client";

import { useEffect, useState } from "react";

const stats = [
  { value: 15, label: "Content Reach", suffix: "M+" },
  { value: 30523, label: "Influencer Community", suffix: "+" },
  { value: 12, label: "Industries Covered", suffix: "+" },
  { value: 30, label: "Live Sessions", suffix: "+" },
  { value: 15, label: "Languages", suffix: "+" },
  { value: 7, label: "Return On Investment", suffix: "x" },
];

export default function GrowthSection() {
  const [counts, setCounts] = useState<number[]>(
    Array(stats.length).fill(0)
  );

  useEffect(() => {
    const duration = 1600;
    const frames = 60;
    const intervalTime = duration / frames;

    stats.forEach((stat, index) => {
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = Math.min(frame / frames, 1);
        const currentValue = Math.floor(stat.value * progress);

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = currentValue;
          return updated;
        });

        if (frame >= frames) clearInterval(counter);
      }, intervalTime);
    });
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* ===== Background Wave ===== */}
      <div className="absolute inset-0 -z-10">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#grad)"
            d="M0,128L80,149.3C160,171,320,213,480,224C640,235,800,213,960,181.3C1120,149,1280,107,1360,85.3L1440,64V0H0Z"
          />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFE7C2" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ===== Heading ===== */}
      <div className="text-center mb-20 px-6">
        <h2
          className="
            font-masvis
            text-4xl md:text-5xl lg:text-6xl
            tracking-wide
            text-gray-900
          "
        >
          Growth In <span className="text-orange-500">Numbers</span>
        </h2>

        <p className="mt-6 max-w-xl mx-auto text-lg text-gray-600">
          Measurable impact driven by strategy, creativity, and execution.
        </p>

        <div className="w-20 h-1 bg-orange-500 mx-auto mt-8 rounded-full" />
      </div>

      {/* ===== Stats Grid ===== */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className="
              group bg-white
              rounded-3xl p-10
              text-center
              shadow-lg
              hover:shadow-orange-400/30
              hover:-translate-y-3
              transition-all duration-300
            "
          >
            <div className="text-4xl md:text-5xl font-extrabold text-orange-600">
              {counts[index].toLocaleString()}
              <span className="ml-1">{item.suffix}</span>
            </div>

            <p className="mt-3 text-gray-700 text-lg font-medium">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
