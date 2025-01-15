"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

interface NavBarHomeProps {
  image?: string;
  username?: string;
  password?: string;
  email?: string;
  id?: number;
}

function NavbarHome({ image, username, password, email, id }: NavBarHomeProps) {
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");

  const createLinkWithUserId = (path: string) => {
    return userId ? `homepage/${path}?userId=${userId}` : path;
  };

  return (
    <div className="relative z-100 flex justify-around items-center pt-6">
      <div>
        <ul className="text-white flex items-center gap-12">
          <li className="text-3xl tracking-wider text-green-400">
            FilmFussion
          </li>
          <li className="text-xl tracking-wide">
            <Link href={createLinkWithUserId("/")}>Home</Link>
          </li>
          <li className="text-xl tracking-wide">
            <Link href={createLinkWithUserId("/movies")}>Movies</Link>
          </li>
          <li className="text-xl tracking-wide">
            <Link href={createLinkWithUserId("/create")}>Create</Link>
          </li>
          <li className="text-xl tracking-wide">
            <Link href={createLinkWithUserId("/mylist")}>My List</Link>
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
