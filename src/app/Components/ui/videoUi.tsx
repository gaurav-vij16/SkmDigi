"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { clientVideos } from "../../Data/ClientVideos";

export default function VideoCarousel() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40px",
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "20px" } },
      { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: "10px" } },
    ],
  };

  return (
    <div className="w-full py-16 bg-linear-to-b from-gray-100 via-orange-50/30 to-orange-100/50">
      <h2 className="font-masvis text-4xl md:text-5xl font-extrabold text-center text-orange-500 mb-14 tracking-wider drop-shadow-md">
        Client Videos
      </h2>

      <div className="max-w-6xl mx-auto px-6">
        <Slider {...settings}>
          {clientVideos.map((video, index) => (
            <div key={index} className="px-3">
              <div
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-orange-200 relative cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => setActiveVideo(video.videoUrl)}
              >
                <div className="relative w-full h-[300px] md:h-[350px]">
                  {/* Video or Thumbnail */}
                  {activeVideo === video.videoUrl ? (
                    <video
                      src={video.videoUrl}
                      controls
                      autoPlay
                      className="w-full h-full object-cover rounded-3xl"
                      onEnded={() => setActiveVideo(null)}
                    />
                  ) : (
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover rounded-3xl"
                      onError={(e) =>
                      ((e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/400x300?text=Thumbnail")
                      }
                    />
                  )}

                  {/* Play button overlay only if video not active */}
                  {activeVideo !== video.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center rounded-3xl">
                      <span className="text-white text-5xl md:text-6xl drop-shadow-lg">&#9658;</span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
