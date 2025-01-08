"use client";
import React, { useEffect, useRef, useState } from "react";
import { UserReview, Users } from "./Type";
import { getUsers } from "../_lib/cinema-service-data";
import { useSearchParams } from "next/navigation";

export default function Review() {
  const params = useSearchParams();
  const userId = params.get("userId");
  const userIdInt = userId ? parseInt(userId, 10) : NaN;

  const [reviewed, setReviewed] = useState<string>("");
  const [users, setUsers] = useState<Users[]>([]);
  const [userReview, setUserReview] = useState<string | null>();
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const reviewFunct = async () => {
    const checkAlreadyReview = users.find((user) => {
      return user.id === userIdInt;
    });

    if (checkAlreadyReview) {
      setIsModalOpen(true);
      setReviewed("");
    } else {
      setReviewed("You have a review on this movie already");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    const review = reviewRef.current?.value;

    event.preventDefault();
    console.log("Review submitted " + review);
    setUserReview(review);
    closeModal();
  };

  return (
    <div className="bg-red-200 h-3/4 w-3/4 flex justify-center items-start">
      <div className="flex flex-col gap-4 mt-4">
        <h1 className="text-3xl ">Customers Review</h1>
        <button
          className="text-xl py-4 px-2 bg-cyan-400 rounded-lg shadow-md"
          onClick={reviewFunct}
        >
          Add your review
        </button>
        {reviewed !== "" && <p className="text-red-400">{reviewed}</p>}
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
