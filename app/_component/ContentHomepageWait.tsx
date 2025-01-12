"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { StyledHomeDiv, StyledHomepageH3 } from "./StyledComponents";
import { Movie } from "./Type";
import { ChangeMovieData } from "../_lib/cinema-service-data";

interface ContentHomepageWaitProps {
  movies: Movie[] | Promise<Movie[]>; // Handle both cases (array or async data)
  joker: Movie | undefined;
}

export default function ContentHomepageWait({
  movies,
  joker,
}: ContentHomepageWaitProps) {
  const [twoMovies, setTwoMovies] = useState<Movie[]>([]);
  const [update, setUpdate] = useState<Movie | undefined>(joker);

  useEffect(() => {
    console.log(update);
  }, [update]);

  useEffect(() => {
    async function takeMovies() {
      try {
        const data = Array.isArray(movies) ? movies : await movies; // Handle both sync and async
        const firstTwoMovies = data.slice(0, 2);
        setTwoMovies(firstTwoMovies);
      } catch (error) {
        console.error("Failed to load movies:", error);
      }
    }

    takeMovies();
  }, [movies]);

  const myUnlistButton = async (cinemaId: number | undefined) => {
    if (!cinemaId) {
      console.error("Cinema ID is undefined");
      return;
    }

    const updated = await ChangeMovieData({
      cinemaId,
      myListAdd: false,
    });

    if (updated) {
      // Update local joker state
      setUpdate((prev) => (prev ? { ...prev, myListAdd: false } : undefined));
      console.log("Update Result:", updated);
      window.location.reload();
    }
  };

  const myUnlistButtonSecond = async (cinemaId: number) => {
    console.log(cinemaId);

    const { data, success } = await ChangeMovieData({
      cinemaId,
      myListAdd: false,
    });
    if (success) {
      // Update the specific movie in `twoMovies`
      setTwoMovies((prev) =>
        prev.map((movie) =>
          movie.cinemaId === cinemaId ? { ...movie, myListAdd: false } : movie
        )
      );
    }
  };
  const myListButtonSecond = async (cinemaId: number) => {
    console.log(cinemaId);

    const { data, success } = await ChangeMovieData({
      cinemaId,
      myListAdd: true,
    });
    if (success) {
      // Update the specific movie in `twoMovies`
      setTwoMovies((prev) =>
        prev.map((movie) =>
          movie.cinemaId === cinemaId ? { ...movie, myListAdd: true } : movie
        )
      );
    }
  };
  const myListButton = async (cinemaId: number | undefined) => {
    if (!cinemaId) {
      console.error("Cinema ID is undefined");
      return;
    }

    const { data, success } = await ChangeMovieData({
      cinemaId,
      myListAdd: true,
    });
    console.log(success);
    if (success) {
      // Update local joker state

      setUpdate((prev) => (prev ? { ...prev, myListAdd: true } : undefined));
      console.log("Update Result:", data);
      window.location.reload();
    }
  };

  return (
    <div className="relative z-10 flex justify-center items-center flex-grow">
      <div className="w-5/6 px-14">
        <div>
          <h1 className="text-white text-4xl">{joker?.title || "No Title"}</h1>
        </div>
        <div className="flex gap-12">
          <StyledHomeDiv>
            <Image
              src="/star.png"
              alt="star"
              width={32}
              height={32}
              style={{
                filter: "invert(1) sepia(1) saturate(1000%) hue-rotate(100deg)",
              }}
            />
            <StyledHomepageH3>IMDB: {joker?.rating || "N/A"}</StyledHomepageH3>
          </StyledHomeDiv>
          <StyledHomeDiv>
            <Image
              src="/clock.png"
              alt="clock"
              width={32}
              height={32}
              style={{
                filter: "invert(1) sepia(1) saturate(1000%) hue-rotate(100deg)",
              }}
            />
            <StyledHomepageH3>
              Duration: {joker?.duration || "N/A"} min
            </StyledHomepageH3>
          </StyledHomeDiv>
          <StyledHomeDiv>
            <Image
              src="/calendar.png"
              alt="calendar"
              width={32}
              height={32}
              style={{
                filter: "invert(1) sepia(1) saturate(1000%) hue-rotate(100deg)",
              }}
            />
            <StyledHomepageH3>
              Release Date: {joker?.releaseDate || "Unknown"}
            </StyledHomepageH3>
          </StyledHomeDiv>
        </div>
        <div>
          <p className="text-gray-200 text-lg font-medium">
            {joker?.description || "No description available."}
          </p>
        </div>
        <div className="flex items-center justify-start gap-6 mt-6">
          <Link
            className="transition-all duration-300 text-black bg-white py-4 px-6 rounded-xl hover:cursor-pointer hover:scale-105"
            href="/"
          >
            Show more
          </Link>
          {joker?.myListAdd && (
            <button
              className="transition-all duration-300 bg-green-400 py-4 px-6 rounded-xl text-black flex items-center justify-center gap-2 hover:cursor-pointer hover:scale-105"
              onClick={() => myUnlistButton(joker?.cinemaId)}
            >
              <span>
                <Image
                  src="/plus-symbol-button.png"
                  width={12}
                  height={12}
                  alt="plus button"
                />
              </span>
              <p>Unlist</p>
            </button>
          )}
          {!joker?.myListAdd && (
            <button
              className="transition-all duration-300 bg-green-400 py-4 px-6 rounded-xl text-black flex items-center justify-center gap-2 hover:cursor-pointer hover:scale-105"
              onClick={() => myListButton(joker?.cinemaId)}
            >
              <span>
                <Image
                  src="/plus-symbol-button.png"
                  width={12}
                  height={12}
                  alt="plus button"
                />
              </span>
              <p>Add to list</p>
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-12 items-center justify-center">
        {twoMovies.length > 0 &&
          twoMovies.map((movie, index) => (
            <div key={index}>
              <div className="flex items-center relative gap-4">
                <div
                  className="h-60 w-40 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url(${
                      movie.image || "/placeholder.png"
                    })`,
                  }}
                ></div>
                <div className="w-3/4 flex flex-col justify-start items-start gap-3">
                  <h1 className="text-white text-3xl">{movie.title}</h1>
                  <p className="text-gray-200 text-base w-3/4">
                    {movie.description || "No description available."}
                  </p>
                  <div className="flex items-center gap-6">
                    <Link
                      className="transition-all duration-300 text-black bg-white py-3 px-3 text-sm rounded-xl hover:cursor-pointer hover:scale-105"
                      href="/"
                    >
                      Show more
                    </Link>
                    {!movie.myListAdd && (
                      <button
                        className="transition-all duration-300 bg-green-400 py-3 px-3 text-sm rounded-xl text-black flex items-center justify-center gap-2 hover:cursor-pointer hover:scale-105"
                        onClick={() => myListButtonSecond(movie?.cinemaId)}
                      >
                        <span>
                          <Image
                            src="/plus-symbol-button.png"
                            width={12}
                            height={12}
                            alt="plus button"
                            style={{
                              filter:
                                "invert(1) sepia(1) saturate(1000%) hue-rotate(100deg)",
                            }}
                          />
                        </span>
                        Add to list
                      </button>
                    )}
                    {movie.myListAdd && (
                      <button
                        className="transition-all duration-300 bg-green-400 py-3 px-3 text-sm rounded-xl text-black flex items-center justify-center gap-2 hover:cursor-pointer hover:scale-105"
                        onClick={() => myUnlistButtonSecond(movie?.cinemaId)}
                      >
                        <span>
                          <Image
                            src="/plus-symbol-button.png"
                            width={12}
                            height={12}
                            alt="plus button"
                            style={{
                              filter:
                                "invert(1) sepia(1) saturate(1000%) hue-rotate(100deg)",
                            }}
                          />
                        </span>
                        Unlist
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
