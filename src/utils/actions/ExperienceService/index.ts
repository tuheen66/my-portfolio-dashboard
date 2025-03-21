import { TExperience } from "@/utils/Types";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllExperiences = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/experience`
    );
    const response = await res.json();

    if (!res.ok) {
      throw new Error(
        `Failed to fetch projects: ${res.status} ${res.statusText}`
      );
    }

    return response;
  } catch (error: any) {
    console.log(error);
  }
};

export const getSingleExperience = async (experienceId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/experience/${experienceId}`
    );

    if (!res.ok) {
      throw new Error(
        `Failed to fetch project: ${res.status} ${res.statusText}`
      );
    }

    return res.json();
  } catch (error: any) {
    console.log(error);
  }
};

export const updateExperience = async (
  id: string,
  experienceInfo: TExperience
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/experience/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(experienceInfo),
      }
    );

    const experience = res.json();
    
    return experience;
  } catch (error: any) {
    console.log(error);
  }
};

export const addExperience = async (experienceInfo: TExperience) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/experience`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(experienceInfo),
      }
    );

    if (!res.ok) {
      throw new Error(
        `Failed to create project: ${res.status} ${res.statusText}`
      );
    }

    return res.json();
  } catch (error: any) {
    console.log(error);
  }
};
