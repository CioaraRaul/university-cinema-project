import React from "react";

interface Props {
  buttonIndex: number | null; // Define the prop type
}

export default function GetDataMovieButton({ buttonIndex }: Props) {
  return (
    <div>
      {buttonIndex === 0 && (
        <div>
          {" "}
          <h1 className="text-white">{buttonIndex} testttttttt</h1>
        </div>
      )}
      {buttonIndex === 1 && (
        <div>
          {" "}
          <h1 className="text-white">{buttonIndex} testttttttt</h1>
        </div>
      )}
      {buttonIndex === 2 && (
        <div>
          {" "}
          <h1 className="text-white">{buttonIndex} testttttttt</h1>
        </div>
      )}
      {buttonIndex === 3 && (
        <div>
          {" "}
          <h1 className="text-white">{buttonIndex} testttttttt</h1>
        </div>
      )}
    </div>
  );
}
