import React from "react";
import Sidebar from "../component/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-6/12">{children}</div>
    </div>
  );
};

export default AdminLayout;
