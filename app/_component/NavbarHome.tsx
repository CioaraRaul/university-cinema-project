"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface NavBarHomeProps {
  image?: string;
  username?: string;
  password?: string;
  email?: string;
}

function NavbarHome({ image, username, password, email }: NavBarHomeProps) {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropDown = () => {
    setDropDownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        console.log(dropDownRef.current);
        setDropDownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
              Series
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
            <Image
              src={image}
              width={48}
              height={48}
              onClick={toggleDropDown}
              className="cursor-pointer"
              alt={`${username}'s profile `}
              onError={(e) =>
                (e.currentTarget.src = "/default-profile-picture.png")
              }
            />
          )}
          {username && <h3>{username}</h3>}
          <div className="flex h-full">
            <Image
              src="/arrowDown.svg"
              alt="arrow down"
              className="cursor-pointer relative "
              width={32}
              height={32}
              onClick={toggleDropDown}
            />

            {dropDownOpen && (
              <div className="absolute left-0 mt-2 top-14 bg-white text-black rounded-lg shadow-lg p-4 w-48">
                <ul>
                  <li className="py-2">
                    <Link href={"/settings"}>Settings</Link>
                  </li>
                  <li className="py-2">
                    <Link href={"/logout"}>Logout</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarHome;
