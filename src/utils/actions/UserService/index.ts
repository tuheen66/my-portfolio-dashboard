/* eslint-disable @typescript-eslint/no-explicit-any */
import { TUser } from "@/utils/Types";

export const loginUser = async (userData: TUser) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(userData),
    });

    if (!res.ok) {
      // Handle non-200 responses
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to login");
    }

    const result = await res.json();
    return result;
  } catch (error: any) {
    // Return a structured error response
    return { success: false, message: error.message || "An error occurred" };
  }
};
