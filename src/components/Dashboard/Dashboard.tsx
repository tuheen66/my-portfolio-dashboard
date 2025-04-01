"use client";

import { getAllBlogs } from "@/utils/actions/BlogService";
import { getAllMessage } from "@/utils/actions/MessageService";
import { getAllProjects } from "@/utils/actions/ProjectService";
import { IFormInput, TBlog, TMessage } from "@/utils/Types";
import { useEffect, useState } from "react";
import PieCharts from "../PieChart/PieChart";

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
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 my-12">
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-50 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-500">
                Total Projects
              </h3>
              <p className="text-3xl font-bold text-gray-800">
                {projects?.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blogs Card */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-50 text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-500">Total Blogs</h3>
              <p className="text-3xl font-bold text-gray-800">
                {blogs?.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Card */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-50 text-purple-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-500">
                Total Messages
              </h3>
              <p className="text-3xl font-bold text-gray-800">
                {messages?.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>

      <PieCharts/>
    </div>
    </div>
  );
};

export default Dashboard;
