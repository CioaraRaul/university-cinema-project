"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { getUsers } from "../_lib/cinema-service-data";
import { Users } from "./Type";
import changePassword from "../_lib/users";

export default function CheckForgotPassword() {
  const [data, setData] = useState<Users[]>([]);
  const [emailCheck, setEmailCheck] = useState<boolean>(false);
  const [validEmail, setValidEmail] = useState<string | undefined>("");
  const router = useRouter();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await getUsers();
        console.log(data);
        if (!data) {
          throw new Error("No password || email");
        }
        setData(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchUsers();
  }, []);

  const checkEmailValid = () => {
    const emailValue = emailRef.current?.value;
    const emailOutput = data.find((user) => {
      return user.email === emailValue;
    });

    if (emailOutput) {
      setEmailCheck(true);
      setValidEmail(emailValue);
    }
    if (!emailOutput) {
      setValidEmail("no");
    }
  };

  const resetPasswordAndRoute = async () => {
    const password = passwordRef.current?.value;
    const email = data.find((user) => user.email === validEmail)?.email;
    console.log(email);
    console.log("Sending email and password to backend...");

    await changePassword(email, password);

    router.push("/homepage");
  };

  return (
    <div className="bg-create-account bg-cover bg-center h-screen relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0 transition-all duration-500"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white mx-auto px-4 w-create-account-width">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
            />
          </svg>
        </div>
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold tracking-wider mb-3">
            Forgot password?
          </h1>
          <p className="text-md text-gray-50">
            Forgot your password? Don’t worry! Click here to reset it. Simply
            enter your registered email, and we’ll send you a link to securely
            create a new password.
          </p>
        </div>
        <div className="w-full max-w-sm mb-6">
          <label className="block text-md font-semibold mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your valid email"
            className="text-gray-100 w-full p-3 rounded border border-none focus:outline-none focus:ring-2 focus:ring-greenMain transition-all duration-300 focus:scale-105"
            style={{ backgroundColor: " rgb(55 65 81)" }}
            ref={emailRef}
          />
        </div>
        {emailCheck && (
          <div className="w-full max-w-sm mb-6">
            <label className="block text-md font-semibold mb-2">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="text-black w-full p-3 rounded border border-none focus:outline-none focus:ring-2 focus:ring-greenMain transition-all duration-300 focus:scale-105 text-gray-100"
              style={{ backgroundColor: " rgb(55 65 81)" }}
              ref={passwordRef}
            />
          </div>
        )}

        {!emailCheck ? (
          <>
            <button
              className="px-6 py-3 rounded-lg bg-greenMain text-white transition-all duration-300 hover:scale-105 active:scale-105"
              onClick={checkEmailValid}
            >
              Verify email
            </button>
            {validEmail === "no" && (
              <p className="text-red-500 mt-4">Email not found</p>
            )}
          </>
        ) : (
          <button
            className="px-6 py-3 rounded-lg bg-greenMain text-white transition-all duration-300 hover:scale-105 active:scale-105"
            onClick={resetPasswordAndRoute}
          >
            Reset password
          </button>
        )}
      </div>
    </div>
  );
}
