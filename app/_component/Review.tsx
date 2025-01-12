"use client";
import React, { useEffect, useRef, useState } from "react";
import { Review, Review, UserReview, Users } from "./Type";
import {
  getMovieData,
  getReviews,
  getUserData,
  getUsers,
} from "../_lib/cinema-service-data";
import { useParams, useSearchParams } from "next/navigation";
import { createReview } from "../_lib/users";
import Error from "next/error";

export default function Review() {
  const params = useSearchParams();
  const userId = params.get("userId");
  const userIdInt = userId ? parseInt(userId, 10) : NaN;

  const { movieId } = useParams<{ movieId: string }>();
  const movieIdInt = movieId ? parseInt(movieId, 10) : NaN;

  const [reviewed, setReviewed] = useState<string>("");
  const [users, setUsers] = useState<Users[]>([]);
  const [userReview, setUserReview] = useState<Review[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allReviews, setAllReviews] = useState<Review[]>([]);

  const reviewRef = useRef<HTMLTextAreaElement>();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await getUsers();
        if (data) {
          setUsers(data);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error(error);
        }
      }
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    async function fetchReview() {
      try {
        const data = await getReviews();

        if (data) {
          setAllReviews(data);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error(error);
        }
      }
    }
    fetchReview();
  }, []);

  const reviewFunct = async () => {
    const user = await getUserData(userIdInt);
    if (!user) {
      console.error("No user data");
      return;
    }
    const userReviewed = user[0].reviewd;

    if (!userReviewed) {
      setIsModalOpen(true);
      setReviewed("");
    } else {
      setReviewed("You have a review on this movie already");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const reviewValue: string | undefined = reviewRef.current?.value;
    const review = reviewValue || "";
    const movie = await getMovieData(movieIdInt);
    const movieID = movie?.[0]?.cinemaId;

    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")}`;

    console.log(`Review submitted on: ${formattedDate}`);

    try {
      const reviewCreated = await createReview(
        userIdInt,
        movieID,
        review,
        formattedDate
      );
      console.log("Review submitted " + reviewValue);
      setUserReview(reviewCreated || []);
      closeModal();
    } catch (err) {
      if (err instanceof Error) {
        console.error(err);
      }
    }
  };

  return (
    <div className="bg-red-200 h-3/4 w-3/4 flex justify-center items-start">
      <div className="flex flex-col w-screen h-screen gap-6">
        <div className="flex flex-col gap-4 mt-4">
          <h1 className="text-3xl text-center">Customers Review</h1>
          <button
            className="text-xl py-4 px-6 bg-cyan-400 rounded-lg shadow-md w-fit mx-auto "
            onClick={reviewFunct}
          >
            Add your review
          </button>
          {reviewed !== "" && <p className="text-red-400">{reviewed}</p>}
        </div>
        {allReviews.length > 0 && (
          <div className="px-6">
            {allReviews.map((review) => (
              <div key={review.review_id}>
                <p>User with id of:{review.user_id}</p>
              </div>
            ))}
          </div>
        )}{" "}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-2xl mb-4">Submit your review</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <textarea
                placeholder="Write your review here..."
                className="p-2 border border-gray-300 rounded-lg"
                rows="4"
                required
                ref={reviewRef}
              />
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="py-2 px-4 bg-red-500 text-white rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 bg-green-500 text-white rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
