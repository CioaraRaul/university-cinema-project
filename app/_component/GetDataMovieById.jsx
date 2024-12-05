"use client";

import { useEffect, useState } from "react";
import { getMovieData } from "../_lib/cinema-service-data";

function GetDataMovieById({ id }) {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        console.log("Fetching movie with ID:", id); // Debugging: check if the ID is passed correctly
        const info_movie = await getMovieData(id).then((data) => data[0]);

        if (info_movie) {
          console.log("Fetched movie data:", info_movie); // Debugging: check the fetched movie data
          setMovie(info_movie);
        } else {
          console.log("No movie found for this ID:", id); // Debugging: No movie found
          setMovie(null);
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching movie:", err); // Debugging: log the error
      } finally {
        setLoading(false); // Always stop loading
      }
    };

    if (id) fetchMovie();
  }, [id]);

  // Display loading state if data is still being fetched
  if (loading) return <p>Loading...</p>;

  // Display error message if something went wrong
  if (error) return <p>Something went wrong: {error}</p>;

  // Display movie not found message
  if (!movie) return <p>This movie doesnt appear in the database</p>;

  // Render the movie details
  return (
    <div>
      <h1>The movie with id: {movie.cinemaId} </h1>
      <h1>{movie.title}</h1>
      <h2>{movie.genre}</h2>
      <h3>{movie.duration} mins</h3>
      <h4>Rating: {movie.rating}</h4>
      <img src={movie.image} alt={movie.title} />
      <p>
        Trailer: <a href={movie.trailer}>Watch Trailer</a>
      </p>
      <p>{movie.description}</p>
      <p>Release Date: {movie.releaseDate}</p>
    </div>
  );
}

export default GetDataMovieById;
