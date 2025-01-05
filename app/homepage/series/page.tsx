import React from "react";
import CreateMovie from "./CreateMovie";

export default function page() {
  return (
    <div className="relative flex flex-row justify-center h-screen items-center bg-center bg-cover bg-homepage">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Foreground content */}
      <div className="relative z-10 w-full h-full flex justify-center items-center">
        <CreateMovie />
      </div>
    </div>
  );
}
