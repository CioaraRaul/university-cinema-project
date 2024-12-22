"use client";

import React from "react";
import cinemaSecondImage from "@/public/cinemaSecondImage.jpg";
import CarouselImage from "@/app/_component/CarouselImage";
import backgroundHome from "@/public/backgroundHome.jpg";
import loginBackground from "@/public/loginBackground.jpg";

const images = [
  { cinemaId: 1, src: cinemaSecondImage },
  { cinemaId: 2, src: backgroundHome },
  { cinemaId: 3, src: loginBackground },
];
export default function Page() {
  return (
    <div>
      <CarouselImage images={images}></CarouselImage>
    </div>
  );
}
