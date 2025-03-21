/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getAllSkills = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/skills`);
    const response = await res.json();

    return response;
  } catch (error: any) {
    console.log(error);
  }
};

export const addSkill = async (data: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/skills`, {
      method: "POST",
      headers: {
        
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const response = await res.json();

    return response;
  } catch (error: any) {
    console.log(error);
  }
};
