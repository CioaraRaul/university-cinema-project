"use client";

import { useEffect, useState } from "react";
import { getMovieData } from "../_lib/cinema-service-data";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

// Define types for props and movie data
interface Props {
  id: number;
  onButtonClick: (buttonIndex: number | null) => void;
}

interface Movie {
  cinemaId: string;
  title: string;
  genre: string;
  duration: number;
  rating: number;
  image: string;
  trailer: string;
  description: string;
  releaseDate: string;
  ageMinimumReq: number;
}

function GetDataMovieById({ id, onButtonClick }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const route = useRouter();

  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const info_movie = await getMovieData(id).then((data) =>
          data ? data[0] : null
        );

        if (info_movie) {
          console.log("Fetched movie data:", info_movie);
          setMovie(info_movie);
        } else {
          console.log("No movie found for this ID:", id);
          setMovie(null);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message || "An error occurred");
          console.error("Error fetching movie:", err);
        }
      } finally {
        setLoading(false); // Always stop loading
      }
    };

    if (id) fetchMovie();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong: {error}</p>;

  if (!movie) return <p>This movie doesnt appear in the database</p>;

  const buttonClicked = (
    numberButton: number | null,
    path: string | undefined
  ) => {
    onButtonClick(numberButton);
    route.push(`${id}/${path}/?userId=${userId}`);
  };
  const goBack = () => {
    route.push(`./?userId=${userId}`);
  };

  return (
    <div className="relative h-2/3 w-3/4 flex items-center justify-center gap-6">
      <div className="relative h-full w-4/12">
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10 rounded-md"></div>
        <Image
          src={movie.image}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-md"
          alt={movie.title}
        />
      </div>

      <div className="relative h-full w-6/12 flex flex-col justify-center gap-3">
        <h1 className="text-white text-3xl tracking-wide">{movie.title}</h1>
        <h2 className="text-gray-100 text-xl">{movie.genre}</h2>
        <div className="flex items-center gap-2">
          <Image
            src={"/imdb-icon.png"}
            width={26}
            height={26}
            alt="imdb logo"
          />
          <h3 className="text-gray-100 text-xl">{movie.rating}/10</h3>
        </div>
        <div className="py-2 w-full border-t-2 border-green-400"></div>
        <div className="flex items-center gap-4">
          <h3 className="text-gray-100 text-xl">{movie.releaseDate}</h3>
          <h3 className="text-gray-100 text-xl">{movie.duration} mins</h3>
          <div className="flex items-center gap-2">
            <Image
              src={"/full-hd-icon.png"}
              width={26}
              height={26}
              alt="full hd logo"
            />
            <h3 className="text-gray-100 text-xl">Available</h3>
          </div>
        </div>
        <p className="text-gray-100 text-lg">{movie.description}</p>
        <p className="text-gray-100 text-lg">
          Age required: {movie.ageMinimumReq}
        </p>
      </div>
      <div className="relative h-full w-2/12 flex flex-col gap-6 items-center justify-center">
        <button
          className=" text-gray-50 text-xl px-10 py-4 bg-green-600 rounded-lg transition-all duration-300
          hover:scale-105"
          onClick={() => buttonClicked(0)}
        >
          Buy ticket
        </button>
        <button
          className=" text-gray-50 text-xl px-6 py-4 bg-green-600 rounded-lg transition-all duration-300
          hover:scale-105"
          onClick={() => buttonClicked(1)}
        >
          Add to my list
        </button>
        <Link
          href={`${movie.cinemaId}/clickedButton?userId=${userId}`}
          className=" text-gray-50 text-xl px-6 py-4 bg-green-600 rounded-lg transition-all duration-300
          hover:scale-105"
        >
          Delete movie
        </Link>
        <button
          className=" text-gray-50 text-xl px-12 py-4 bg-green-600 rounded-lg transition-all duration-300
          hover:scale-105"
          onClick={() => buttonClicked(3, "review")}
        >
          Review
        </button>
        <button
          className=" text-gray-50 text-xl px-14 py-4 bg-green-600 rounded-lg transition-all duration-300
          hover:scale-105"
          onClick={() => buttonClicked(null)}
        >
          Clear
        </button>
        <button
          className=" text-gray-50 text-xl px-14 py-4 bg-green-600 rounded-lg transition-all duration-300
          hover:scale-105"
          onClick={goBack}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default GetDataMovieById;
