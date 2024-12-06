/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "./supabaseClient";

export default async function addMovie(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      title,
      genre,
      duration,
      rating,
      image,
      trailer,
      description,
      releaseDate,
    } = req.body;

    const { data, error } = await supabase
      .from("Movies")
      .insert([
        {
          title,
          genre,
          duration,
          rating,
          image,
          trailer,
          description,
          releaseDate,
        },
      ]);

    if (error) {
      console.error(error);
      return res.status(500).json({ message: error.message });
    }

    res.status(201).json({ message: "Movie created " });
  } else {
    res.status(405).json({ message: "Not allowd" });
  }
}
