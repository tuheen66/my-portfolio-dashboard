/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { TBlog } from "@/utils/Types";

export const createBlog = async (data: TBlog) => {
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
    return blogs.data;
  } catch (error: any) {
    console.log(error);
  }
};

export const getSingleBlog = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${id}`);
  const blogs = await res.json();
  return blogs.data;
};

export const updateBlog = async (id: string, updatedData: TBlog) => {
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
