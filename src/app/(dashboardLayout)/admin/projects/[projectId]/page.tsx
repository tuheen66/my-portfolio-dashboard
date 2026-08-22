/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  getSingleProject,
  updateProject,
} from "@/utils/actions/ProjectService";
import { IProjectInfo } from "@/utils/Types";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UpdateProject = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<IProjectInfo | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function getProject() {
      const projectData = await getSingleProject(projectId as string);
      setProject(projectData);
    }
    getProject();
  }, [projectId]);

  console.log(project);

  const detailFeatures = project?.features.join(",");
  const detailTechnologies = project?.technologies.join(",");

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

    const technologies = technology.split(",");
    const features = feature.split(",");

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
      const res = await updateProject(projectId as string, projectInfo);
      if (res.modifiedCount > 0) {
        Swal.fire("Project updated successfully !!!");
        router.push("/admin/projects");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
    <div className="p-6 sm:p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Update Project
        </h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Edit your project details below
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Title */}
          <div className="sm:col-span-2">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Project Title
            </label>
            <input
              name="title"
              defaultValue={project?.title}
              type="text"
              id="title"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 dark:border-gray-600  dark:bg-gray-700 dark:text-white transition duration-200"
              placeholder="Enter project title"
              required
            />
          </div>

          {/* Subtitle */}
          <div className="sm:col-span-2">
            <label
              htmlFor="sub_title"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Subtitle
            </label>
            <input
              name="sub_title"
              defaultValue={project?.sub_title}
              type="text"
              id="sub_title"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600  text-gray-700 dark:bg-gray-700 dark:text-white transition duration-200"
              placeholder="Brief project description"
              required
            />
          </div>

          {/* Image URLs */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Thumbnail Image URL
            </label>
            <input
              name="image"
              defaultValue={project?.image}
              type="url"
              id="image"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600  text-gray-700 dark:bg-gray-700 dark:text-white transition duration-200"
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>

          <div>
            <label
              htmlFor="full_image"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Full Image URL
            </label>
            <input
              name="full_image"
              defaultValue={project?.full_image}
              type="url"
              id="full_image"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600  text-gray-700 dark:bg-gray-700 dark:text-white transition duration-200"
              placeholder="https://example.com/full-image.jpg"
              required
            />
          </div>
        </div>

        {/* Technologies */}
        <div>
          <label
            htmlFor="technologies"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Technologies Used
          </label>
          <textarea
            defaultValue={detailTechnologies}
            id="technologies"
            name="technologies"
            rows={3}
            placeholder="React, Node.js, MongoDB, etc."
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:bg-gray-700 dark:text-white transition duration-200"
          ></textarea>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Separate technologies with commas
          </p>
        </div>

        {/* Features */}
        <div>
          <label
            htmlFor="features"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Key Features
          </label>
          <textarea
            defaultValue={detailFeatures}
            id="features"
            name="features"
            rows={3}
            placeholder="User authentication, Responsive design, etc."
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:bg-gray-700 dark:text-white transition duration-200"
          ></textarea>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Separate features with commas
          </p>
        </div>

        {/* Live Link */}
        <div>
          <label
            htmlFor="live_link"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Live Demo URL
          </label>
          <input
            name="live_link"
            defaultValue={project?.live_link}
            type="url"
            id="live_link"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:bg-gray-700 dark:text-white transition duration-200"
            placeholder="https://example.com/live-demo"
            required
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="btn btn-sm border-none text-white bg-orange-500 hover:bg-orange-800 font-normal"
          >
            Update Project
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
  );
};

export default UpdateProject;
