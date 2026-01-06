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
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const duration = 1200;

    stats.forEach((stat, index) => {
      const start = performance.now();

      const animate = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);

        setCounts((prev) => {
          const copy = [...prev];
          copy[index] = Math.floor(stat.value * progress);
          return copy;
        });

        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    });
  }, [mounted]);

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-linear-to-b from-orange-50 via-white to-white">
      {/* Ambient blobs (safe for mobile) */}
      <div className="absolute -top-40 -left-40 w-[320px] h-80 sm:w-[420px] sm:h-[420px] bg-orange-300/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 -right-40 w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] bg-pink-300/30 blur-[120px] rounded-full" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-14 sm:mb-20 px-4">
        <h2 className="font-masvis text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900">
          Growth That <span className="text-orange-500">Speaks</span>
        </h2>

        <p className="mt-4 sm:mt-6 max-w-xl mx-auto text-base sm:text-lg text-gray-600">
          Real metrics. Real impact. Real brand momentum.
        </p>
      </div>

      {/* Stats */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className="
              group relative
              rounded-2xl sm:rounded-3xl
              p-6 sm:p-10
              bg-white/70 backdrop-blur-xl
              border border-orange-200
              shadow-[0_20px_40px_rgba(255,120,0,0.15)]
              hover:-translate-y-3 hover:shadow-[0_35px_70px_rgba(255,120,0,0.25)]
              transition-all duration-500
            "
          >
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl sm:rounded-t-3xl bg-linear-to-r from-orange-500 to-pink-500" />

            {/* Number */}
            <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              {mounted ? counts[index].toLocaleString() : "0"}
              <span className="ml-1">{item.suffix}</span>
            </div>

            {/* Label */}
            <p className="mt-3 sm:mt-4 text-gray-700 text-base sm:text-lg font-medium">
              {item.label}
            </p>

            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-linear-to-br from-orange-400/10 to-transparent" />
          </div>
        ))}
      </div>
    </section>
  );
}
