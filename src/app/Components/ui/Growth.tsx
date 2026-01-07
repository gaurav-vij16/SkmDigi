"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, label: "Content Reach", suffix: "M+" },
  { value: 30523, label: "Influencer Community", suffix: "+" },
  { value: 12, label: "Industries Covered", suffix: "+" },
  { value: 30, label: "Live Sessions", suffix: "+" },
  { value: 15, label: "Languages", suffix: "+" },
  { value: 7, label: "Return On Investment", suffix: "x" },
];

export default function GrowthSection() {
  const [mounted, setMounted] = useState(false);
  const [counts, setCounts] = useState<number[]>(
    stats.map(() => 0) // ✅ same on server & client
  );

  const rafRef = useRef<number | null>(null);

  // ✅ Mount gate (hydration safe)
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Single animation loop
  useEffect(() => {
    if (!mounted) return;

    const duration = 1200;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);

      setCounts(
        stats.map((stat) => Math.floor(stat.value * progress))
      );

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mounted]);

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-linear-to-b from-orange-50 via-white to-white">
      {/* Ambient blobs */}
      <div className="absolute -top-40 -left-40 w-[320px] h-80 bg-orange-300/25 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 -right-40 w-[300px] h-[300px] bg-pink-300/25 blur-[120px] rounded-full" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-14 sm:mb-20 px-4">
        <h2 className="font-masvis text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900">
          Growth That <span className="text-orange-500">Speaks</span>
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg text-gray-600">
          Real metrics. Real impact. Real brand momentum.
        </p>
      </div>

      {/* Stats */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-10 bg-white/80 border border-orange-200 shadow-[0_20px_40px_rgba(255,120,0,0.15)]"
          >
            {/* Accent */}
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl sm:rounded-t-3xl bg-linear-to-r from-orange-500 to-pink-500" />

            {/* Number */}
            <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              {counts[index].toLocaleString()}
              <span className="ml-1">{item.suffix}</span>
            </div>

            {/* Label */}
            <p className="mt-3 text-gray-700 text-base sm:text-lg font-medium">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
