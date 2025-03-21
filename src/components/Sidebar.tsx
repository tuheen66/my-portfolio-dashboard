"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { logout } from "@/utils/actions/UserService";

const Sidebar = () => {
  const router = useRouter();
  const pathName = usePathname();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="bg-slate-900 dark:bg-gray-300 h-full py-4 px-8 dark:text-slate-900  text-white">
      <ul className="space-y-4 mx-auto">
        <li>
          <Link
            href="/"
            className={
              pathName === "/"
                ? "bg-slate-400 dark:bg-slate-500 w-full px-4 py-1 text-slate-900 dark:text-white rounded-lg"
                : "dark:hover:text-gray-800 hover:text-gray-400 hover:underline"
            }
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            href="/blogs"
            className={
              pathName === "/blogs"
                ? "bg-slate-400 dark:bg-slate-500 w-full px-4 py-1 text-slate-900 dark:text-white rounded-lg"
                : "dark:hover:text-gray-800 hover:text-gray-400 hover:underline"
            }
          >
            Blogs Management
          </Link>
        </li>

        <li>
          <Link
            href="/projects"
            className={
              pathName === "/projects"
                ? "bg-slate-400 dark:bg-slate-500 w-full px-4 py-1 text-slate-900 dark:text-white rounded-lg"
                : "dark:hover:text-gray-800 hover:text-gray-400 hover:underline"
            }
          >
            Project Management
          </Link>
        </li>

        <li>
          <Link
            href="/skills"
            className={
              pathName === "/skills"
                ? "bg-slate-400 dark:bg-slate-500 w-full px-4 py-1 text-slate-900 dark:text-white rounded-lg"
                : "dark:hover:text-gray-800 hover:text-gray-400 hover:underline"
            }
          >
            Skill Management
          </Link>
        </li>

        <li>
          <Link
            href="/experience"
            className={
              pathName === "/experience"
                ? "bg-slate-400 dark:bg-slate-500 w-full px-4 py-1 text-slate-900 dark:text-white rounded-lg"
                : "dark:hover:text-gray-800 hover:text-gray-400 hover:underline"
            }
          >
            Experience Management
          </Link>
        </li>

        <li>
          <Link
            href="/message"
            className={
              pathName === "/message"
                ? "bg-slate-400 dark:bg-slate-500 w-full px-4 py-1 text-slate-900 dark:text-white rounded-lg"
                : "dark:hover:text-gray-800 hover:text-gray-400 hover:underline"
            }
          >
            Message Management
          </Link>
        </li>
        <hr className="border-b-2  border-[#e67e22]" />

        <li>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 py-2 rounded-md dark:text-slate-900  text-white"
          >
            Logout
          </button>
        </li>

        <ThemeToggle />
      </ul>
    </div>
  );
};

export default Sidebar;
