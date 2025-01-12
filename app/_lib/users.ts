import { supabase } from "./supabaseClient";

export default async function changePassword(
  email: string | undefined,
  newPassword: string | undefined
) {
  if (!email || !newPassword) {
    console.error("Email or new passord not filled");
    return;
  }

  try {
    const { data: updatedData, error: updateError } = await supabase
      .from("Users")
      .update({ password: newPassword })
      .eq("email", email);

    if (updateError) {
      console.error("Error updating password:", updateError.message);
      return;
    }
    console.log("Password updated successfully:", updatedData);
    return updatedData;
  } catch (error) {
    if (error instanceof Error)
      console.error("Unexpected error:", error.message);
  }
}

export async function createReview(
  user_id: number,
  movie_id: number,
  review: string,
  created_at: string
) {
  try {
    const { data: maxIdData, error: maxIdError } = await supabase
      .from("Review")
      .select("review_id")
      .order("review_id", { ascending: false })
      .limit(1);
    if (maxIdError)
      throw new Error("Failed to fetch the highest ID: " + maxIdError.message);

    const newID = (maxIdData?.[0]?.review_id || 0) + 1;

    const { data: ReviewData, error: ReviewError } = await supabase
      .from("Review")
      .insert([
        {
          review_id: newID,
          user_id,
          movie_id,
          review,
          created_at,
        },
      ])
      .select();

    if (ReviewError) {
      throw new Error(`Error creating review: ${ReviewError.message}`);
    }

    console.log("Review added succesfully");
    return ReviewData;
  } catch (err) {
    if (err instanceof Error) {
      console.error("Unexpected erorr: ", err.message);
    } else {
      console.error("Unexpected error:", err);
    }
  }
}
