/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { TUser } from "@/utils/Types";

export const loginUser = async (userData: TUser) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Ensures cookies are sent with the request
        body: JSON.stringify(userData),
      }
    );

    // Log the response to debug
    const result = await response.json();
    console.log(result);  // Check what the server is sending back

    if (!response.ok) {
      throw new Error(result.message || "Failed to login");
    }

    return result;
  } catch (error: any) {
    console.error(error); // Log the error to see what went wrong
    return { success: false, message: error.message || "An error occurred" };
  }
};




export const logout = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/logout`, {
      method: "POST",
      credentials: "include", // Ensure cookies are sent with the request
    });

    if (!res.ok) {
      throw new Error("Failed to logout");
    }

    // Optionally clear client-side cookies (if any)
    document.cookie = "token=; path=/; max-age=0";
    return { success: true, message: "Logged out successfully" };
  } catch (error: any) {
    console.error("Logout error:", error.message);
    return { success: false, message: error.message || "An error occurred" };
  }
};
