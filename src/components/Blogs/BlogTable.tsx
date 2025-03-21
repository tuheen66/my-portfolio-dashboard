"use client";

import Link from "next/link";
import DeleteBlogButton from "../DeleteBlogButton";
import Image from "next/image";
import { useEffect, useState } from "react";

import { getAllBlogs } from "@/utils/actions/BlogService";
import { TBlog } from "@/utils/Types";

const BlogTable = () => {
  const [blogs, setBlogs] = useState<TBlog[]>([]);

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

  return (
    <div>
      <div className="my-12">
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {blogs?.map((blog: TBlog, index: number) => (
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
                      <div className="join join-vertical">
                        <Link href={`/dashboard/blogs/${blog._id}`}>
                          <button className="btn btn-sm join-item border-none text-white bg-green-600 hover:bg-green-800 font-normal">
                            Update
                          </button>
                        </Link>
                        <DeleteBlogButton
                          id={blog._id}
                          onDeleteSuccess={handleDeleteSuccess}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTable;
