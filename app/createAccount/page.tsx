"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createUser } from "../_lib/users";
import { Approve } from "../_component/Type";
import { getUsers } from "../_lib/cinema-service-data";

const approve: Approve[] = [
  {
    approveEmail: false,
    approvePassword: false,
    approveUsername: false,
    approveAge: false,
  },
];

export default function Page() {
  const usernameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const ageRef = useRef<HTMLInputElement>();

  const [error, setError] = useState<boolean>(false);
  const [errorMessageEmail, setErrorMessageEmail] = useState<string>("");

  const [errorMessagePassword, setErrorMessagePassword] = useState<string>("");
  const [errorMessageUsername, setErrorMessageUsername] = useState<string>("");
  const [errorMessageAge, setErrorMessageAge] = useState<string>("");

  const router = useRouter();

  // const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setSelectedImage(reader.result as string);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const ValidateEmail = (email: string): boolean => {
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|mail\.com|gmail\.ro|yahoo\.ro|mail\.ro|test\.ro|test\.com)$/;
    const emailTest = emailRegex.test(email);
    return emailTest;
  };

  const validateUsername = (username: string): boolean => {
    const usernameRegex = /[a-zA-Z]|\d/; // Matches at least one letter or one digit
    const isValid = usernameRegex.test(username);
    console.log("Input username:", username);
    console.log("Validation result:", isValid);
    return isValid;
  };

  const validateAge = (age: string): boolean => {
    const numberRegex = /^\d+$/;
    const isValid = numberRegex.test(age);
    return isValid;
  };

  const startWithLetterCheck = (input: string): boolean => {
    return /^[a-zA-Z]/.test(input);
  };

  const uniqueInput = async (
    inputFromUser: string,
    field: string
  ): Promise<boolean> => {
    try {
      const UserData = await getUsers();
      if (!Array.isArray(UserData)) {
        console.error("Invalid format of users");
        return false;
      }
      const isDuplicate = UserData.find(
        (user) => String(user[field]) === String(inputFromUser)
      );

      if (isDuplicate) {
        setErrorMessageEmail("Duplicate values");
        return false;
      }
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const checkFields = async () => {
    const username = usernameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    const age = ageRef.current?.value || "";

    if (!username || !email || !password || !age) {
      setError(true);
    }

    if (username && email && password && age) {
      const isValidEmail: boolean = ValidateEmail(email);
      const emailStartsLetter: boolean = startWithLetterCheck(email);

      const isValidUsername: boolean = validateUsername(username);
      const usernameStartsLetter: boolean = startWithLetterCheck(username);

      const isValidPassword: boolean = validateUsername(password);

      const isValidAge: boolean = validateAge(age);

      let checkUnique: boolean;

      if (isValidEmail && emailStartsLetter) {
        checkUnique = await uniqueInput(email, "email");
        console.log(`Check unique response: ${checkUnique}`);
        if (checkUnique) {
          setError(false);
          setErrorMessageEmail("");
          approve[0].approveEmail = true;
        } else {
          setErrorMessageEmail("This email was used before");
        }
        // await CreateUser(email, password, username, parseInt(age));
      } else {
        setErrorMessageEmail(
          "Please enter a valid email (e.g., @gmail.com, @yahoo.com). And it has to start with letter"
        );
        return;
      }

      console.log(`Username valid: ${isValidUsername}`);
      console.log(`Username starts with letter: ${usernameStartsLetter}`);
      if (isValidUsername && usernameStartsLetter) {
        checkUnique = await uniqueInput(username, "username");
        console.log(`Check unique response: ${checkUnique}`);
        if (checkUnique) {
          setError(false);
          setErrorMessageUsername("");
          approve[0].approveUsername = true;
        } else {
          setErrorMessageUsername("This username was used before");
        }
        // await CreateUser(email, password, username, parseInt(age));
      }

      console.log(`Password valid: ${isValidPassword}`);
      if (isValidPassword) {
        checkUnique = await uniqueInput(password, "password");
        console.log(`Check unique response: ${checkUnique}`);
        if (checkUnique) {
          setError(false);
          setErrorMessagePassword("");
          approve[0].approvePassword = true;
        } else {
          setErrorMessagePassword("This password was used before");
        }
        // await CreateUser(email, password, username, parseInt(age));
      }

      console.log(`Check age format only digits: ${isValidAge}`);
      if (isValidAge) {
        checkUnique = await uniqueInput(age, "age");
        console.log(`Check unique response: ${checkUnique}`);
        if (checkUnique) {
          setError(false);
          setErrorMessageAge("");
          approve[0].approveAge = true;
        } else {
          setErrorMessageAge("This age was used before");
        }

        if (
          approve[0].approveAge &&
          approve[0].approveEmail &&
          approve[0].approvePassword &&
          approve[0].approveUsername
        ) {
          await createUser(email, password, username, parseInt(age));

          router.push("/homepage");
        }
      }
      //router.push("homepage");
    }
    // return `/homepage?username=${encodeURIComponent(
    //   username
    // )}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(
    //   password
    // )}&age=${encodeURIComponent(age)}&image=${encodeURIComponent(
    //   selectedImage || "default-profile-picture.png"
    // )}`;
  };

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
              className="rounded-3xl border-none text-white bg-gray-600 placeholder-white transition-all duration-300 px-3 py-4 focus:outline-2 outline-offset-2 outline-greenMain focus:scale-x-105"
              required
              ref={usernameRef}
            />{" "}
            {errorMessageUsername && (
              <p className="text-red-500 mt-1 text-sm">
                {errorMessageUsername}
              </p>
            )}
            <input
              className="rounded-3xl border-none text-white bg-gray-600 placeholder-white transition-all duration-300 px-3 py-4 focus:outline-2 outline-offset-2 outline-greenMain focus:scale-x-105"
              type="text"
              required
              placeholder="email:test@test.com"
              ref={emailRef}
            />
            {errorMessageEmail && (
              <p className="text-red-500 mt-1 text-sm">{errorMessageEmail}</p>
            )}
            <input
              className="rounded-3xl border-none text-white bg-gray-600 placeholder-white transition-all duration-300 px-3 py-4 focus:outline-2 outline-offset-2 outline-greenMain focus:scale-x-105"
              type="password"
              placeholder="password:test1."
              required
              ref={passwordRef}
            />
            {errorMessagePassword && (
              <p className="text-red-500 mt-1 text-sm">
                {errorMessagePassword}
              </p>
            )}
            <input
              type="number"
              placeholder="age: 21"
              className="rounded-3xl border-none text-white bg-gray-600 placeholder-white transition-all duration-300 px-3 py-4 focus:outline-2 outline-offset-2 outline-greenMain focus:scale-x-105"
              required
              ref={ageRef}
            />
            {errorMessageAge && (
              <p className="text-red-500 mt-1 text-sm">{errorMessageAge}</p>
            )}
          </div>
          <div className="mt-10">
            <button
              onClick={checkFields}
              className="text-white bg-greenMain px-8 py-4 rounded-3xl  transition-all duration-300 active:-translate-y-2"
            >
              Create Account
            </button>
            {error && (
              <p className="text-red-500 mt-4 mb-8">
                Check all fields to be completely formed
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
