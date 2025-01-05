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
