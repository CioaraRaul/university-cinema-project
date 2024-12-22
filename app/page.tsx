import React from "react";
import { metadata } from "./layout";
import Image from "next/image";
import cinemaSecondImage from "@/public/cinemaSecondImage.jpg";
import InstagramSVG from "@/public/instagram-svgrepo-com.svg";
import FacebookSVG from "@/public/facebook-svgrepo-com.svg";
import LinkedinSVG from "@/public/linkedin-svgrepo-com.svg";
import Link from "next/link";
import CarouselImage from "./_component/CarouselImage";
import backgroundHome from "@/public/backgroundHome.jpg";
import loginBackground from "@/public/loginBackground.jpg";

const images = [
  { cinemaId: 1, src: cinemaSecondImage },
  { cinemaId: 2, src: backgroundHome },
  { cinemaId: 3, src: loginBackground },
];

export const metadataForHome = {
  title: "Home",
};

const title = "FilmFussion";

export default function page() {
  return (
    <>
      <div className="relative h-[85vh]">
        {/* Background image div */}
        <div className="absolute inset-0 bg-homepage bg-cover bg-center z-0">
          <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
          {/* Overlay */}
        </div>

        {/* Content div */}
        <div className="relative flex justify-around pt-6 px-4 z-10">
          <div>
            <h1 className="text-white text-3xl tracking-wider hover:cursor-pointer">
              {title}
            </h1>
          </div>
          <div className="text-white">
            <nav className="flex flex-row gap-6 text-xl ">
              <Link
                className="transition-all duration-300 ease-in-out hover:scale-110 hover:text-green-300 hover:font-semibold "
                href={"/"}
              >
                Home
              </Link>
              <Link
                className="transition-all duration-300 ease-in-out hover:scale-110 hover:text-green-300 hover:font-semibold "
                href={"/"}
              >
                About
              </Link>
              <Link
                className="transition-all duration-300 ease-in-out hover:scale-110 hover:text-green-300 hover:font-semibold "
                href={"/"}
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="text-white">
            <ul className="flex gap-2">
              <li className="transition-all duration-300 hover:scale-110 ">
                <Link href={"https://www.instagram.com/"}>
                  <InstagramSVG width={48} height={28} fill="#EEEEEE" />
                </Link>
              </li>
              <li className="transition-all duration-300 hover:scale-110 ">
                <Link href={"https://www.facebook.com/cioara.raul.7/"}>
                  <FacebookSVG width={48} height={28} fill="#EEEEEE" />
                </Link>
              </li>
              <li className="transition-all duration-300 hover:scale-110 ">
                <Link
                  href={"https://www.linkedin.com/in/cioara-raul-155b99258/"}
                >
                  <LinkedinSVG width={48} height={28} fill="#EEEEEE" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Text and other content */}
        <div className="relative z-10 text-white w-2/4 flex items-center justify-center flex-col gap-4 py-40">
          <h3 className="text-lg tracking-wider">Welcome to {title}</h3>
          <h1 className="text-3xl tracking-wider">
            Your Gateway to Cinematic Adventures
          </h1>

          <Link
            href={"/login"}
            className="bg-green-900 p-4 text-xl  rounded-xl"
          >
            Login | Create Account
          </Link>
        </div>
      </div>

      <div className="bg-green-900 relative">
        {/* Add an overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        {/* Content that stays on top of the overlay */}
        <div className="relative z-10">
          <div className="flex px-24 py-24">
            <div className="w-1/2 flex flex-col justify-center items-start gap-4 px-8">
              <h1 className="text-white text-3xl tracking-wider">
                <span className="text-green-400 text-xl tracking-wide">
                  Welcome to
                </span>{" "}
                <span className="block">
                  {metadata.title.template.replace("%s /", "")}
                </span>
              </h1>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem eligendi laborum numquam suscipit aperiam
                voluptates repellat excepturi necessitatibus reiciendis omnis
                assumenda repudiandae quisquam eos perferendis, ullam magni nemo
                voluptate cum mollitia non voluptas culpa rerum vero illum?
                Distinctio, nostrum error.
              </p>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                aliquam, autem aut odio facilis iusto possimus pariatur dolore
                asperiores nobis reprehenderit, odit minima cum! Et dolores
                harum molestiae in deserunt, laboriosam rerum magni? Natus odio
                nihil fugiat maxime ipsam quas.
              </p>

              <button className="text-gray-50 text-xl py-4 px-8 border-2 border-gray-400">
                Learn more
              </button>
            </div>
            <div className="w-1/2 relative" style={{ height: "60vh" }}>
              {/* Overlay for darkening the image */}
              <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

              {/* Image */}
              <Image
                src={cinemaSecondImage}
                alt="second cinema image"
                fill
                className="object-cover bg-cover bg-center z-0" // Ensure the image has a lower z-index
              />
            </div>
          </div>
          <CarouselImage images={images} />

          <div className="border-t-2 border-gray-300 my-24 w-1/2 mx-auto"></div>
          <div>
            <p className="text-gray-300 text-center pb-6 tracking-wide text-md">
              Copyright @2024 FilmFussion
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
