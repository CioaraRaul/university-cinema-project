"use client";

//still not working

import React, { useState } from "react";
import { ChangeMovieData, getMovieData } from "../_lib/cinema-service-data";

export default function Page() {
  const id = 4;

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedMovie, setEditedMovie] = useState({
    cinemaId: "",
    genre: "",
    duration: "",
    rating: "",
  });

  async function getMovieDataId(idmovie) {
    const movieData = await getMovieData(idmovie);
    if (movieData) {
      setMovie(movieData[0]);
    }
    if (!movieData) {
      setError("No movie found");
    }
  }

  const openModal = () => {
    // Set the movie values to be edited in the modal
    if (movie) {
      setEditedMovie({
        cinemaId: movie.cinemaId,
        genre: movie.genre,
        duration: movie.duration,
        rating: movie.rating,
      });
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedMovie((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Edited Movie Data:", editedMovie); // Debugging
    const updatedMovie = await ChangeMovieData({
      id: movie.cinemaId,
      ...editedMovie,
    });
    console.log("Updated Movie:", updatedMovie); // Debugging

    setMovie(updatedMovie[0]);
    closeModal();
  };

  return (
    <div>
      <button onClick={() => getMovieDataId(id)}>Edit</button>

      {movie ? (
        <div>
          <h1>{movie.cinemaId}</h1>
          <p>{movie.genre}</p>
          <p>{movie.duration}</p>
          <p>{movie.rating}</p>
          <button onClick={openModal}>I wanna edit</button>
        </div>
      ) : (
        !error && <p>Loading movie...</p>
      )}

      {/* Modal for editing movie details */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Movie</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="cinemaId">Cinema ID:</label>
                <input
                  type="text"
                  id="cinemaId"
                  name="cinemaId"
                  value={editedMovie.cinemaId}
                  onChange={handleInputChange}
                  placeholder={movie.cinemaId}
                />
              </div>
              <div>
                <label htmlFor="genre">Genre:</label>
                <input
                  type="text"
                  id="genre"
                  name="genre"
                  value={editedMovie.genre}
                  onChange={handleInputChange}
                  placeholder={movie.genre}
                />
              </div>
              <div>
                <label htmlFor="duration">Duration:</label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  value={editedMovie.duration}
                  onChange={handleInputChange}
                  placeholder={movie.duration}
                />
              </div>
              <div>
                <label htmlFor="rating">Rating:</label>
                <input
                  type="text"
                  id="rating"
                  name="rating"
                  value={editedMovie.rating}
                  onChange={handleInputChange}
                  placeholder={movie.rating}
                />
              </div>
              <div>
                <button type="submit">Save Changes</button>
                <button type="button" onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 5px;
          width: 300px;
          text-align: center;
        }
        .modal-content input {
          width: 100%;
          padding: 8px;
          margin: 10px 0;
        }
        .modal-content button {
          margin: 10px;
          padding: 10px;
        }
      `}</style>
    </div>
  );
}
