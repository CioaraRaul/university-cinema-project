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

export async function getMovies() {
  try {
    const { data, error } = await supabase.from("Movies").select("*");

    if (error) {
      throw new Error({ message: error.message });
    }

    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getUsers() {
  try {
    const { error, data } = await supabase.from("Users").select("*");
    if (error) {
      throw new Error({ message: message.error });
    }

    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function deleteMovie(id) {
  try {
    const { data, error } = await supabase
      .from("Movies")
      .delete()
      .eq("cinemaId", id);

    if (error) {
      console.error("Error deleting movie:", error.message);
      throw new Error(error.message);
    }

    console.log("Deleted movie:", data);
    return data;
  } catch (err) {
    console.error("Error in deleteMovie function:", err.message);
    throw new Error(err.message);
  }
}

export async function ChangeMovieData(movieData) {
  try {
    console.log(movieData);
    const { cinemaId, ...updatedData } = movieData;

    const fieldsToUpdate = Object.fromEntries(
      Object.entries(updatedData).filter(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, value]) => value !== null && value !== ""
      )
    );

    if (Object.keys(fieldsToUpdate).length === 0) {
      throw new Error("No changes");
    }

    const { data, error } = await supabase
      .from("Movies")
      .update(fieldsToUpdate)
      .eq("cinemaId", cinemaId);

    if (!data) {
      throw new Error(error);
    }
    if (error) {
      console.error(error.message);
    }

    return data;
  } catch (err) {
    console.error({ message: err });
  }
}
