"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getMovieData } from "../_lib/cinema-service-data";
import { Movie } from "./Type";
import Image from "next/image";

interface PlaceCinema {
  row: number;
  place: number;
  price: number;
}

export default function BuyTicket() {
  const { movieId } = useParams<{ movieId: string }>();
  const movieIdInt = movieId ? parseInt(movieId, 10) : null;

  const [movie, setMovie] = useState<Movie[]>([]);
  const [selectedHour, setSelectedHour] = useState<string>("10:50");
  const [cinemaSeating, setCinemaSeating] = useState<
    Record<string, PlaceCinema | null>
  >({
    "10:50": null,
    "14:55": null,
    "19:40": null,
    "22:40": null,
    "23:00": null,
  });

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const data = await getMovieData(movieIdInt);
        if (data) {
          setMovie(data);
        }
        if (!data) {
          console.log("no movie");
        }
      } catch (err) {
        if (err instanceof Error) {
          console.error(err);
        }
      }
    }
    fetchMovieData();
  }, [movieIdInt]);

  const handleHourSelection = (hour: string) => {
    setSelectedHour(hour);
  };

  const handleSeatSelection = (row: number, col: number) => {
    setCinemaSeating((prev) => ({
      ...prev,
      [selectedHour]: { row, place: col, price: 25 }, // Price is fixed for now
    }));
  };

  const currentSelection = cinemaSeating[selectedHour];

  return (
    <div className="relative h-full">
      <div className="absolute inset-0 bg-witcher bg-cover bg-top"></div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative text-white">
        <div className="flex items-center justify-around pt-40 pb-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl">{movie[0]?.title}</h1>
            <h3 className="text-xl">Session start time at {selectedHour}</h3>
            <h3 className="text-xl text-gray-300">{movie[0]?.view}</h3>
          </div>
          <div className="flex flex-row gap-6 text-xl">
            {["10:50", "14:55", "19:40", "22:40", "23:00"].map((hour) => (
              <button
                key={hour}
                className={`py-2 px-4 ${
                  selectedHour === hour ? "bg-green-600" : "bg-transparent"
                } hover:bg-green-600 transition-all duration-200`}
                onClick={() => handleHourSelection(hour)}
              >
                {hour}
              </button>
            ))}
          </div>
        </div>

        <div className="px-12 py-12 bg-slate-900">
          <h1 className="text-2xl mb-4">Choose a place</h1>
          <div className="flex gap-16 mb-4">
            <div className="flex items-center gap-2">
              <h3>Row:</h3>
              <h2>{currentSelection?.row || "N/A"}</h2>
            </div>
            <div className="flex items-center gap-2">
              <h3>Placement:</h3>
              <h2>{currentSelection?.place || "N/A"}</h2>
            </div>
            <div className="flex items-center gap-2">
              <h3>Price:</h3>
              <h2>{currentSelection?.price || "N/A"}</h2>
            </div>
          </div>

          {/* Cinema Seating Grid */}
          <div className="px-4">
            <div className="grid grid-cols-5 gap-4 border border-green-500 p-4">
              {Array.from({ length: 5 }, (_, row) =>
                Array.from({ length: 5 }, (_, col) => (
                  <button
                    key={`${row}-${col}`}
                    className={`w-12 h-12 bg-gray-800 hover:bg-green-500 ${
                      currentSelection?.row === row + 1 &&
                      currentSelection?.place === col + 1
                        ? "bg-green-600"
                        : ""
                    }`}
                    onClick={() => handleSeatSelection(row + 1, col + 1)}
                  >
                    {row + 1}-{col + 1}
                  </button>
                ))
              )}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl mb-4">Choose a card</h2>
            <div className="flex gap-4">
              <Image
                src="/mastercard-svgrepo-com.svg"
                width={150}
                height={100}
                alt="Mastercard"
              />
              <Image
                src="/visa-svgrepo-com.svg"
                width={150}
                height={100}
                alt="Visa"
              />
            </div>
          </div>

          <button className="mt-4 flex items-center gap-2 bg-green-600 px-4 py-2 text-white">
            Buy Ticket
            <Image
              src="/cart-large-svgrepo-com.svg"
              height={28}
              width={28}
              alt="cart"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
