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
        router.push("/dashboard/projects");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div>
        <div className="w-[90%] max-w-xl  md:w-[90%] mx-auto my-12 p-4 bg-slate-300 border border-gray-200  shadow-2xl shadow-slate-600 sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 rounded-xl ">
          <h5 className="text-2xl font-bold text-gray-700 dark:text-white text-center">
            Update Project
          </h5>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>

              <input
                name="title"
                defaultValue={project?.title}
                type="text"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block rounded-lg w-full p-2.5 mb-4 "
                placeholder="Project title"
                required
              />
            </div>

            {/* subtitle  */}
            <div>
              <label
                htmlFor="sub_title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Subtitle
              </label>

              <input
                name="sub_title"
                defaultValue={project?.sub_title}
                type="text"
                id="sub_title"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder="Project subtitle"
                required
              />
            </div>

            {/* ------------------------------- */}

            <div className="">
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Image
              </label>

              <input
                name="image"
                defaultValue={project?.image}
                type="text"
                id="image"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder="Thumbnail image link"
                required
              />
            </div>

            <div className="">
              <label
                htmlFor="full_image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Image
              </label>

              <input
                name="full_image"
                defaultValue={project?.full_image}
                type="text"
                id="full_image"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder="Full image link"
                required
              />
            </div>

            {/* ========================================== */}
            <div className="">
              <label
                htmlFor="tech_1"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Technologies (comma separated)
              </label>
              <textarea
                defaultValue={detailTechnologies}
                id="technologies"
                name="technologies"
                placeholder="Technologies"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
              ></textarea>
            </div>

            {/* ----------------------------------- */}

            <div className="">
              <label
                htmlFor="tech_1"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Features (comma separated)
              </label>
              <textarea
                defaultValue={detailFeatures}
                id="features"
                name="features"
                placeholder="Features"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
              ></textarea>
            </div>

            {/* --------------------------------- */}

            <div>
              <label
                htmlFor="live_link"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Live Link
              </label>

              <input
                name="live_link"
                defaultValue={project?.live_link}
                type="text"
                id="live_link"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder="  Live Link"
                required
              />
            </div>

            <button className=" px-6 py-2 rounded-lg bg-orange-600 text-white  hover:bg-orange-800 font-normal border-none">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProject;
