/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { addExperience } from "@/utils/actions/ExperienceService";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const AddExperienceForm = () => {

  const router = useRouter()
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
      const res = await addExperience(experienceInfo);
      console.log(res);
      if (res.success) {
        Swal.fire("Experience added successfully !!!");
        form.reset();
        router.push("/admin/experience")
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-12">
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
    <div className="p-6 bg-gradient-to-r from-slate-500 to-slate-800">
      <h2 className="text-2xl font-bold text-center text-white">
        Add New Experience
      </h2>
    </div>
    
    <form onSubmit={handleSubmit} className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="position" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Position *
          </label>
          <input
            name="position"
            type="text"
            id="position"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600  dark:bg-gray-700 dark:text-white transition-all"
            placeholder="Senior Developer"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Company *
          </label>
          <input
            name="company"
            type="text"
            id="company"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600  dark:bg-gray-700 dark:text-white transition-all"
            placeholder="Tech Corp Inc."
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="companyDescription" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Company Description *
        </label>
        <input
          name="companyDescription"
          type="text"
          id="companyDescription"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600  dark:bg-gray-700 dark:text-white transition-all"
          placeholder="Leading SaaS provider in the tech industry"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Start Date *
          </label>
          <input
            name="startDate"
            type="date"
            id="startDate"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600  dark:bg-gray-700 dark:text-white transition-all text-gray-400"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            End Date *
          </label>
          <input
            name="endDate"
            type="date"
            id="endDate"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600  dark:bg-gray-700 dark:text-white transition-all text-gray-400"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="duties" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Duties and Responsibilities *
        </label>
        <textarea
          id="duties"
          name="duties"
          rows={4}
          placeholder="List responsibilities separated by commas (e.g., Developed new features, Optimized performance, Led team meetings)"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600  dark:bg-gray-700 dark:text-white transition-all"
        ></textarea>
        <p className="text-xs text-gray-500 dark:text-gray-400">Separate each duty with a comma</p>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="btn btn-sm border-none text-white bg-orange-500 hover:bg-orange-800 font-normal"
        >
          Save Experience
        </button>
      </div>
    </form>
  </div>
</div>
  );
};

export default AddExperienceForm;
