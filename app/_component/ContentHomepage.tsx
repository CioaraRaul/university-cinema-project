"use client";

import { Suspense, useEffect, useState } from "react";
import { getMovies } from "../_lib/cinema-service-data";
import { Movie } from "@/app/_component/Type";
import ContentHomepageWait from "./ContentHomepageWait";
import ContentHomepageLoadingData from "./ContentHomepageLoadingData";

interface Props {
  id: number;
}

function ContentHomepage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [jokerData, setJokerData] = useState<Movie>();

  useEffect(() => {
    async function fetchMovies() {
      const moviesData = await getMovies();

      if (!Array.isArray(moviesData)) {
        console.error("Invalid movies data format");
        return;
      }

      setMovies(moviesData);
    }

    fetchMovies();
  }, []);

  useEffect(() => {
    async function Joker() {
      // Use find to locate the movie by its image
      const joker = movies.find((movie) => {
        return (
          movie.image ===
          "https://images7.alphacoders.com/135/thumb-1920-1358613.jpeg"
        );
      });

      setJokerData(joker);
    }
    Joker();
  }, [movies]);

  return (
    <Suspense fallback={<ContentHomepageLoadingData />}>
      <ContentHomepageWait movies={movies} joker={jokerData} />
    </Suspense>
  );
}

export default ContentHomepage;
