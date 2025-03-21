import Sidebar from "@/components/Sidebar";
import { PrimeReactProvider } from "primereact/api";
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
        <div className=" lg:w-9/12 ">
        <PrimeReactProvider>

        {children}
        </PrimeReactProvider>
        
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
