"use client";
import BlogTable from "@/components/Blogs/BlogTable";
import Link from "next/link";


const BlogsManagement = () => {
  return (
    <div>
      <div className="my-12 mx-auto w-[90%]">
        <h1 className="text-center text-3xl mb-8 text-slate-700 dark:text-white">
          All Blogs
        </h1>
        <Link href="/admin/blogs/addBlog">
          <button className="btn btn-sm border-none text-white bg-orange-500 hover:bg-orange-800 font-normal">
            Add Blog
          </button>
        </Link>
        <BlogTable />
      </div>
    </div>
  );
};

export default BlogsManagement;
