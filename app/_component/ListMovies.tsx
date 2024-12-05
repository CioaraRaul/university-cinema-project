"use client";

import { useEffect, useState } from "react";
import { getMovies } from "../_lib/cinema-service-data";
import { Movie } from "../_component/Type";

export default function Page() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getMovies();
        console.log("Info from data" + data);

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

  return (
    <div>
      <h1>COMPONENT USED JUST FOR TESTING FROM DATABASE!!!!!!</h1>
      {error ? <h1>{error}</h1> : null}{" "}
      {movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.cinemaId}>
              {movie.title} - {movie.cinemaId}
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies available</p>
      )}
    </div>
  );
}
