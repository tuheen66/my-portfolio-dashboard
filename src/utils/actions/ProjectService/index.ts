/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { IProjectInfo } from "@/utils/Types/types";

export const createProject = async (data: IProjectInfo) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const project = await res.json();

  return project;
};

export const getAllProjects = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`);
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

export const getSingleProject = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${id}`
  );
  const project = await res.json();
  return project;
};

export const updateProject = async (id: string, updatedData: IProjectInfo) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    }
  );
  const project = await res.json();

  return project;
};
