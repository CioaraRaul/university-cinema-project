"use client";

import { StyledMovieH3 } from "@/app/_component/StyledComponents";
import { Movie } from "@/app/_component/Type";
import { getMovies } from "@/app/_lib/cinema-service-data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Movies() {
  const route = useRouter();

  const [activeSection, setActiveSection] = useState<string>("");
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [newRealaseMovies, setNewRealeaseMovies] = useState<Movie[]>([]);
  const [highestRated, setHighestRated] = useState<Movie[]>([]);
  const [comingSoonMovies, setComingSoonMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  const yearDate = new Date().getFullYear();
  const monthDate = String(new Date().getMonth() + 1).padStart(2, "0");
  const dayDate = String(new Date().getDate()).padStart(2, "0");
  const currentDate = `${yearDate}-${monthDate}-${dayDate}`;

  useEffect(() => {
    async function fetchMoveis() {
      try {
        const data = await getMovies();

        if (data.length > 0) {
          setAllMovies(data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchMoveis();
  }, []);

  useEffect(() => {
    const newReleases: Movie[] = allMovies.filter((movie) => {
      const releaseDate = new Date(movie.releaseDate); // Convert to Date object
      const currentDateObj = new Date(currentDate); // Convert currentDate string to Date object

      // Calculate the difference in days
      const timeDifference = currentDateObj.getTime() - releaseDate.getTime();
      const dayDifference = timeDifference / (1000 * 60 * 60 * 24); // Convert milliseconds to days

      return dayDifference <= 90 && releaseDate <= currentDateObj; // Keep movies released in the last 90 days
    });

    console.log(newReleases);
    setNewRealeaseMovies(newReleases); // Update the state with the filtered array
  }, [allMovies, currentDate]);

  useEffect(() => {
    const tenHighestRated: Movie[] = [...allMovies] // Create a copy to avoid mutating the original array
      .sort((a, b) => b.rating - a.rating) // Sort by rating in descending order
      .slice(0, 10); // Take the top 10 movies

    console.log(tenHighestRated); // Log the top 10 highest-rated movies
    setHighestRated(tenHighestRated);
  }, [allMovies]);

  useEffect(() => {
    const comingSoon: Movie[] = allMovies.filter((movie) => {
      const releaseDate = new Date(movie.releaseDate); // Convert to Date object
      const currentDateObj = new Date(currentDate); // Convert currentDate string to Date object

      return releaseDate >= currentDateObj;
    });
    setComingSoonMovies(comingSoon);
  }, [allMovies, currentDate]);

  const genreFunction = (genre: string) => {
    const filterByGenre = allMovies.filter((movie) =>
      movie.genre.toLowerCase().includes(genre.toLowerCase())
    );
    setFilteredMovies(filterByGenre);
  };

  const handleHashChange = () => {
    setActiveSection(window.location.hash);
  };

  useEffect(() => {
    if (window.location.hash) {
      setActiveSection(window.location.hash);
    }
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleLinkClick = (hash: string) => {
    setActiveSection(hash); // Update the state manually
  };

  const goToSpecificMovie = (movieId: number) => {
    route.push(`/homepage/movies/${movieId}`);
  };

  return (
    <div className="bg-gray-800 h-full grid grid-cols-[20%_80%]">
      <div>
        <div className="relative ">
          <Link
            href={"/homepage"}
            className="flex items-center justify-center text-white bg-green-700 py-4 text-2xl tracking-widest"
          >
            FilmFussion
          </Link>
        </div>

        <div className="relative flex items-start justify-center flex-col px-6 py-8 gap-4">
          <StyledMovieH3
            className={activeSection === "#new-releases" ? "active" : ""}
          >
            <Link
              href={"#new-releases"}
              onClick={() => handleLinkClick("#new-releases")}
            >
              New Releases
            </Link>
          </StyledMovieH3>
          <StyledMovieH3
            className={activeSection === "#trending" ? "active" : ""}
          >
            <Link
              href={"#highest-rated"}
              onClick={() => handleLinkClick("#highest-rated")}
            >
              Highest rated
            </Link>
          </StyledMovieH3>
          <StyledMovieH3
            className={activeSection === "#coming-soon" ? "active" : ""}
          >
            <Link
              href={"#coming-soon"}
              onClick={() => handleLinkClick("#coming-soon")}
            >
              Coming Soon
            </Link>
          </StyledMovieH3>
          <StyledMovieH3 className={activeSection === "#genre" ? "active" : ""}>
            <Link href={"#genre"} onClick={() => handleLinkClick("#genre")}>
              Select genre
            </Link>
          </StyledMovieH3>
        </div>
      </div>
      <div className="p-6  relative">
        {" "}
        <div className="absolute bg-chicago inset-0 bg-center bg-cover blur-md opacity-50"></div>
        <div id="all">
          <h2 className="mb-12 mt-8 text-3xl text-gray-300 tracking-wider">
            All movies
          </h2>
          <div className="grid grid-cols-5 gap-y-20 hover:cursor-pointer">
            {allMovies.length > 0 &&
              allMovies.map((movie) => (
                <div
                  key={movie.cinemaId}
                  onClick={() => goToSpecificMovie(movie.cinemaId)}
                >
                  <div
                    style={{ position: "relative", width: 200, height: 300 }}
                  >
                    <Image
                      src={movie.image}
                      alt={movie.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    {movie.rating && (
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
                    )}

                    {!movie.rating && (
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgba(0, 0, 0, 0.75)",
                          zIndex: 1,
                        }}
                      ></div>
                    )}

                    {movie.rating && (
                      <h3
                        className="absolute py-1 px-4 bg-green-500 rounded-3xl left-1/2 text-gray-100 z-10"
                        style={{
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        {movie.rating}
                      </h3>
                    )}
                    {!movie.rating && (
                      <h3
                        className="absolute py-4 px-4 bg-slate-700 rounded-3xl left-1/2 top-1/2 text-gray-50 z-10 w-3/4"
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        Comming soon
                      </h3>
                    )}
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
        <div id="new-releases" className="mt-12">
          <h2 className="mb-12 text-3xl text-gray-300 tracking-wider">
            New releases (3 months range)
          </h2>
          <div className="grid grid-cols-5 gap-y-12 hover:cursor-pointer">
            {newRealaseMovies.length > 0 &&
              newRealaseMovies.map((newMovieRealease) => (
                <div key={newMovieRealease.cinemaId}>
                  <div
                    style={{ position: "relative", width: 200, height: 300 }}
                  >
                    <Image
                      src={newMovieRealease.image}
                      alt={newMovieRealease.title}
                      fill
                      style={{ objectFit: "cover" }}
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
                      {newMovieRealease.rating}
                    </h3>
                  </div>
                  <div className="relative mt-6">
                    <h3 className="text-gray-100 tracking-wide text-lg">
                      {newMovieRealease.title}
                    </h3>
                    <h6 className="text-gray-300 mt-1">
                      {newMovieRealease.genre}
                    </h6>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div id="highest-rated">
          <h2 className="mb-12 mt-8 text-3xl text-gray-300 tracking-wider">
            10 highest rated movies
          </h2>
          <div className="grid grid-cols-5 gap-y-12">
            {highestRated.length > 0 &&
              highestRated.map((movie) => (
                <div key={movie.cinemaId}>
                  <div
                    style={{ position: "relative", width: 200, height: 300 }}
                  >
                    <Image
                      src={movie.image}
                      alt={movie.title}
                      fill
                      style={{ objectFit: "cover" }}
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
        <div id="coming-soon">
          <h2 className="mb-12 mt-8 text-3xl text-gray-300 tracking-wider">
            Coming soon
          </h2>
          <div className="grid grid-cols-5 gap-y-12">
            {comingSoonMovies.length > 0 &&
              comingSoonMovies.map((movie) => (
                <div key={movie.cinemaId}>
                  <div
                    style={{ position: "relative", width: 200, height: 300 }}
                  >
                    <Image
                      src={movie.image}
                      alt={movie.title}
                      fill
                      style={{ objectFit: "cover" }}
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
                      Coming
                    </h3>
                  </div>
                  <div className="relative mt-6">
                    <h3 className="text-gray-100 tracking-wide text-lg">
                      {movie.title}
                    </h3>
                    <h6 className="text-gray-300 mt-1">{movie.genre}</h6>
                    <h6 className="text-gray-300 mt-1">{movie.releaseDate}</h6>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div id="genre">
          <div className="mb-16">
            <h2 className="mb-12 mt-8 text-3xl text-gray-300 tracking-wider">
              Select Genre
            </h2>
            <div className="flex flex-wrap gap-4">
              {[
                "Action",
                "Drama",
                "Comedy",
                "Horror",
                "Sci-Fi",
                "Fantasy",
                "Romance",
                "Adventure",
                "Thriller",
                "Mystery",
                "Crime",
                "Animation",
                "Documentary",
                "Biography",
                "History",
                "War",
                "Western",
                "Musical",
                "Sport",
                "Family",
                "Kids",
                "Superhero",
                "Psychological",
                "Noir",
                "Surreal",
                "Experimental",
                "Anthology",
              ].map((genre) => (
                <button
                  key={genre}
                  onClick={() => genreFunction(genre)}
                  className="z-100 px-6 py-2 bg-gray-700 text-gray-300 rounded hover:bg-green-600 hover:text-white hover:cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-5 gap-y-12">
            {filteredMovies.length > 0 &&
              filteredMovies.map((movie) => (
                <div key={movie.cinemaId}>
                  <div
                    style={{ position: "relative", width: 200, height: 300 }}
                  >
                    <Image
                      src={movie.image}
                      alt={movie.title}
                      fill
                      style={{ objectFit: "cover" }}
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

            {filteredMovies.length === 0 && (
              <div>
                <div style={{ position: "relative", width: 200, height: 300 }}>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
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
                    -
                  </h3>
                </div>
                <div className="relative mt-6">
                  <h3 className="text-gray-100 tracking-wide text-lg">
                    No movies with this genre{" "}
                  </h3>
                  <h6 className="text-gray-300 mt-1"></h6>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
