
import ExperienceTable from "@/components/Experience/ExperienceTable";
import Link from "next/link";
import React from "react";

const ManageExperiencePage = () => {
  return (
    <div className="min-h-screen ">
      <div className="my-12">
        <div className=" flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-slate-700 dark:text-white">
            My Experiences
          </h1>
          <Link href="/dashboard/experience/addExperience">
            <button className="btn btn-sm border-none text-white bg-orange-500 hover:bg-orange-800 font-normal">
              Add Experience
            </button>
          </Link>
        </div>
      </div>
      <ExperienceTable />
     
    </div>
  );
};

export default ManageExperiencePage;
