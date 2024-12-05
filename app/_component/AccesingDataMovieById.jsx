"use client";

import { useRef, useState } from "react";
import GetDataMovieById from "../_component/getDataMovieById";

function AccesingDataMovieById() {
  const inputRef = useRef(null);
  const [movieId, setMovieId] = useState(null);
  const [showInput, setShowInput] = useState(true); // Track visibility of the input

  function changeId() {
    let value = inputRef.current?.value;
    setMovieId(value);
    setShowInput(false); // Hide the input after submission
  }

  return (
    <div>
      <h1>Check your movie by id</h1>

      {showInput && (
        <form>
          <label>Movie you want</label>
          <input type="number" ref={inputRef} placeholder="movie id" />
          <button type="button" onClick={changeId}>
            Submit
          </button>
        </form>
      )}

      {/* Pass movieId to GetDataMovieById if it's not null */}
      {movieId !== null && <GetDataMovieById id={movieId} />}
    </div>
  );
}

export default AccesingDataMovieById;
