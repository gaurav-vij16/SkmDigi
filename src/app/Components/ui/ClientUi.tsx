"use client";

import Image from "next/image";

export default function ClientUi() {
  const clients = [
    "/clients/c1.png",
    "/clients/c2.jpg",
    "/clients/c4.jpg",
    "/clients/c5.png",
    "/clients/c6.webp",
    "/clients/c7.jpg",
    "/clients/c8.jpg",
    "/clients/c9.png",
    "/clients/c10.webp",
    "/clients/c11.jpg",
    "/clients/c12.png",
  ];

  const repeatedClients = [...clients, ...clients, ...clients];

  return (
    <div className="slider-bg py-10">
      <div className="slider">
        <div className="slide-track">
          {repeatedClients.map((src, index) => (
            <div className="slide" key={index}>
              <Image
                src={src}
                alt={`client-${index}`}
                width={120}
                height={120}
                className="slide-img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
