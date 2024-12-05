import { supabase } from "./supabaseClient";

export async function handleData() {
  const { data, error } = await supabase.from("Movies").select("*");

  if (error) {
    res.status(500).json({ message: error.message });
  }

  res.status(200).json({ data });
}

export async function getMovieData(id) {
  try {
    const { data, error } = await supabase
      .from("Movies")
      .select("*")
      .eq("cinemaId", id);

    if (error) {
      console.error("Error fetching cinemaId data:", error.message);
      return null;
    }

    return data;
  } catch (err) {
    console.error("Error:", err.message);
    throw new Error(err.message);
  }
}
