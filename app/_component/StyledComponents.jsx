"use client";

import styled from "styled-components";

export const StyledButtonLogin = styled.button`
  background-color: #22c55e;
  color: white;
  padding: 1rem 3.2rem;
  cursor: pointer;
  border-radius: 1rem;
  border: none;
  font-size: 1.4rem;
  width: 24rem;
  transition: 0.3s all;
  margin-bottom: 1.2rem;

  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledDivLogin = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  background-image: url("@../../loginBackground.jpg");
  background-size: cover;
`;

export const StyledH1Login = styled.h1`
  color: white;
  font-size: 3.2rem;
  letter-spacing: 0.05rem;
  transition: 3s all;
`;

export const StyledInputLogin = styled.input`
  width: 32rem;
  padding: 0.8rem 1.2rem;
  background-color: rgb(55 65 81);
  border: none;
  border-radius: 0.5rem;
  color: #22c55e;
  transition: all 0.3s;
  &:focus {
    outline: 0.15rem solid #22c55e;
    outline-offset: 0.1rem;
    transform: scale(1.05);
  }
`;

export const StyledTest = styled.h1`
  color: wheat;
`;

export const StyledHomepageH3 = styled.h3`
  color: #e5e7eb;
  font-size: 1.2rem;
  letter-spacing: 1.1px;
  font-weight: 200;
`;

export const StyledHomeDiv = styled.div`
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 1rem;
`;

export const StyledMovieH3 = styled.h3`
  color: #d4d1d1;

  &.active {
    color: #15803d;
  }
`;
