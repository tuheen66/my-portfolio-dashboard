/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import BlogTable from "@/components/Blogs/BlogTable";
import { createBlog } from "@/utils/actions/BlogService";
import { IBlog } from "@/utils/Types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";

const BlogsManagement = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IBlog>();
  
  const onSubmit: SubmitHandler<IBlog> = async (data: IBlog) => {
    try {
      const res = await createBlog(data);

      if (res.insertedId) {
        Swal.fire("Blog posted successfully !!!");

        router.push("/blogs");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="my-12">
        <h1 className="text-center text-3xl mb-8 text-slate-700 dark:text-white">
          All Blogs
        </h1>
        <Link href="/dashboard/blogs/addBlog">
          <button className="btn btn-sm border-none text-white bg-orange-500 hover:bg-orange-800 font-normal">
            Add Blog
          </button>
        </Link>
        <BlogTable />
      </div>

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
          <div className="flex flex-col mb-2">
            <label>Blog Content</label>
            <textarea
              className="p-1 rounded-lg text-white px-2 py-1 bg-gray-50"
              {...register("blog")}
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
  );
};

export default BlogsManagement;
