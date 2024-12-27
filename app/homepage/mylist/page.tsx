import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="relative h-full">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            filter: "blur(8px)",
            backgroundImage: "url(/backgroundHome.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10  h-full ">
        <div>
          <Link href="/homepage">
            <h1 className="text-3xl text-gray-100 font-bold py-4 px-6 bg-green-800 text-center ">
              FilmFussion
            </h1>
          </Link>
        </div>
        <div>
          <h2 className="text-gray-100 text-3xl tracking-wider m-10 underline decoration-green-700 decoration-2 underline-offset-4">
            My list
          </h2>
          <div className="grid grid-cols-5 gap-y-12 p-10 py-4">
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
