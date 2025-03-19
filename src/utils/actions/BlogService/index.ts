/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { IBlog, IFormInput } from "@/utils/Types/types";

export const createBlog = async (data: IBlog) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const blogs = await res.json();

  return blogs;
};

export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs`);
    const blogs = await res.json();

    console.log(blogs);
    return blogs;
  } catch (error: any) {
    console.log(error);
  }
};

export const getSingleBlog = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${id}`);
  const blogs = await res.json();
  return blogs;
};

export const updateBlog = async (id: string, updatedData: IFormInput) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    }
  );
  const blogs = await res.json();

  return blogs;
};
