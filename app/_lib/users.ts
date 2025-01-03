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

export async function CreateUser(
  email: string,
  password: string,
  username: string,
  age: number
) {
  try {
    const { data: UserData, error: UserError } = await supabase
      .from("Users")
      .insert([{ email, password, username, age }]);

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
