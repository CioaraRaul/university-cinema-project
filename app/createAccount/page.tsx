"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

export default function Page() {
  const [selectedImage, setSelectedImage] = useState("");
  const usernameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const imageRef = useRef<HTMLInputElement>();

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const buildRef = () => {
    const username = usernameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    return `/homepage?username=${encodeURIComponent(
      username
    )}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(
      password
    )}&image=${encodeURIComponent(
      selectedImage || "default-profile-picture.png"
    )}`;
  };

  return (
    <div className="h-screen relative flex flex-row bg-create-account bg-cover">
      <div className="absolute inset-0 bg-gray-900 bg-opacity-40 z-0"></div>

      <div className="relative z-10 w-1/2 flex flex-col justify-center align-middle">
        <div className="w-create-account-width flex flex-col mx-auto ">
          <div>
            <h3 className="text-gray-300 text-xl ">Start your movie journey</h3>
          </div>
          <div>
            <h1 className="text-white text-4xl tracking-wider my-5 mb-8">
              Create new FilmFussion Account
            </h1>
          </div>
          <div className="flex flex-col gap-6 ">
            <input
              type="text"
              placeholder="username:Test12"
              className="rounded-3xl border-none text-white bg-gray-600 placeholder-white transition-all duration-300 px-3 py-5 focus:outline-2 outline-offset-2 outline-greenMain focus:scale-x-105"
              ref={usernameRef}
            />
            <input
              className="rounded-3xl border-none text-white bg-gray-600 placeholder-white transition-all duration-300 px-3 py-5 focus:outline-2 outline-offset-2 outline-greenMain focus:scale-x-105"
              type="text"
              placeholder="email:test@test.com"
              ref={emailRef}
            />
            <input
              className="rounded-3xl border-none text-white bg-gray-600 placeholder-white transition-all duration-300 px-3 py-5 focus:outline-2 outline-offset-2 outline-greenMain focus:scale-x-105"
              type="text"
              placeholder="password:test1."
              ref={passwordRef}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="text-gray-300 rounded-md"
              ref={imageRef}
            />
          </div>
          <div className="mt-10">
            <Link
              href={buildRef()}
              className="text-white bg-greenMain px-8 py-4 rounded-3xl  transition-all duration-300 active:-translate-y-2"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
