import { NextApiRequest, NextApiResponse } from "next";

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

    res.status(201).json({ message: "Movie created " });
  }
}
