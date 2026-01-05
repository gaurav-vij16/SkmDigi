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
    const duration = 1400;
    const frames = 60;

    stats.forEach((stat, index) => {
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = Math.min(frame / frames, 1);
        setCounts((prev) => {
          const copy = [...prev];
          copy[index] = Math.floor(stat.value * progress);
          return copy;
        });
        if (frame >= frames) clearInterval(counter);
      }, duration / frames);
    });
  }, []);

  return (
    <section className="relative py-32 overflow-hidden bg-linear-to-b from-orange-50 via-white to-white">
      {/* Ambient blobs */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-orange-300/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 -right-32 w-[360px] h-[360px] bg-pink-300/30 blur-[120px] rounded-full" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-20 px-6">
        <h2 className="font-masvis text-4xl md:text-5xl lg:text-6xl text-gray-900">
          Growth That <span className="text-orange-500">Speaks</span>
        </h2>

        <p className="mt-6 max-w-xl mx-auto text-lg text-gray-600">
          Real metrics. Real impact. Real brand momentum.
        </p>
      </div>

      {/* Stats */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className="
              group relative
              rounded-3xl p-10
              bg-white/70 backdrop-blur-xl
              border border-orange-200
              shadow-[0_30px_60px_rgba(255,120,0,0.15)]
              hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(255,120,0,0.25)]
              transition-all duration-500
            "
          >
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-linear-to-r from-orange-500 to-pink-500" />

            {/* Number */}
            <div className="text-5xl md:text-6xl font-extrabold tracking-tight bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              {counts[index].toLocaleString()}
              <span className="ml-1">{item.suffix}</span>
            </div>

            {/* Label */}
            <p className="mt-4 text-gray-700 text-lg font-medium">
              {item.label}
            </p>

            {/* Micro glow */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-linear-to-br from-orange-400/10 to-transparent" />
          </div>
        ))}
      </div>
    </section>
  );
}
