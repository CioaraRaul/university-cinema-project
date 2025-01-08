"use client";
import DeleteMovieId from "@/app/_component/DeleteMovieId";
import { useParams } from "next/navigation";
import React from "react";

export default function Page() {
  const params = useParams();
  const stringCinemaId = params.movieId;

  if (!stringCinemaId || Array.isArray(stringCinemaId)) {
    return <div>Error: Invalid or missing cinemaId</div>;
  }
  const cinemaId = parseInt(stringCinemaId, 10);

  return (
    <div className="relative h-[100vh]">
      <div className="absolute inset-0 bg-slate-700 h-[100vh] opacity-90 "></div>
      <div className="relative z-10 flex justify-center items-center h-[100vh]">
        <DeleteMovieId id={cinemaId} />
      </div>
    </div>
  );
}
