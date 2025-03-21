/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { createBlog } from "@/utils/actions/BlogService";
import { TBlog } from "@/utils/Types";
import { useRouter } from "next/navigation";
import { Editor } from "primereact/editor";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";

const TextEditor = () => {
  const [text, setText] = useState("");

  const router = useRouter();
  const { register, handleSubmit } = useForm<TBlog>();

  const onSubmit: SubmitHandler<TBlog> = async (data: TBlog) => {
    const blogData = {
      ...data,
      blogContent: text,
    };

    console.log(blogData);

    try {
      const res = await createBlog(blogData);

      if (res.insertedId) {
        Swal.fire("Blog posted successfully !!!");

        router.push("/dashboard/blogs");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
        Add a new Blog
      </h2>

      <div className="lg:w-[50%] mx-auto my-12 bg-slate-400 dark:bg-slate-900 text-black dark:text-white p-8 rounded-lg border border-gray-200  shadow-2xl shadow-slate-600">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="mb-4 text-center text-2xl">Create Blog</h1>
          <div className="flex flex-col mb-2 ">
            <label>Blog Tittle</label>
            <input
              className="p-1 rounded-lg text-gray-900  px-2 py-1 bg-gray-50"
              {...register("title")}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label>Author</label>
            <input
              className="p-1 rounded-lg text-gray-900  px-2 py-1 bg-gray-50"
              {...register("author")}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label>Image</label>
            <input
              className="p-1 rounded-lg text-gray-900  px-2 py-1 bg-gray-50"
              {...register("image")}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label>Category</label>
            <input
              className="p-1 rounded-lg text-gray-900  px-2 py-1 bg-gray-50"
              {...register("category")}
            />
          </div>
          <div className="card text-gray-800 dark:text-gray-300">
            <Editor
              className="text-gray-800 dark:text-gray-300"
              value={text}
              onTextChange={(e) => setText(e.htmlValue || "")}
              style={{ height: "320px" }}
            />
          </div>

          <div className="   flex items-center ">
            <button
              className="text-center bg-[#e67e22]  px-4 py-2  flex items-center gap-4 rounded-lg text-white  mt-4"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* <div className="card text-gray-800 dark:text-gray-300">
        <Editor
          className="text-gray-800 dark:text-gray-300"
          value={text}
          onTextChange={(e) => setText(e.htmlValue || "")}
          style={{ height: "320px" }}
        />
      </div> */}
    </div>
  );
};

export default TextEditor;
