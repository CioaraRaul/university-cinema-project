"use client";
import { MyList } from "@/app/_component/Type";
import { getMovies } from "@/app/_lib/cinema-service-data";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");
  const [myList, setMylist] = useState<MyList[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getMovies();
        if (data.length > 0) {
          const correctData = data.filter((movie) => {
            if (movie.myListAdd) {
              return movie;
            }
          });
          setMylist(correctData);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error(error);
        }
      }
    }
    fetchMovies();
  }, []);

  return (
    <div className="relative h-full">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            filter: "blur(8px)",
            backgroundImage: "url(/backgroundHome.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </div>

      <div
        className={`relative z-10 ${
          myList && myList.length > 5 ? "h-auto overflow-hidden" : "h-[100vh]"
        }`}
      >
        <div>
          <Link href={`../homepage?userId=${userId}`}>
            <h1 className="text-3xl text-gray-100 font-bold py-4 px-6 bg-green-800 text-center ">
              FilmFussion
            </h1>
          </Link>
        </div>
        <div>
          <h2 className="text-gray-100 text-3xl tracking-wider m-10 underline decoration-green-700 decoration-2 underline-offset-4">
            My list
          </h2>
          <div className="grid grid-cols-5 gap-y-12 p-10 py-4">
            {myList.length > 0 &&
              myList.map((movie) => (
                <div key={movie.cinemaId}>
                  <div
                    style={{ position: "relative", width: 200, height: 300 }}
                  >
                    <Image
                      src={movie.image}
                      alt="movie"
                      layout="fill"
                      objectFit="cover"
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.25)",
                        zIndex: 1,
                      }}
                    ></div>
                    <h3
                      className="absolute py-1 px-4 bg-green-500 rounded-3xl left-1/2 text-gray-100 z-10"
                      style={{
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {movie.rating}
                    </h3>
                  </div>
                  <div className="relative mt-6">
                    <h3 className="text-gray-100 tracking-wide text-lg">
                      {movie.title}
                    </h3>
                    <h6 className="text-gray-300 mt-1">{movie.genre}</h6>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
