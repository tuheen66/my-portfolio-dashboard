/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { addSkill } from "@/utils/actions/SkillService";
import Swal from "sweetalert2";

const AddSkillForm = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const logo = e.target.logo.value;
    const name = e.target.name.value;

    const skill = {
      logo,
      name,
    };
    try {
      const res = await addSkill(skill);
      if (res.success) {
        Swal.fire("Skill added successfully !!!");
        form.reset()
        console.log(skill);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mt-10">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
          Add a new skill
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="logo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Skill logo link
            </label>

            <input
              name="logo"
              type="text"
              id="logo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block rounded-lg w-full p-2.5 mb-4 "
              placeholder="skill logo link"
              required
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Skill name
            </label>

            <input
              name="name"
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block rounded-lg w-full p-2.5 mb-4 "
              placeholder="skill name"
              required
            />
          </div>

          <button className="btn btn-sm px-6 bg-orange-500 border-none font-normal  text-white  hover:bg-orange-800">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSkillForm;
