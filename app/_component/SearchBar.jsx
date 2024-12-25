"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query);
  };

  return (
    <div className="flex align-middle">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="relative border border-gray-300 rounded-l-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
      <button
        onClick={handleSearch}
        className=" bg-gray-50 border-0 rounded-r-lg px-4 py-2  hover:bg-gray-200 "
      >
        <Image
          src="/icons8-search.svg"
          width={24}
          height={24}
          alt="arrow down"
        ></Image>
      </button>
    </div>
  );
}
