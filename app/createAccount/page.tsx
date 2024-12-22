import React from "react";

export default function Page() {
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
            />
            <input
              className="rounded-3xl border-none text-white bg-gray-600 placeholder-white transition-all duration-300 px-3 py-5 focus:outline-2 outline-offset-2 outline-greenMain focus:scale-x-105"
              type="text"
              placeholder="email:test@test.com"
            />
            <input
              className="rounded-3xl border-none text-white bg-gray-600 placeholder-white transition-all duration-300 px-3 py-5 focus:outline-2 outline-offset-2 outline-greenMain focus:scale-x-105"
              type="text"
              placeholder="password:test1."
            />
          </div>
          <div>
            <button className="text-white bg-greenMain px-8 py-4 rounded-3xl mt-7 transition-all duration-300 active:-translate-y-2">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
