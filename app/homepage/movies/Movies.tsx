"use client";

import { StyledMovieH3 } from "@/app/_component/StyledComponents";
import Image from "next/image";
import Link from "next/link";
import { relative } from "path";
import React, { useEffect, useState } from "react";

export default function Movies() {
  const [activeSection, setActiveSection] = useState<string>("");

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
              href={"#trending"}
              onClick={() => handleLinkClick("#trending")}
            >
              Trending
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
          <StyledMovieH3
            className={activeSection === "#watch-later" ? "active" : ""}
          >
            <Link
              href={"#watch-later"}
              onClick={() => handleLinkClick("#watch-later")}
            >
              Watch Later
            </Link>
          </StyledMovieH3>
        </div>
      </div>
      <div className="p-6  relative">
        {" "}
        <div className="absolute bg-chicago inset-0 bg-center bg-cover blur-md opacity-50"></div>
        <div id="new-releases">
          <h2 className="mb-12 text-3xl text-gray-300 tracking-wider">
            New releases
          </h2>
          <div className="grid grid-cols-5 gap-y-12">
            <div>
              <div style={{ position: "relative", width: 200, height: 300 }}>
                <Image
                  src="/fast9.jpg"
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
                  8.9
                </h3>
              </div>
              <div className="relative mt-6">
                <h3 className="text-gray-100 tracking-wide text-lg">
                  Title movie
                </h3>
                <h6 className="text-gray-300 mt-1">Genre</h6>
              </div>
            </div>
            <div>
              <div style={{ position: "relative", width: 200, height: 300 }}>
                <Image
                  src="/fast9.jpg"
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
                  8.9
                </h3>
              </div>
              <div className="relative mt-6">
                <h3 className="text-gray-100 tracking-wide text-lg">
                  Title movie
                </h3>
                <h6 className="text-gray-300 mt-1">Genre</h6>
              </div>
            </div>
            <div>
              <div style={{ position: "relative", width: 200, height: 300 }}>
                <Image
                  src="/fast9.jpg"
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
                  8.9
                </h3>
              </div>
              <div className="relative mt-6">
                <h3 className="text-gray-100 tracking-wide text-lg">
                  Title movie
                </h3>
                <h6 className="text-gray-300 mt-1">Genre</h6>
              </div>
            </div>
            <div>
              <div style={{ position: "relative", width: 200, height: 300 }}>
                <Image
                  src="/fast9.jpg"
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
                  8.9
                </h3>
              </div>
              <div className="relative mt-6">
                <h3 className="text-gray-100 tracking-wide text-lg">
                  Title movie
                </h3>
                <h6 className="text-gray-300 mt-1">Genre</h6>
              </div>
            </div>
            <div>
              <div style={{ position: "relative", width: 200, height: 300 }}>
                <Image
                  src="/fast9.jpg"
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
                  8.9
                </h3>
              </div>
              <div className="relative mt-6">
                <h3 className="text-gray-100 tracking-wide text-lg">
                  Title movie
                </h3>
                <h6 className="text-gray-300 mt-1">Genre</h6>
              </div>
            </div>
            <div>
              <div style={{ position: "relative", width: 200, height: 300 }}>
                <Image
                  src="/fast9.jpg"
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
                  8.9
                </h3>
              </div>
              <div className="relative mt-6">
                <h3 className="text-gray-100 tracking-wide text-lg">
                  Title movie
                </h3>
                <h6 className="text-gray-300 mt-1">Genre</h6>
              </div>
            </div>
          </div>
        </div>
        <div id="trending">
          <h2 className="mb-12 mt-8 text-3xl text-gray-300 tracking-wider">
            New releases
          </h2>
          <div className="grid grid-cols-5 gap-y-12">
            <div>
              <div style={{ position: "relative", width: 200, height: 300 }}>
                <Image
                  src="/fast9.jpg"
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
                  8.9
                </h3>
              </div>
              <div className="relative mt-6">
                <h3 className="text-gray-100 tracking-wide text-lg">
                  Title movie
                </h3>
                <h6 className="text-gray-300 mt-1">Genre</h6>
              </div>
            </div>
            <div>
              <div style={{ position: "relative", width: 200, height: 300 }}>
                <Image
                  src="/fast9.jpg"
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
                  8.9
                </h3>
              </div>
              <div className="relative mt-6">
                <h3 className="text-gray-100 tracking-wide text-lg">
                  Title movie
                </h3>
                <h6 className="text-gray-300 mt-1">Genre</h6>
              </div>
            </div>
            <div>
              <div style={{ position: "relative", width: 200, height: 300 }}>
                <Image
                  src="/fast9.jpg"
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
                  8.9
                </h3>
              </div>
              <div className="relative mt-6">
                <h3 className="text-gray-100 tracking-wide text-lg">
                  Title movie
                </h3>
                <h6 className="text-gray-300 mt-1">Genre</h6>
              </div>
            </div>
            <div>
              <div style={{ position: "relative", width: 200, height: 300 }}>
                <Image
                  src="/fast9.jpg"
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
                  8.9
                </h3>
              </div>
              <div className="relative mt-6">
                <h3 className="text-gray-100 tracking-wide text-lg">
                  Title movie
                </h3>
                <h6 className="text-gray-300 mt-1">Genre</h6>
              </div>
            </div>
            <div>
              <div style={{ position: "relative", width: 200, height: 300 }}>
                <Image
                  src="/fast9.jpg"
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
                  8.9
                </h3>
              </div>
              <div className="relative mt-6">
                <h3 className="text-gray-100 tracking-wide text-lg">
                  Title movie
                </h3>
                <h6 className="text-gray-300 mt-1">Genre</h6>
              </div>
            </div>
            <div>
              <div style={{ position: "relative", width: 200, height: 300 }}>
                <Image
                  src="/fast9.jpg"
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
                  8.9
                </h3>
              </div>
              <div className="relative mt-6">
                <h3 className="text-gray-100 tracking-wide text-lg">
                  Title movie
                </h3>
                <h6 className="text-gray-300 mt-1">Genre</h6>
              </div>
            </div>
          </div>
        </div>
        <div id="coming-soon">
          <h2 className="mb-12 mt-8 text-3xl text-gray-300 tracking-wider">
            New releases
          </h2>
          <div className="grid grid-cols-5 gap-y-12">
            <div>
              <div style={{ position: "relative", width: 200, height: 300 }}>
                <Image
                  src="/fast9.jpg"
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
                  8.9
                </h3>
              </div>
              <div className="relative mt-6">
                <h3 className="text-gray-100 tracking-wide text-lg">
                  Title movie
                </h3>
                <h6 className="text-gray-300 mt-1">Genre</h6>
              </div>
            </div>
            <div>
              <div style={{ position: "relative", width: 200, height: 300 }}>
                <Image
                  src="/fast9.jpg"
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
                  8.9
                </h3>
              </div>
              <div className="relative mt-6">
                <h3 className="text-gray-100 tracking-wide text-lg">
                  Title movie
                </h3>
                <h6 className="text-gray-300 mt-1">Genre</h6>
              </div>
            </div>
            <div>
              <div style={{ position: "relative", width: 200, height: 300 }}>
                <Image
                  src="/fast9.jpg"
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
                  8.9
                </h3>
              </div>
              <div className="relative mt-6">
                <h3 className="text-gray-100 tracking-wide text-lg">
                  Title movie
                </h3>
                <h6 className="text-gray-300 mt-1">Genre</h6>
              </div>
            </div>
            <div>
              <div style={{ position: "relative", width: 200, height: 300 }}>
                <Image
                  src="/fast9.jpg"
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
                  8.9
                </h3>
              </div>
              <div className="relative mt-6">
                <h3 className="text-gray-100 tracking-wide text-lg">
                  Title movie
                </h3>
                <h6 className="text-gray-300 mt-1">Genre</h6>
              </div>
            </div>
            <div>
              <div style={{ position: "relative", width: 200, height: 300 }}>
                <Image
                  src="/fast9.jpg"
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
                  8.9
                </h3>
              </div>
              <div className="relative mt-6">
                <h3 className="text-gray-100 tracking-wide text-lg">
                  Title movie
                </h3>
                <h6 className="text-gray-300 mt-1">Genre</h6>
              </div>
            </div>
            <div>
              <div style={{ position: "relative", width: 200, height: 300 }}>
                <Image
                  src="/fast9.jpg"
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
                  8.9
                </h3>
              </div>
              <div className="relative mt-6">
                <h3 className="text-gray-100 tracking-wide text-lg">
                  Title movie
                </h3>
                <h6 className="text-gray-300 mt-1">Genre</h6>
              </div>
            </div>
          </div>
        </div>
        <div id="watch-later">
          <h2 className="mb-12 mt-8 text-3xl text-gray-300 tracking-wider">
            New releases
          </h2>
          <div className="grid grid-cols-5 gap-y-12">
            <div>
              <div style={{ position: "relative", width: 200, height: 300 }}>
                <Image
                  src="/fast9.jpg"
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
                  8.9
                </h3>
              </div>
              <div className="relative mt-6">
                <h3 className="text-gray-100 tracking-wide text-lg">
                  Title movie
                </h3>
                <h6 className="text-gray-300 mt-1">Genre</h6>
              </div>
            </div>
            <div>
              <div style={{ position: "relative", width: 200, height: 300 }}>
                <Image
                  src="/fast9.jpg"
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
                  8.9
                </h3>
              </div>
              <div className="relative mt-6">
                <h3 className="text-gray-100 tracking-wide text-lg">
                  Title movie
                </h3>
                <h6 className="text-gray-300 mt-1">Genre</h6>
              </div>
            </div>
            <div>
              <div style={{ position: "relative", width: 200, height: 300 }}>
                <Image
                  src="/fast9.jpg"
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
                  8.9
                </h3>
              </div>
              <div className="relative mt-6">
                <h3 className="text-gray-100 tracking-wide text-lg">
                  Title movie
                </h3>
                <h6 className="text-gray-300 mt-1">Genre</h6>
              </div>
            </div>
            <div>
              <div style={{ position: "relative", width: 200, height: 300 }}>
                <Image
                  src="/fast9.jpg"
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
                  8.9
                </h3>
              </div>
              <div className="relative mt-6">
                <h3 className="text-gray-100 tracking-wide text-lg">
                  Title movie
                </h3>
                <h6 className="text-gray-300 mt-1">Genre</h6>
              </div>
            </div>
            <div>
              <div style={{ position: "relative", width: 200, height: 300 }}>
                <Image
                  src="/fast9.jpg"
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
                  8.9
                </h3>
              </div>
              <div className="relative mt-6">
                <h3 className="text-gray-100 tracking-wide text-lg">
                  Title movie
                </h3>
                <h6 className="text-gray-300 mt-1">Genre</h6>
              </div>
            </div>
            <div>
              <div style={{ position: "relative", width: 200, height: 300 }}>
                <Image
                  src="/fast9.jpg"
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
                  8.9
                </h3>
              </div>
              <div className="relative mt-6">
                <h3 className="text-gray-100 tracking-wide text-lg">
                  Title movie
                </h3>
                <h6 className="text-gray-300 mt-1">Genre</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
