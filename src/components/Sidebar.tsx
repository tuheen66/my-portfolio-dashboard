"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <div className="bg-slate-900 dark:bg-gray-300 h-full py-4 px-8 dark:text-slate-900  text-white">
      <ul className="space-y-4 mx-auto">
        <li>
          <Link
            href="/dashboard"
            className={
              pathName === "/dashboard"
                ? "bg-slate-400 dark:bg-slate-500 w-full px-4 py-1 text-slate-900 dark:text-white rounded-lg"
                : "dark:hover:text-gray-800 hover:text-gray-400 hover:underline"
            }
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            href="/dashboard/blogs"
            className={
              pathName === "/dashboard/blogs"
                ? "bg-slate-400 dark:bg-slate-500 w-full px-4 py-1 text-slate-900 dark:text-white rounded-lg"
                : "dark:hover:text-gray-800 hover:text-gray-400 hover:underline"
            }
          >
            Blogs Management
          </Link>
        </li>

        <li>
          <Link
            href="/dashboard/projects"
            className={
              pathName === "/dashboard/projects"
                ? "bg-slate-400 dark:bg-slate-500 w-full px-4 py-1 text-slate-900 dark:text-white rounded-lg"
                : "dark:hover:text-gray-800 hover:text-gray-400 hover:underline"
            }
          >
            Project Management
          </Link>
        </li>

        <li>
          <Link
            href="/dashboard/skills"
            className={
              pathName === "/dashboard/skills"
                ? "bg-slate-400 dark:bg-slate-500 w-full px-4 py-1 text-slate-900 dark:text-white rounded-lg"
                : "dark:hover:text-gray-800 hover:text-gray-400 hover:underline"
            }
          >
            Skill Management
          </Link>
        </li>
        
        <li>
          <Link
            href="/dashboard/experience"
            className={
              pathName === "/dashboard/experience"
                ? "bg-slate-400 dark:bg-slate-500 w-full px-4 py-1 text-slate-900 dark:text-white rounded-lg"
                : "dark:hover:text-gray-800 hover:text-gray-400 hover:underline"
            }
          >
            Experience Management
          </Link>
        </li>

        <li>
          <Link
            href="/dashboard/message"
            className={
              pathName === "/dashboard/message"
                ? "bg-slate-400 dark:bg-slate-500 w-full px-4 py-1 text-slate-900 dark:text-white rounded-lg"
                : "dark:hover:text-gray-800 hover:text-gray-400 hover:underline"
            }
          >
            Message Management
          </Link>
        </li>
        <hr className="border-b-2  border-[#e67e22]" />
        <li>
          <Link
            href="/login"
            className="flex items-center space-x-2 py-2 rounded-md dark:text-slate-900  text-white"
          >
            Login
          </Link>
        </li>

        <ThemeToggle/>
      </ul>
    </div>
  );
};

export default Sidebar;
