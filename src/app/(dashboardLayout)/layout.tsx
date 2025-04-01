"use client"
import Sidebar from "@/components/Sidebar";
import { PrimeReactProvider } from "primereact/api";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Toggle Button */}
      <button
        className="lg:hidden p-3 fixed top-4 left-4 bg-gray-800 text-white rounded-md shadow-lg z-50"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FiMenu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`lg:w-3/12 w-full lg:fixed lg:h-screen lg:overflow-y-auto bg-gray-800 text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed top-0 left-0 h-full z-40`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="lg:w-9/12 w-full lg:ml-[25%] p-4">
        <PrimeReactProvider>{children}</PrimeReactProvider>
      </div>
    </div>
  );
};

export default DashboardLayout;