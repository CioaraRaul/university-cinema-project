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
export async function getUserData(id) {
  try {
    const { data, error } = await supabase
      .from("Users")
      .select("*")
      .eq("id", id);

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

export async function getReviews() {
  try {
    const { data, error } = await supabase.from("Review").select("*");

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
        ([_, value]) => value !== null && value !== "" // Skip null or empty values
      )
    );

    if (!cinemaId) {
      throw new Error("Cinema ID is required.");
    }

    if (Object.keys(fieldsToUpdate).length === 0) {
      throw new Error("No changes to update.");
    }

    const { data, error } = await supabase
      .from("Movies")
      .update(fieldsToUpdate)
      .eq("cinemaId", cinemaId)
      .select("*");

    console.log("Supabase Response:", JSON.stringify(data, null, 2));

    if (error) {
      throw new Error(error.message);
    }
    return { data, success: true };
  } catch (err) {
    console.error("Error updating movie data:", err);
    throw err;
  }
}
