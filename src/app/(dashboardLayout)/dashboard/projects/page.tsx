"use client";


import ProjectTable from "@/components/Project/ProjectTable";
import Link from "next/link";

const ProjectManagement = () => {
  

  return (
    <div className="min-h-screen">
      <div className="my-12 w-[90%] mx-auto">
        <div className=" flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-slate-700 dark:text-white">All Projects</h1>
          <Link href="/dashboard/projects/addProject">
          <button className="btn btn-sm border-none text-white bg-orange-500 hover:bg-orange-800 font-normal">
            Add Project
          </button>
          </Link>
        </div>
        <div>
          <ProjectTable />
        </div>
      </div>

    
    </div>
  );
};

export default ProjectManagement;
