import Sidebar from "@/components/Sidebar";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row ">
        <div className="lg:w-3/12">
          <Sidebar />
        </div>
        <div className=" lg:w-9/12  mx-12">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
