"use client";

import React, { useEffect, useState } from "react";
import { deleteMovie, getMovieData } from "../_lib/cinema-service-data";
import { Movie } from "./Type";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  id: number;
}

export default function DeleteMovieId({ id }: Props) {
  const [movieById, setMovieById] = useState<Movie[]>([]);
  const route = useRouter();

  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");

  useEffect(() => {
    async function fetchNameMovie() {
      try {
        const data = await getMovieData(id);
        if (data) {
          setMovieById(data);
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    }
    fetchNameMovie();
  }, [id]);

  const cancelButton = () => {
    console.log("cancel");
    route.push(`./?userId=${userId}`);
  };

  const deleteButton = async () => {
    alert(`You delete movie ${movieById[0]?.title}`);
    try {
      const deletedMovie = await deleteMovie(id);
      alert(`Successfully deleted movie: ${movieById[0]?.title}`);
      setTimeout(() => {
        route.push(`../?userId=${userId}`);
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-green-100 w-2/4 h-[35vh] shadow-lg rounded-md flex flex-col items-center justify-around ">
      <div className="mb-2">
        <svg
          fill="red"
          height="48px"
          width="48px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 457.50 457.50"
          xmlSpace="preserve"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="20.130132"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M381.575,57.067h-90.231C288.404,25.111,261.461,0,228.752,0C196.043,0,169.1,25.111,166.16,57.067H75.929 c-26.667,0-48.362,21.695-48.362,48.362c0,26.018,20.655,47.292,46.427,48.313v246.694c0,31.467,25.6,57.067,57.067,57.067 h195.381c31.467,0,57.067-25.6,57.067-57.067V153.741c25.772-1.02,46.427-22.294,46.427-48.313 C429.936,78.761,408.242,57.067,381.575,57.067z M165.841,376.817c0,8.013-6.496,14.509-14.508,14.509 c-8.013,0-14.508-6.496-14.508-14.509V186.113c0-8.013,6.496-14.508,14.508-14.508c8.013,0,14.508,6.496,14.508,14.508V376.817z M243.26,376.817c0,8.013-6.496,14.509-14.508,14.509c-8.013,0-14.508-6.496-14.508-14.509V186.113 c0-8.013,6.496-14.508,14.508-14.508c8.013,0,14.508,6.496,14.508,14.508V376.817z M320.679,376.817 c0,8.013-6.496,14.509-14.508,14.509c-8.013,0-14.509-6.496-14.509-14.509V186.113c0-8.013,6.496-14.508,14.509-14.508 s14.508,6.496,14.508,14.508V376.817z"></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </div>
      <div className="w-2/3">
        <h1 className="text-2xl tracking-wide py-1">
          You are about the delete the movie: {movieById[0]?.title}
        </h1>
        <p className="text-lg">
          Once you delete it, it will disapear from the list
        </p>
        <p className="text-xl">Are you sure?</p>
      </div>
      <div className="flex self-end gap-4 pr-4">
        <button
          className="text-xl hover:bg-green-200 py-3 px-4 hover:rounded-md"
          onClick={cancelButton}
        >
          Cancel
        </button>
        <button
          className="text-xl hover:bg-red-200 py-3 px-4 hover:rounded-md"
          onClick={deleteButton}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
