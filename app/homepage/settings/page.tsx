"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function LogoutPage() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Error logging out:", error.message);
        return;
      }

      router.push("/");
    } catch (err) {
      console.error("Unexpected error during logout:", err);
    }
  };

  return (
    <div className="bg-gray-700 h-screen">
      <div className="flex justify-center items-center h-screen">
        <button
          onClick={handleLogout}
          className="text-green-50 px-8 py-4 bg-green-600 rounded-full cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
