"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const videos = [
  { src: "/videos/video1.mp4", title: "Entertainment Clip" },
  { src: "/videos/video1.mp4", title: "Lifestyle & Beauty" },
  { src: "/videos/video1.mp4", title: "Fitness Routine" },
  { src: "/videos/video1.mp4", title: "Tech Review" },
  { src: "/videos/video1.mp4", title: "Gaming Highlights" },
];

export default function VideoCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // visible slides
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
    <div className="w-full py-14 bg-linear-to-b from-white via-orange-50/40 to-orange-100/60">
      <h2 className="font-masvis text-4xl font-extrabold text-center text-orange-500 mb-6 tracking-wide">
        Client Videos
      </h2>

      <div className="max-w-6xl mx-auto px-6">
        <Slider {...settings}>
          {videos.map((video, index) => (
            <div key={index} className="px-2">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-orange-200">
                <video
                  src={video.src}
                  controls
                  className="w-full h-[300px] md:h-[350px] object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
