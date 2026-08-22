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
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
  <div className="w-full max-w-md mx-auto">
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Add New Skill
          </h2>
          <p className="text-gray-500 dark:text-gray-300 mt-2">
            Fill in the details to add a new skill to your profile
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="logo"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Skill Logo URL
            </label>
            <input
              name="logo"
              type="url"
              id="logo"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="https://example.com/logo.png"
              required
            />
          </div>
          
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Skill Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="e.g. React, Python"
              required
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="btn btn-sm border-none text-white bg-orange-500 hover:bg-orange-800 font-normal"
            >
              Add Skill
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
  );
};

export default AddSkillForm;
