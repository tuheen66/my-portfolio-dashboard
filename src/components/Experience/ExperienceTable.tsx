"use client";

import { getAllExperiences } from "@/utils/actions/ExperienceService";
import { TExperience } from "@/utils/Types";
import Link from "next/link";
import { useEffect, useState } from "react";

const ExperienceTable = () => {
  const [experiences, setExperiences] = useState<TExperience[]>([]);

  useEffect(() => {
    async function loadExperience() {
      const data = await getAllExperiences();
      setExperiences(data);
    }
    loadExperience();
  }, []);

  return (
    <div>
      <div className="overflow-x-auto w-[90%] mx-auto">
        <table className="table text-slate-900  dark:text-white">
          {/* head */}
          <thead className="text-slate-700  dark:text-white">
            <tr>
              <th>SL #</th>
              <th>Position</th>
              <th>Company</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {experiences?.map((experience: TExperience, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{experience.position}</td>
                <td>{experience.company}</td>
                <td>{experience.startDate}</td>
                <td>{experience.endDate}</td>

                <td>
                  <div className="join join-vertical">
                    <Link href={`/experience/${experience._id}`}>
                      <button className="btn btn-sm  bg-green-600 hover:bg-green-800 border-none text-white font-normal">
                        Update
                      </button>
                    </Link>
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

export default ExperienceTable;
