"use client";

import React from "react";
import cinemaSecondImage from "@/public/cinemaSecondImage.jpg";
import CarouselImage from "@/app/_component/CarouselImage";
import backgroundHome from "@/public/backgroundHome.jpg";
import loginBackground from "@/public/loginBackground.jpg";
import SearchBar from "@/app/_component/SearchBar";

const images = [
  { cinemaId: 1, src: cinemaSecondImage },
  { cinemaId: 2, src: backgroundHome },
  { cinemaId: 3, src: loginBackground },
];
export default function Page() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
