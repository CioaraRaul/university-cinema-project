"use client";

import { StyledMovieH3 } from "@/app/_component/StyledComponents";
import Link from "next/link";
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
    <div className="bg-gray-800 h-screen grid grid-cols-[20%_80%]">
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
      <div>
        <div id="new-releases">New releases</div>
        <div id="trending">Trending</div>
        <div id="coming-soon">Coming soon</div>
        <div id="watch-later">Watch later</div>
      </div>
    </div>
  );
}
