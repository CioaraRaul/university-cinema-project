"use client";

import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { createMovie } from "@/app/_lib/movie";

export default function CreateMovie() {
  const titleMovieRef = useRef<HTMLInputElement>();
  const durationMovieRef = useRef<HTMLInputElement>();
  const genreMovieRef = useRef<HTMLInputElement>();
  const ratingMovieRef = useRef<HTMLInputElement>();
  const imageRef = useRef<HTMLInputElement>();
  const releaseDateRef = useRef<HTMLInputElement>();
  const descriptionRef = useRef<HTMLInputElement>();
  const ageMinimumRef = useRef<HTMLInputElement>();

  const route = useRouter();

  const goToHomepage = () => {
    route.push("/homepage");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const movieData = {
      title: titleMovieRef.current?.value ?? "",
      genre: genreMovieRef.current?.value ?? "",
      duration: parseInt(durationMovieRef.current?.value || "0", 10),
      rating: parseFloat(ratingMovieRef.current?.value || "0"),
      image: imageRef.current?.value ?? "",
      releaseDate: releaseDateRef.current?.value ?? "",
      description: descriptionRef.current?.value ?? "",
      ageMinimum: parseInt(ageMinimumRef.current?.value || "0", 10),
    };

    if (
      !movieData.title ||
      !movieData.genre ||
      !movieData.duration ||
      !movieData.rating
    ) {
      alert("Please fill out all required fields.");
      return;
    }
    createMovie(
      movieData.title,
      movieData.genre,
      movieData.duration,
      movieData.rating,
      movieData.image,
      movieData.description,
      movieData.releaseDate,
      movieData.ageMinimum
    )
      .then(() => route.push("/homepage"))
      .catch((err) => console.error("Error creating movie:", err));
  };

  return (
    <div className="bg-slate-700 w-3/4 h-3/4 px-12 py-12 flex flex-col justify-evenly ">
      <div className="flex gap-2 items-center transition-all duration-300  hover:scale-y-110">
        <div>
          <svg
            fill="#ffffff"
            height="20px"
            width="20px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xmlSpace="preserve"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                id="XMLID_92_"
                d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"
              ></path>
            </g>
          </svg>
        </div>
        <button className="text-2xl text-green-400 " onClick={goToHomepage}>
          Go Back
        </button>
      </div>

      <div>
        <h1 className="text-3xl text-green-50">Create Your Own Movie</h1>
      </div>

      <div>
        <form className="flex flex-col gap-4">
          <div className="flex justify-around">
            <div className="flex items-center">
              <div className="w-36">
                <label className="text-xl text-green-50" htmlFor="title">
                  Title:{" "}
                </label>
              </div>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Movie Title"
                className="border-none py-1 px-2 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-green-500 hover:outline-none w-64 text-gray-900"
                ref={titleMovieRef}
              />
            </div>
            <div className="flex items-center">
              <div className="w-36">
                <label htmlFor="genre" className="text-xl text-green-50">
                  Genre:{" "}
                </label>
              </div>
              <input
                type="text"
                id="genre"
                name="genre"
                placeholder="Movie Genre"
                className="border-none py-1 px-2 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-green-500 hover:outline-none w-64 text-gray-900"
                ref={genreMovieRef}
              />
            </div>
          </div>
          <div className="flex justify-around">
            <div className="flex items-center">
              <div className="w-36">
                <label htmlFor="duration" className="text-xl text-green-50">
                  Duration:{" "}
                </label>
              </div>
              <input
                type="number"
                id="duration"
                name="duration"
                placeholder="Duration(minutes)"
                className="border-none py-1 px-2 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-green-500 hover:outline-none w-64 text-gray-900"
                ref={durationMovieRef}
              />
            </div>
            <div className="flex items-center">
              <div className="w-36">
                <label htmlFor="rating" className="text-xl text-green-50">
                  Rating:{" "}
                </label>
              </div>
              <input
                type="number"
                id="rating"
                name="rating"
                placeholder="Rating"
                className="border-none py-1 px-2 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-green-500 hover:outline-none w-64 text-gray-900"
                ref={ratingMovieRef}
              />
            </div>
          </div>
          <div className="flex justify-around">
            <div className="flex items-center">
              <div className="w-36">
                <label htmlFor="image" className="text-xl text-green-50">
                  Image:{" "}
                </label>
              </div>
              <input
                type="text"
                id="image"
                name="image"
                placeholder="Image(minutes)"
                className="border-none py-1 px-2 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-green-500 hover:outline-none w-64 text-gray-900"
                ref={imageRef}
              />
            </div>
            <div className="flex items-center">
              <div className="w-36">
                <label htmlFor="date" className="text-xl text-green-50">
                  Release Date:{" "}
                </label>
              </div>
              <input
                type="date"
                id="date"
                name="date"
                className="border-none py-1 px-2 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-green-500 hover:outline-none w-64 text-gray-900"
                ref={releaseDateRef}
              />
            </div>
          </div>
          <div className="flex justify-around">
            <div className="flex items-center">
              <div className="w-36">
                <label htmlFor="description" className="text-xl text-green-50">
                  Description:{" "}
                </label>
              </div>{" "}
              <textarea
                id="description"
                name="description"
                placeholder="Write a short description of the movie..."
                className="border-none py-1 px-2 rounded-lg mb-2
                focus:outline-none focus:ring-2 focus:ring-green-500
                hover:outline-none w-64 text-gray-900"
                ref={descriptionRef}
              />
            </div>{" "}
            <div className="flex items-center">
              <div className="w-36">
                <label htmlFor="age_minimum" className="text-xl text-green-50">
                  Age minimum:{" "}
                </label>
              </div>
              <input
                type="number"
                id="age_minimum"
                name="age_minimum"
                placeholder="Age minimum"
                className="border-none py-1 px-2 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-green-500 hover:outline-none w-64 text-gray-900"
                ref={ageMinimumRef}
              />
            </div>
          </div>
        </form>
      </div>

      <div>
        <button
          onClick={handleSubmit}
          className="text-xl text-green-400 transition-all duration-300 hover:scale-105"
        >
          Create Now
        </button>
      </div>
    </div>
  );
}
