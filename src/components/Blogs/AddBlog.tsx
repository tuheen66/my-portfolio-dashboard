/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { createBlog } from "@/utils/actions/BlogService";
import { TBlog } from "@/utils/Types";
import { useRouter } from "next/navigation";
import { Editor } from "primereact/editor";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddBlog = () => {
  const [text, setText] = useState("");
  const router = useRouter();
  const { register, handleSubmit } = useForm<TBlog>();

  const onSubmit: SubmitHandler<TBlog> = async (data: TBlog) => {
    const blogData = { ...data, blogContent: text };

    try {
      const res = await createBlog(blogData);
      if (res.success) {
        Swal.fire({ icon: "success", title: "Success", text: "Blog posted successfully!" });
        router.push("/admin/blogs");
      }
    } catch (err: any) {
      Swal.fire({ icon: "error", title: "Error", text: err.message });
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded-xl border border-gray-200 shadow-lg">
      <h1 className="mb-6 text-center text-3xl font-semibold">Create a New Blog</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="font-medium">Blog Title</label>
            <input
              className="mt-1 p-2 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              {...register("title")}
              placeholder="Enter blog title"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Author</label>
            <input
              className="mt-1 p-2 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              {...register("author")}
              placeholder="Author's name"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="font-medium">Image URL</label>
            <input
              className="mt-1 p-2 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              {...register("image")}
              placeholder="Enter image URL"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Category</label>
            <input
              className="mt-1 p-2 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              {...register("category")}
              placeholder="Enter category"
              required
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="font-medium">Blog Content</label>
          <Editor
            className="mt-2 border border-gray-300 rounded-lg p-2 bg-white dark:bg-gray-800"
            value={text}
            onTextChange={(e) => setText(e.htmlValue || "")}
            style={{ height: "300px" }}
          />
        </div>

        <button
          className="w-1/4 bg-orange-500 hover:bg-orange-600 text-white  py-3 rounded-lg transition duration-300"
          type="submit"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;