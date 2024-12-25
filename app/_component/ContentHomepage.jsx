import Image from "next/image";
import { StyledHomeDiv, StyledHomepageH3 } from "./StyledComponents";
import Link from "next/link";

function ContentHomepage() {
  return (
    <div className="relative z-10 flex justify-center items-center flex-grow">
      <div className="w-3/4 px-32">
        <div>
          <h1 className="text-white text-4xl">Movie Name</h1>
        </div>
        <div className="flex gap-6">
          <StyledHomeDiv>
            <Image
              src="/star.png"
              alt="star"
              width={32}
              height={32}
              style={{
                filter: "invert(1) sepia(1) saturate(1000%) hue-rotate(100deg)",
              }}
            />
            <StyledHomepageH3>IMDB: 9.2</StyledHomepageH3>
          </StyledHomeDiv>
          <StyledHomeDiv>
            <Image
              src={"/clock.png"}
              alt="clock"
              width={32}
              height={32}
              style={{
                filter: "invert(1) sepia(1) saturate(1000%) hue-rotate(100deg)",
              }}
            />
            <StyledHomepageH3>Duration: 2h</StyledHomepageH3>
          </StyledHomeDiv>
          <StyledHomeDiv>
            <Image
              src={"/calendar.png"}
              alt="calendar"
              width={32}
              height={32}
              style={{
                filter: "invert(1) sepia(1) saturate(1000%) hue-rotate(100deg)",
              }}
            />
            <StyledHomepageH3>Year: 2020</StyledHomepageH3>
          </StyledHomeDiv>
        </div>
        <div>
          <p className="text-gray-200 text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            neque voluptates eligendi, cumque reprehenderit harum praesentium
            eaque quisquam maxime adipisci dolor quaerat repellendus nobis
            recusandae culpa ullam, nihil ad magni.
          </p>
        </div>
        <div className="flex items-center justify-start gap-6 mt-6">
          <Link
            className="transition-all duration-300 text-black bg-white py-4 px-6 rounded-xl hover:cursor-pointer hover:scale-105"
            href={"/"}
          >
            Show more
          </Link>
          <button className="transition-all duration-300 bg-green-400 py-4 px-6 rounded-xl text-black flex items-center justify-center gap-2 hover:cursor-pointer hover:scale-105">
            <span>
              <Image
                src={"/plus-symbol-button.png"}
                width={12}
                height={12}
                alt="plus button"
              />
            </span>
            <p>Add to list</p>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-12 items-center justify-center">
        <div>
          <div className="flex items-center relative gap-4">
            <div className="bg-fast9 h-60 w-40 bg-cover bg-center relative"></div>
            <div className="w-3/4 flex flex-col justify-start items-start gap-3">
              <h1 className="text-white text-3xl">Fast and Furious 9</h1>
              <p className="text-gray-200 text-base w-3/4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                explicabo perferendis sapiente adipisci labore corporis est
                quia! Consequatur, illum quasi.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  className="transition-all duration-300 text-black bg-white py-3 px-3 text-sm rounded-xl hover:cursor-pointer hover:scale-105"
                  href={"/"}
                >
                  Show more
                </Link>
                <button className="transition-all duration-300 bg-green-400 py-3 px-3 text-sm rounded-xl text-black flex items-center justify-center gap-2 hover:cursor-pointer hover:scale-105">
                  <span>
                    <Image
                      src={"/plus-symbol-button.png"}
                      width={12}
                      height={12}
                      alt="plus button"
                      style={{
                        filter:
                          "invert(1) sepia(1) saturate(1000%) hue-rotate(100deg)",
                      }}
                    />
                  </span>
                  Add to list
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center relative gap-4">
            <div className="bg-badboys h-60 w-40 bg-cover bg-center relative"></div>
            <div className="w-3/4 flex flex-col justify-start items-start gap-3">
              <h1 className="text-white text-3xl">Bad Boys: For Life</h1>
              <p className="text-gray-200 text-base w-3/4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                explicabo perferendis sapiente adipisci labore corporis est
                quia! Consequatur, illum quasi.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  className="text-sm transition-all duration-300 text-black bg-white py-3 px-3 rounded-xl hover:cursor-pointer hover:scale-105"
                  href={"/"}
                >
                  Show more
                </Link>
                <button className="transition-all duration-300 bg-green-400 py-3 px-3 text-sm rounded-xl text-black flex items-center justify-center gap-2 hover:cursor-pointer hover:scale-105">
                  <span>
                    <Image
                      src={"/plus-symbol-button.png"}
                      width={12}
                      height={12}
                      alt="plus button"
                      style={{
                        filter:
                          "invert(1) sepia(1) saturate(1000%) hue-rotate(100deg)",
                      }}
                    />
                  </span>
                  Add to list
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentHomepage;
