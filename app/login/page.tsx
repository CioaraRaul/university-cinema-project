import React from "react";
import {
  StyledButtonLogin,
  StyledDivLogin,
  StyledH1Login,
} from "../_component/StyledComponents";
import Link from "next/link";

export default function Login() {
  return (
    <StyledDivLogin>
      <StyledH1Login className="mb-6">
        <span className="text-green-500 text-6xl tracking-wide">Film</span>
        Fusion
      </StyledH1Login>
      <Link href={"/signup"}>
        <StyledButtonLogin>Sign up</StyledButtonLogin>
      </Link>
      <Link href={"/createAccount"}>
        <StyledButtonLogin>Create Account</StyledButtonLogin>
      </Link>
    </StyledDivLogin>
  );
}
