/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  getSingleExperience,
  updateExperience,
} from "@/utils/actions/ExperienceService";
import { TExperience } from "@/utils/Types";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UpdateExperiencePage = () => {
  const { experienceId } = useParams();

  const [experience, setExperience] = useState<TExperience | null>(null);
  
  const router = useRouter();

  useEffect(() => {
    async function getExperience() {
      const experienceData = await getSingleExperience(experienceId as string);
      setExperience(experienceData);
    }
    getExperience();
  }, [experienceId]);

  console.log(experience);

  const detailDuties = experience?.duties.join(",");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const position = (form.elements.namedItem("position") as HTMLInputElement)
      .value;
    const company = (form.elements.namedItem("company") as HTMLInputElement)
      .value;
    const companyDescription = (
      form.elements.namedItem("companyDescription") as HTMLInputElement
    ).value;
    const startDate = (form.elements.namedItem("startDate") as HTMLInputElement)
      .value;
    const endDate = (form.elements.namedItem("endDate") as HTMLInputElement)
      .value;
    const duties = (form.elements.namedItem("duties") as HTMLInputElement)
      .value;

    const dutiesArray = duties.split(",");

    const experienceInfo = {
      position,
      company,
      companyDescription,
      startDate,
      endDate,
      duties: dutiesArray,
    };

    console.log(experienceInfo);
    try {
      const res = await updateExperience(
        experienceId as string,
        experienceInfo
      );
      if (res.modifiedCount > 0) {
        Swal.fire("Experience updated successfully !!!");
        router.push("/experience");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="w-[90%] max-w-xl mx-auto my-12 p-4 border border-gray-200  shadow-2xl shadow-slate-600 sm:p-6 md:p-8 bg-slate-400 dark:bg-slate-900 text-black dark:text-white rounded-xl ">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
          Update Experience
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="position"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Position
            </label>

            <input
              defaultValue={experience?.position}
              name="position"
              type="text"
              id="position"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block rounded-lg w-full p-2.5 mb-4 "
              placeholder="Position"
              required
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Company
            </label>

            <input
              name="company"
              defaultValue={experience?.company}
              type="text"
              id="company"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block rounded-lg w-full p-2.5 mb-4 "
              placeholder="Company"
              required
            />
          </div>

          <div>
            <label
              htmlFor="companyDescription"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Company Description
            </label>

            <input
              name="companyDescription"
              defaultValue={experience?.companyDescription}
              type="text"
              id="companyDescription"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block rounded-lg w-full p-2.5 mb-4 "
              placeholder="Company Description"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="startDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Start Date
              </label>

              <input
                name="startDate"
                defaultValue={experience?.startDate}
                type="date"
                id="startDate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block rounded-lg w-full p-2.5 mb-4 "
                required
              />
            </div>

            <div>
              <label
                htmlFor="endDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                End Date
              </label>

              <input
                name="endDate"
                defaultValue={experience?.endDate}
                type="date"
                id="endDate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block rounded-lg w-full p-2.5 mb-4 "
                required
              />
            </div>
          </div>

          <div className="">
            <label
              htmlFor="duties"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Duties and Responsibilities (comma separated)
            </label>
            <textarea
              defaultValue={detailDuties}
              id="duties"
              name="duties"
              placeholder="Duties and Responsibilities"
              className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
            ></textarea>
          </div>

          <button className="btn btn-sm px-6 bg-orange-500 border-none font-normal  text-white  hover:bg-orange-800">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateExperiencePage;
