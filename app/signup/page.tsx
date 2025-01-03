"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  StyledDivLogin,
  StyledH1Login,
  StyledInputLogin,
} from "../_component/StyledComponents";
import Link from "next/link";
import { getUsers } from "../_lib/cinema-service-data";
import { UserSignUP } from "../_component/Type";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [users, setUsers] = useState<UserSignUP[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [valid, setValid] = useState<boolean>(false);
  const [inputState, setInputState] = useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await getUsers();
        console.log(data);

        if (Array.isArray(data) && data.length > 0) {
          setUsers(data);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchUsers();
  }, []);

  const inputFunction = () => {
    setInputState((prev) => !prev);
  };

  const checkAccount = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const userFound = users.find((user) => {
      console.log(user, email, password);
      return user.email === email && user.password === password;
    });

    if (userFound && inputState) {
      setValid(true);
      setError(null); // Clear error
      router.push("/homepage");
    } else {
      setValid(false);
      // if (error) {
      //   setError("Invalid credentials or no users found ");
      //   return;
      // }
      if (!email && !password && !inputState) {
        setError("Fill the form and check box");
        return;
      }
      if (!email && !inputState) {
        setError("Fill the form(email) and check box");
        return;
      }
      if (!password && !inputState) {
        setError("Fill the form(password) and check box");
        return;
      }
      if (!inputState) {
        setError("Check the input box to move forwards");
        return;
      }
      if (!userFound) {
        setError("Wrong email or password");
        return;
      }
    }
  };

  return (
    <StyledDivLogin>
      <StyledH1Login className="mb-6">
        <span className="text-greenMain text-6xl tracking-wide">Film</span>
        Fussion
      </StyledH1Login>
      <StyledInputLogin
        className="mb-1"
        type="text"
        placeholder="email: test@test.com"
        ref={emailRef}
      />
      <StyledInputLogin
        type="password"
        placeholder="password: test"
        ref={passwordRef}
      />
      <div className="flex gap-2 w-32rem justify-between mt-2">
        <label className="flex gap-2">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            required
            onChange={inputFunction}
          />
          <p className="text-white ">I agree to the terms and conditions</p>
        </label>
        <Link
          href={"/forgotPassword"}
          className="text-white duration-300 hover:scale-110"
        >
          Forgot password
        </Link>
      </div>
      <button
        className="text-white bg-greenMain px-16 py-4 rounded-2xl mt-6"
        onClick={checkAccount}
      >
        Sign Up
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </StyledDivLogin>
  );
}
