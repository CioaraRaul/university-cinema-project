"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getMovies } from "../_lib/cinema-service-data";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const getUser = searchParams.get("userId");

  const userId = parseInt(getUser, 10);
  const route = useRouter();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query.trim() !== "") {
        searchMovies(query);
      } else {
        setMovies([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const searchMovies = async (searchQuery) => {
    setIsLoading(true);
    try {
      const allMovies = await getMovies();

      const filteredMovies = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setMovies(filteredMovies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const goToMovie = (id) => {
    console.log(id);
    route.push(`http://localhost:3001/homepage/movies/${id}?userId=${userId}`);
  };

  return (
    <div className="relative z-[1000] w-full max-w-md mx-auto">
      {/* Search Input */}
      <div className="flex align-middle relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className="border border-gray-300 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button
          onClick={() => searchMovies(query)}
          className="bg-gray-50 border-0 rounded-r-lg px-4 py-2 hover:bg-gray-200"
        >
          <Image
            src="/icons8-search.svg"
            width={24}
            height={24}
            alt="Search Icon"
          />
        </button>
      </div>

      {/* Dropdown for Movie Results */}
      {query && movies.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-[1010] max-h-96 overflow-y-auto mt-2">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="flex items-center gap-4 p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => goToMovie(movie.cinemaId)} // Handle movie selection
            >
              <Image
                src={movie.image}
                width={50}
                height={50}
                alt={movie.title}
                className="rounded"
              />
              <span>{movie.title}</span>
            </div>
          ))}
        </div>
      )}

      {/* Loader */}
      {isLoading && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg p-4 text-center mt-2 z-[1010]">
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
}
