"use client";

import { useState } from "react";
import { FaQuoteLeft, FaUserCircle } from "react-icons/fa";

const testimonials = [
  { id: 1, name: "John Carter", role: "Founder, Bright Vision", review: "Working with SKM Digi helped us scale our online presence. Their strategy boosted our conversions quickly." },
  { id: 2, name: "Priya Sharma", role: "CEO, GrowthX", review: "The team delivered exceptional results! Our website ranking improved and leads increased significantly." },
  { id: 3, name: "Michael Lee", role: "Director, Nova Labs", review: "Very professional and quick delivery. They understood our business goals and provided clear actionable insights." },
  { id: 4, name: "Aisha Patel", role: "Co-Founder, Zenith Labs", review: "Their design and SEO improvements brought real revenue growth. Highly recommended!" },
  { id: 5, name: "Daniel Scott", role: "Marketing Head, Alpha Group", review: "Brilliant teamwork and attention to detail. They improved our brand visibility drastically." },
  { id: 6, name: "Sofia Gomez", role: "Founder, Luna Media", review: "Their content strategy and optimization significantly boosted our engagement numbers." },
  { id: 7, name: "Akash Mehta", role: "CTO, TechSquare", review: "They rebuilt our conversion funnel and the results were instant. Amazing work." },
  { id: 8, name: "Megan Lee", role: "Brand Manager, Nova Co.", review: "Our ads performance improved by 3x after their campaign structure changes." },
  { id: 9, name: "Ryan Walker", role: "Founder, NextEra", review: "The best agency to trust for scaling your business fast and sustainably." },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const itemsPerSlide = 3;

  const next = () => index < testimonials.length - itemsPerSlide && setIndex(index + 1);
  const prev = () => index > 0 && setIndex(index - 1);

  return (
    <div className="py-20 bg-white px-6" id="testimonials">
      
      {/* Title Section */}
      <div className="text-center mb-14">
        <h3 className="text-orange-500 font-bold text-3xl tracking-wide uppercase">Testimonials</h3>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">Trusted Worldwide</h2>
        <p className="mt-3 max-w-2xl text-xl mx-auto text-gray-600">What our clients say about working with SKM DIGI.</p>
      </div>

      {/* Slider */}
      <div className="relative max-w-6xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * (100 / 3)}%)` }}
        >
          {testimonials.map((t) => (
            <div key={t.id} className="min-w-full md:min-w-1/2 lg:min-w-1/3 px-4">
              <div className="rounded-2xl bg-white border border-gray-200 shadow-lg p-8 h-[340px] flex flex-col justify-between hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">

                {/* Quote Icon */}
                <FaQuoteLeft className="text-orange-500 text-2xl mb-3" />

                {/* Review */}
                <p className="text-gray-700 leading-relaxed text-[15px]">{t.review}</p>

                {/* Divider */}
                <div className="w-full border-t border-gray-200 my-5"></div>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  <FaUserCircle className="text-5xl text-gray-400" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-10 gap-5">
          <button
            onClick={prev}
            disabled={index === 0}
            className="w-12 h-12 flex justify-center items-center bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-900 transition disabled:opacity-40"
          >
            ←
          </button>

          <button
            onClick={next}
            disabled={index >= testimonials.length - itemsPerSlide}
            className="w-12 h-12 flex justify-center items-center bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-900 transition disabled:opacity-40"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
