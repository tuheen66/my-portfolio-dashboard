"use client";

import Image from "next/image";
import Link from "next/link";
import DeleteProjectButton from "./DeleteProjectButton";
import { useEffect, useState } from "react";
import { getAllProjects } from "@/utils/actions/ProjectService";
import { IFormInput } from "@/utils/Types";

const ProjectTable = () => {
  const [projects, setProjects] = useState<IFormInput[]>([]);

  useEffect(() => {
    async function loadProject() {
      const data = await getAllProjects();
      setProjects(data);
    }
    loadProject();
  }, []);

  const handleDeleteSuccess = (deletedId: string) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project._id !== deletedId)
    );
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table text-slate-900  dark:text-white">
          {/* head */}
          <thead className="text-slate-700  dark:text-white">
            <tr>
              <th>SL #</th>
              <th>Image</th>
              <th>Title</th>
              <th>Subtitle</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project: IFormInput, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask rounded-lg h-12 w-12">
                        <Image
                          src={project.image}
                          alt="Avatar Tailwind CSS Component"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{project.title}</td>
                <td>{project.sub_title}</td>

                <td>
                  <div className="join join-vertical">
                    <Link href={`/admin/projects/${project._id}`}>
                      <button className="btn btn-sm join-item text-gray-800 bg-slate-200 hover:bg-green-600 hover:text-white border-none  font-normal">
                        Update
                      </button>
                    </Link>
                    <DeleteProjectButton
                      id={project._id}
                      onDeleteSuccess={handleDeleteSuccess}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTable;
