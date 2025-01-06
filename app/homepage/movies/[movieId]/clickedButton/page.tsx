"use client";
import GetDataMovieButton from "@/app/_component/GetDataMovieButton";
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
    <div>
      <GetDataMovieButton buttonIndex={cinemaId} />
    </div>
  );
}
