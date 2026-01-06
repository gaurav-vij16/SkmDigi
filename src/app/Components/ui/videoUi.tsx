"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { clientVideos } from "../../Data/ClientVideos";

export default function VideoCarousel() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 🚫 prevent hydration mismatch

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: () => setActiveIndex(null),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="w-full py-14 md:py-20 bg-linear-to-b from-white via-orange-50/30 to-orange-100/40">
      <h2 className="font-masvis text-3xl md:text-5xl font-extrabold text-center text-orange-500 mb-10 md:mb-14">
        Client Videos
      </h2>

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <Slider {...settings}>
          {clientVideos.map((video, index) => {
            const isActive = activeIndex === index;

            return (
              <div key={index} className="px-2 md:px-3">
                <div
                  onClick={() => setActiveIndex(index)}
                  className="
                    relative overflow-hidden rounded-2xl md:rounded-3xl
                    bg-white border border-orange-100/70
                    shadow-[0_12px_35px_rgba(0,0,0,0.08)]
                    transition-all duration-300
                    hover:scale-[1.02] active:scale-95
                  "
                >
                  <div className="relative w-full h-[260px] sm:h-[300px] md:h-[340px] lg:h-[360px]">
                    {isActive ? (
                      <video
                        src={video.videoUrl}
                        autoPlay
                        controls
                        playsInline
                        className="w-full h-full object-cover"
                        onEnded={() => setActiveIndex(null)}
                      />
                    ) : (
                      <img
                        src={video.thumbnail}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}

                    {!isActive && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/15 backdrop-blur-[1px]">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-linear-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-[0_10px_30px_rgba(255,115,0,0.5)]">
                          <span className="text-white text-3xl md:text-4xl ml-1">
                            ▶
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
