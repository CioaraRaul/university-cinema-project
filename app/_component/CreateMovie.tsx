"use client";

import React, { useRef, useState } from "react";
import { Movie } from "../_component/Type";
import { supabase } from "../_lib/supabaseClient";

export default function CreateMovieForm() {
  const inputRefCinemaId = useRef<HTMLInputElement>(null);
  const inputRefTitle = useRef<HTMLInputElement>(null);
  const inputRefGenre = useRef<HTMLInputElement>(null);
  const inputRefDuration = useRef<HTMLInputElement>(null);
  const inputRefRating = useRef<HTMLInputElement>(null);
  const inputRefImage = useRef<HTMLInputElement>(null);
  const inputRefTrailer = useRef<HTMLInputElement>(null);
  const inputRefDescription = useRef<HTMLTextAreaElement>(null);
  const inputRefReleaseDate = useRef<HTMLInputElement>(null);

  const [movie, setMovie] = useState<Movie>({
    cinemaId: 0,
    title: "",
    genre: "",
    duration: 0,
    rating: 0,
    image: "",
    trailer: "",
    description: "",
    releaseDate: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newMovie: Movie = {
      cinemaId: inputRefCinemaId.current?.value
        ? parseInt(inputRefCinemaId.current?.value)
        : 0,
      title: inputRefTitle.current?.value || "",
      genre: inputRefGenre.current?.value || "",
      duration: inputRefDuration.current?.value
        ? parseFloat(inputRefDuration.current?.value)
        : 0,
      rating: inputRefRating.current?.value
        ? parseFloat(inputRefRating.current?.value)
        : 0,
      image: inputRefImage.current?.value || "",
      trailer: inputRefTrailer.current?.value || "",
      description: inputRefDescription.current?.value || "",
      releaseDate: inputRefReleaseDate.current?.value || "",
    };

    setMovie(newMovie);

    // const response = await fetch("/_lib/post-api/addMovie", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(movie),
    // });

    await supabase.from("Movies").insert(newMovie).single();

    // if (response.ok) {
    //   const result = await response.json();
    //   console.log("Movie created", result);
    // } else {
    //   console.error("Error creating movie");
    // }
  }

  return (
    <div>
      <h1>Create a New Movie</h1>

      <form onSubmit={handleSubmit}>
        <input type="number" ref={inputRefCinemaId} placeholder="Cinema ID" />
        <input type="text" ref={inputRefTitle} placeholder="Movie Title" />
        <input type="text" ref={inputRefGenre} placeholder="Genre" />
        <input type="number" ref={inputRefDuration} placeholder="Duration" />
        <input type="number" ref={inputRefRating} placeholder="Rating (1-10)" />
        <input type="text" ref={inputRefImage} placeholder="Image URL" />
        <input type="text" ref={inputRefTrailer} placeholder="Trailer URL" />
        <textarea ref={inputRefDescription} placeholder="Movie Description" />
        <input type="date" ref={inputRefReleaseDate} />
        <button type="submit">Create Movie</button>
      </form>

      <div>
        <h3>Movie Data: </h3>
        <pre>{JSON.stringify(movie, null, 2)}</pre>
      </div>
    </div>
  );
}
