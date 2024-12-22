"use client";

import Image from "next/image";
import { useState } from "react";

function CarouselImage({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0); // Start with the first image as active

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const getVisibleImages = () => {
    const startIndex =
      currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
    const endIndex = (currentIndex + 1) % images.length;

    return [images[startIndex], images[currentIndex], images[endIndex]];
  };

  const visibleImages = getVisibleImages();

  return (
    <div className="flex flex-col items-center mb-12">
      <h4 className="text-green-400 text-xl tracking-wide mb-2">Recent</h4>
      <h1 className="text-4xl text-green-50 tracking-wider mb-8">Our films</h1>

      <div className="flex items-center relative w-full ">
        {/* Left Button */}

        {/* Carousel */}
        <div className="flex justify-center items-center space-x-4 overflow-hidden w-3/4 relative mx-auto">
          <button onClick={handlePrev} className="absolute left-2 z-10">
            <Image
              width={32}
              height={32}
              src="/left.png"
              alt="Left Arrow"
              className="transition-all duration-300 hover:scale-110"
            />
          </button>
          <div className="flex gap-12">
            {visibleImages.map((image, index) => {
              const isActive = index === 1; // Middle image in the visible range
              return (
                <div
                  key={image.cinemaId}
                  className={`relative w-80 h-72  ${
                    isActive
                      ? "scale-125 z-20 shadow-lg hover:shadow-2xl"
                      : "scale-90 opacity-70"
                  }`}
                >
                  <Image
                    src={image.src}
                    layout="fill"
                    className="object-cover bg-cover bg-center"
                    alt="movies image"
                  />
                </div>
              );
            })}{" "}
          </div>
          <button onClick={handleNext} className="absolute right-2 z-10">
            <Image
              width={32}
              height={32}
              src="/right.png"
              alt="Right Arrow"
              className="transition-all duration-300 hover:scale-110"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarouselImage;
