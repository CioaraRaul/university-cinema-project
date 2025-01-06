"use client";

import React, { useState } from "react";
import GetDataMovieById from "./GetDataMovieById";
import dynamic from "next/dynamic";

const GetDataMovieButton = dynamic(() => import("./GetDataMovieButton"), {
  ssr: false, // Disable server-side rendering for this component
});

interface Props {
  movieIdInt: number;
}

export default function MovieById({ movieIdInt }: Props) {
  const [clickButtonIndex, setClickButtonIndex] = useState<number | null>(null);

  const handleButtonClick = (buttonIndex: number | null) => {
    console.log("Button clicked:", buttonIndex);
    setClickButtonIndex(buttonIndex);
  };

  return (
    <div className="h-[100vh] w-dvw flex justify-center items-center relative overflow-hidden flex-col">
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-witcher bg-cover bg-center z-0"
        style={{ filter: "blur(10px)", transform: "scale(1.1)" }}
      ></div>
      {/* Content */}
      <div className="relative flex items-center justify-center h-[100vh] w-full z-10">
        <GetDataMovieById id={movieIdInt} onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}
