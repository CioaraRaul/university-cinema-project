import React from "react";
import {
  StyledDivLogin,
  StyledH1Login,
  StyledInputLogin,
} from "../_component/StyledComponents";
import Link from "next/link";

export default function SignUp() {
  return (
    <StyledDivLogin>
      <StyledH1Login className="mb-6">
        <span className="text-greenMain text-6xl tracking-wide">Film</span>
        Fussion
      </StyledH1Login>
      <Link href={"/signup"}>
        <StyledInputLogin
          className="mb-1"
          type="text"
          placeholder="username: test1234"
        ></StyledInputLogin>
      </Link>
      <Link href={"/signup"}>
        <StyledInputLogin
          type="password"
          placeholder="password: test@test.com"
        ></StyledInputLogin>
      </Link>
      <div className="flex gap-2 w-32rem justify-between mt-2">
        <label className="flex gap-2">
          <input type="checkbox" id="agree" name="agree" />
          <p className="text-white ">I agree to the terms and conditions</p>
        </label>
        <Link href={"/forgotPassword"}>
          <button className="text-white duration-300 hover:scale-110">
            Forgot password
          </button>
        </Link>
      </div>
      <button className="text-white bg-greenMain px-16 py-4 rounded-2xl mt-6">
        Sign In
      </button>
    </StyledDivLogin>
  );
}
