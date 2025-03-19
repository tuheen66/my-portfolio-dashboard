/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import DeleteBlogButton from "@/components/DeleteBlogButton";
import { createBlog, getAllBlogs } from "@/utils/actions/BlogService";
import { IBlog } from "@/utils/Types";


import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";



const BlogsManagement = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  useEffect(() => {
    async function loadBlogs() {
      const data = await getAllBlogs();
      setBlogs(data);
    }
    loadBlogs();
  }, []);

  const handleDeleteSuccess = (deletedId: string) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== deletedId));
  };

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

        <div>
          <div className="overflow-x-auto">
            <table className="table text-slate-900  dark:text-white">
              {/* head */}
              <thead className="text-slate-700  dark:text-white">
                <tr>
                  <th>SL #</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Author</th>
                  <th>View Detail</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog: IBlog, index: number) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask rounded-lg h-12 w-12">
                            <Image
                              src={blog.image}
                              alt="Avatar Tailwind CSS Component"
                              width={100}
                              height={100}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{blog.title}</td>
                    <td>{blog.category}</td>
                    <td>{blog.author}</td>
                    <td>
                      <Link href={`/blogs/${blog._id}`}>
                        <button className="text-center bg-[#e67e22]  px-4 py-2  flex items-center gap-4 rounded-lg text-white w-28">
                          View Details
                        </button>
                      </Link>
                    </td>
                    <td>
                      <div className="join join-vertical">
                        <Link href={`/dashboard/blogs/${blog._id}`}>
                          <button className="btn btn-sm join-item border-none text-white bg-green-700">
                            Update
                          </button>
                        </Link>
                        <DeleteBlogButton
                          id={blog._id}
                          onDeleteSuccess={handleDeleteSuccess}
                        />
                        {/* <button className="btn btn-sm join-item bg-red-700">Delete</button> */}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
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
