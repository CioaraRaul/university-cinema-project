import { supabase } from "./supabaseClient";

export async function createMovie(
  title: string,
  genre: string,
  duration: number,
  rating: number,
  image: string,
  description: string,
  releaseDate: string,
  ageMinimumReq: number
) {
  try {
    const { data: maxIdData, error: maxIdError } = await supabase
      .from("Movies")
      .select("cinemaId")
      .order("cinemaId", { ascending: false })
      .limit(1);

    if (maxIdError) {
      throw new Error("Failed to fetch the highest ID: " + maxIdError.message);
    }

    const newId = (maxIdData?.[0]?.cinemaId || 0) + 1;

    const { data: UserData, error: UserError } = await supabase
      .from("Movies")
      .insert([
        {
          cinemaId: newId,
          title,
          genre,
          duration,
          rating,
          image,
          description,
          releaseDate,
          ageMinimumReq,
        },
      ]);

    if (UserError) {
      throw new Error(`Error creating user: ${UserError.message}`);
    }

    console.log("User succesfully created");
    return UserData;
  } catch (err) {
    if (err instanceof Error) {
      console.error("Unexpected erorr: ", err.message);
    } else {
      console.error("Unexpected error:", err);
    }
  }
}
