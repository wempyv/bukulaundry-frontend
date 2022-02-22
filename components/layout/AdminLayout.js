import React from "react";
import Sidebar from "../component/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="md:w-1/5 ">
        <Sidebar />
      </div>
      <div className="flex mt-9 ml-0 md:w-4/5 w-full">{children}</div>
    </div>
  );
};

export default AdminLayout;
