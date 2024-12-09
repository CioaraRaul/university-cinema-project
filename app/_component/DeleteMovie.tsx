"use client";

import React, { useEffect, useState } from "react";
import { getMovies, deleteMovie } from "../_lib/cinema-service-data";
import { Movie } from "../_component/Type";

export default function Page() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("running");
    async function fetchMovies() {
      try {
        const data = await getMovies();
        setMovies(data);
        console.log(data);
      } catch (err) {
        if (err instanceof Error) {
          console.error("Unexpected error:", err); // Log unexpected errors
        }
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  if (loading) return <div>Loading movies...</div>; // Show loading message
  if (error) return <div>Error: {error}</div>;

  async function handleDelete(id: number) {
    try {
      const deletedMovie = await deleteMovie(id);
      console.log("Movie deleted: " + deletedMovie);

      setMovies((prevMovies) =>
        prevMovies.filter((prevMovie) => prevMovie.cinemaId !== id)
      );
    } catch (err) {
      console.error("Error deleting movie:", err);
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  }

  return (
    <div>
      <h1>Movies</h1>
      {movies && movies.length > 0 ? (
        <ul>
          {movies.map((movie, index) => (
            <li key={movie.cinemaId || index}>
              {movie.cinemaId}
              <button onClick={() => handleDelete(movie.cinemaId)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div>No movies found.</div>
      )}
    </div>
  );
}
