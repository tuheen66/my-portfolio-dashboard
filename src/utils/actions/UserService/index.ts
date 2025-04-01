/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { TUser } from "@/utils/Types";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export const loginUser = async (userData: TUser) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();

    // ?setting accessToken in cookies
    if (result.success) {
      (await cookies()).set("accessToken", result?.data?.accessToken);
    }
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  let decodedData = null;

  if (accessToken) {
    decodedData = await jwtDecode(accessToken);

    return decodedData;
  } else {
    return null;
  }
};




export const logout = async () => {
  (await cookies()).delete("accessToken");
};
