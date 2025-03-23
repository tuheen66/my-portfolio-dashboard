"use client";

import { getAllBlogs } from "@/utils/actions/BlogService";
import { getAllMessage } from "@/utils/actions/MessageService";
import { getAllProjects } from "@/utils/actions/ProjectService";
import { IFormInput, TBlog, TMessage } from "@/utils/Types";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [projects, setProjects] = useState<IFormInput[]>([]);
  const [blogs, setBlogs] = useState<TBlog[]>([]);
  const [messages, setMessages] = useState<TMessage[]>([]);

  useEffect(() => {
    async function loadProject() {
      const data = await getAllProjects();
      setProjects(data);
    }
    loadProject();
  }, []);

  useEffect(() => {
    async function loadBlogs() {
      const data = await getAllBlogs();
      setBlogs(data);
    }
    loadBlogs();
  }, []);

  useEffect(() => {
    async function loadMessage() {
      const data = await getAllMessage();
      setMessages(data);
    }
    loadMessage();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center my-12 mx-auto">
      <div className="flex flex-col justify-center items-center border-2 border-orange-600 rounded-lg p-6 w-64 mx-auto">
        <p className="text-3xl font-semibold">Total Projects</p>
        <p className="text-3xl font-semibold">{projects?.length}</p>
      </div>
      <div className="flex flex-col justify-center items-center border-2 border-orange-600 rounded-lg p-6 w-64 mx-auto">
        <p className="text-3xl font-semibold">Total Blogs</p>
        <p className="text-3xl font-semibold">{blogs?.length}</p>
      </div>
      <div className="flex flex-col justify-center items-center border-2 border-orange-600 rounded-lg p-6 w-64 mx-auto">
        <p className="text-3xl font-semibold">Total Messages</p>
        <p className="text-3xl font-semibold">{messages?.length}</p>
      </div>
    </div>
  );
};

export default Dashboard;
