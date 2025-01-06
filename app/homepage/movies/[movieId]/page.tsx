import MovieById from "@/app/_component/movieById";
import React from "react";

interface Params {
  params: {
    movieId: string;
  };
}

export default async function page({ params }: Params) {
  const { movieId } = await params;
  const movieIdInt = parseInt(movieId, 10);
  console.log(typeof movieIdInt);

  return <MovieById movieIdInt={movieIdInt} />;
}
