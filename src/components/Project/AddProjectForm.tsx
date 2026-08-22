/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { createProject } from "@/utils/actions/ProjectService";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { FiPlusCircle, FiLink, FiCode, FiLayers } from "react-icons/fi";

const AddProjectForm = () => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const image = (form.elements.namedItem("image") as HTMLInputElement).value;
    const full_image = (
      form.elements.namedItem("full_image") as HTMLInputElement
    ).value;
    const sub_title = (form.elements.namedItem("sub_title") as HTMLInputElement)
      .value;
    const technology = (
      form.elements.namedItem("technologies") as HTMLInputElement
    ).value;
    const feature = (form.elements.namedItem("features") as HTMLInputElement)
      .value;
    const live_link = (form.elements.namedItem("live_link") as HTMLInputElement)
      .value;

    const technologies = technology.split(",").map(t => t.trim());
    const features = feature.split(",").map(f => f.trim());

    const projectInfo = {
      title,
      sub_title,
      image,
      full_image,
      technologies,
      features,
      live_link,
    };

    try {
      const res = await createProject(projectInfo);
      if (res.success) {
        await Swal.fire({
          title: "Success!",
          text: "Project created successfully!",
          icon: "success",
          confirmButtonColor: "#3B82F6",
        });
        router.push("/admin/projects");
      }
    } catch (err: any) {
      Swal.fire({
        title: "Error!",
        text: err.message || "Failed to create project",
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-400 to-slate-700">
            <div className="flex items-center">
              <FiPlusCircle className="h-8 w-8 text-white mr-3" />
              <h2 className="text-2xl font-bold text-white">Add New Project</h2>
            </div>
            <p className="mt-2 text-blue-100">
              Fill in the details below to add a new project to your portfolio
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Project Title
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    name="title"
                    type="text"
                    id="title"
                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="My Awesome Project"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="sub_title"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subtitle
                </label>
                <input
                  name="sub_title"
                  type="text"
                  id="sub_title"
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="A brief description of the project"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Thumbnail Image URL
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLink className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    name="image"
                    type="text"
                    id="image"
                    className="block w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="https://example.com/thumbnail.jpg"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="full_image"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Full Image URL
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLink className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    name="full_image"
                    type="text"
                    id="full_image"
                    className="block w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="https://example.com/full-image.jpg"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="technologies"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Technologies Used
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                    <FiCode className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="technologies"
                    name="technologies"
                    placeholder="React, Next.js, TailwindCSS, Node.js"
                    className="block w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition h-24"
                    required
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Separate technologies with commas
                </p>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="features"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Key Features
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                    <FiLayers className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="features"
                    name="features"
                    placeholder="Responsive design, Authentication, API integration"
                    className="block w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition h-24"
                    required
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Separate features with commas
                </p>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="live_link"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Live Project URL
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLink className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    name="live_link"
                    type="url"
                    id="live_link"
                    className="block w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="https://example.com"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="btn btn-sm px-6 bg-orange-500 border-none font-normal  text-white  hover:bg-orange-800"
              >
                <FiPlusCircle className="mr-2 -ml-1 h-5 w-5" />
                Add Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProjectForm;