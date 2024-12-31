"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Movie } from "./Type";
import { getMovies } from "../_lib/cinema-service-data";

function CarouselImage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getMovies(); // Assume this fetches movies with image URLs
        console.log("Info from Supabase:", data);

        if (Array.isArray(data) && data.length > 0) {
          setMovies(data);
        } else {
          setError("No movies found.");
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      }
    }
    fetchMovies();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  const getVisibleMovies = () => {
    const startIndex =
      currentIndex - 1 < 0 ? movies.length - 1 : currentIndex - 1;
    const endIndex = (currentIndex + 1) % movies.length;

    return [movies[startIndex], movies[currentIndex], movies[endIndex]];
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!movies.length) {
    return <div className="text-white">Loading...</div>;
  }

  const visibleMovies = getVisibleMovies();

  return (
    <div className="flex flex-col items-center mb-12">
      <h4 className="text-green-400 text-xl tracking-wide mb-2">Recent</h4>
      <h1 className="text-4xl text-green-50 tracking-wider mb-8">Our films</h1>

      <div className="flex items-center relative w-full">
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
            {visibleMovies.map((movie, index) => {
              const isActive = index === 1; // Middle movie in the visible range
              return (
                <div
                  key={movie.cinemaId}
                  className={`relative w-80 h-72 ${
                    isActive
                      ? "scale-90 z-20 shadow-lg hover:shadow-2xl"
                      : "scale-75 opacity-70"
                  }`}
                >
                  <Image
                    src={movie.image} // Replace with the correct field for your movie poster
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    alt={movie.title || "Movie Image"}
                  />
                </div>
              );
            })}
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
