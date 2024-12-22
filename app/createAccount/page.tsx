import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="h-screen relative flex flex-row">
      <div className="w-1/2 flex flex-col justify-center ">
        <div>
          <h3>Start you movie journey</h3>
        </div>
        <div>
          <h1>Create new FilmFussion</h1>
        </div>
        <div className="flex flex-col">
          <input type="text" placeholder="username:Test12" />
          <input type="text" placeholder="email:test@test.com" />
          <input type="text" placeholder="password:test1." />
        </div>
        <div>
          <button>Create Account</button>
        </div>
      </div>
      <div className="relative w-1/2 h-screen bg-cover">
        <Image
          src="/loginBackground.jpg"
          alt="Login Background"
          layout="fill"
        />
      </div>
    </div>
  );
}
