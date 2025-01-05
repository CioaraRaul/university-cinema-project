"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface NavBarHomeProps {
  image?: string;
  username?: string;
  password?: string;
  email?: string;
}

function NavbarHome({ image, username, password, email }: NavBarHomeProps) {
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative z-10 flex justify-around items-center pt-6">
      <div>
        <ul className="text-white flex items-center gap-12">
          <li className="text-3xl tracking-wider text-green-400">
            FilmFussion
          </li>
          <li className="text-xl tracking-wide">
            <Link href={"/homepage"}>Home</Link>
          </li>
          <li className="text-xl tracking-wide">
            <Link
              href={`/homepage/movies?username=${username}&email=${email}&password=${password}&image=${
                image || "default-profile-picture.png"
              }`}
            >
              Movies
            </Link>
          </li>
          <li className="text-xl tracking-wide">
            <Link
              href={`/homepage/series?username=${username}&email=${email}&password=${password}&image=${
                image || "default-profile-picture.png"
              }`}
            >
              Create
            </Link>
          </li>
          <li className="text-xl tracking-wide">
            <Link
              href={`/homepage/mylist?username=${username}&email=${email}&password=${password}&image=${
                image || "default-profile-picture.png"
              }`}
            >
              My List
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-row justify-start items-center py-2 gap-6">
        <SearchBar />
        <div
          className="flex justify-center items-center relative gap-6"
          ref={dropDownRef}
        >
          {image && (
            <Link
              href={`/homepage/settings?username=${username}&email=${email}&password=${password}&image=${
                image || "default-profile-picture.png"
              }`}
            >
              <Image
                src={image}
                width={48}
                height={48}
                className="cursor-pointer"
                alt={`${username}'s profile `}
                onError={(e) =>
                  (e.currentTarget.src = "/default-profile-picture.png")
                }
              />
            </Link>
          )}
          {username && <h3>{username}</h3>}
        </div>
      </div>
    </div>
  );
}

export default NavbarHome;
