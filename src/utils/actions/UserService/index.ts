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

export const logout = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/logout`, {
      method: 'POST',
      credentials: 'include', // Ensure cookies are sent with the request
    });

    if (!res.ok) {
      throw new Error('Failed to logout');
    }

    // Optionally clear client-side cookies (if any)
    document.cookie = "token=; path=/; max-age=0";
    return { success: true, message: 'Logged out successfully' };
  } catch (error: any) {
    console.error('Logout error:', error.message);
    return { success: false, message: error.message || 'An error occurred' };
  }
};