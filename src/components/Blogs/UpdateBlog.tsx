/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { getSingleBlog, updateBlog } from "@/utils/actions/BlogService";
import { TBlog } from "@/utils/Types";
import { useParams, useRouter } from "next/navigation";
import { Editor } from "primereact/editor";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdateBlog = () => {
  const { blogId } = useParams();
  const router = useRouter();

  const [text, setText] = useState("");
  const [blog, setBlog] = useState<TBlog | null>(null);

  const { register, handleSubmit, reset } = useForm<TBlog>({
    defaultValues: {
      title: blog?.title,
      author: blog?.author,
      image: blog?.image,
      category: blog?.category,
      blogContent: blog?.blogContent,
    },
  });

  useEffect(() => {
    async function getBlog() {
      const blogData = await getSingleBlog(blogId as string);
      setBlog(blogData);
      reset(blogData);
    }

    getBlog();
  }, [blogId, reset]);

  // const onSubmit: SubmitHandler<TBlog> = async (data: TBlog) => {
  //   const updatedData = {
  //     ...data,
  //     title: data.title || "",
  //     author: data.author || "",
  //     image: data.image || "",
  //     category: data.category || "",
  //     blogContent: text,
  //   };

  //   const res = await updateBlog(blogId as string, updatedData);
  //   console.log(res)
  //   try {
  //     if (res.modifiedCount > 0) {
  //       Swal.fire("Blog updated successfully !!!");

  //       router.push("/dashboard/blogs");
  //     }
  //   } catch (err: any) {
  //     console.log(err.message);
  //   }
  // };

    const onSubmit: SubmitHandler<TBlog> = async (data: TBlog) => {
      const blogData = {
        ...data,
        blogContent: text,
      };

      console.log(blogData);

      try {
        const res = await updateBlog(blogId as string, blogData);

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
      <div>
        <div className="w-[90%] mx-auto my-12 bg-slate-400 dark:bg-slate-900 text-black dark:text-white p-8 rounded-lg border border-gray-200  shadow-2xl shadow-slate-600">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="mb-4 text-center text-2xl">Update Blog</h1>

            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
              <div className="flex flex-col mb-2 w-full">
                <label>Blog Tittle</label>
                <input
                  className="p-1 rounded-lg text-gray-900  px-2 py-1 bg-gray-50"
                  {...register("title")}
                />
              </div>

              <div className="flex flex-col mb-2 w-full">
                <label>Author</label>
                <input
                  className="p-1 rounded-lg text-gray-900  px-2 py-1 bg-gray-50"
                  {...register("author")}
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
              <div className="flex flex-col mb-2 w-full">
                <label>Image</label>
                <input
                  className="p-1 rounded-lg text-gray-900  px-2 py-1 bg-gray-50"
                  {...register("image")}
                />
              </div>

              <div className="flex flex-col mb-2 w-full">
                <label>Category</label>
                <input
                  className="p-1 rounded-lg text-gray-900  px-2 py-1 bg-gray-50"
                  {...register("category")}
                />
              </div>
            </div>
            <div className="card text-gray-800 dark:text-gray-300">
              <Editor
                className="text-gray-800 dark:text-gray-300"
                // defaultValue={blog?.blogContent}
                value={blog?.blogContent}
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
      </div>
    </div>
  );
};

export default UpdateBlog;
