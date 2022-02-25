import { React, useState } from "react";
import Sidebar from "../component/Sidebar";
import ShowSidebar from "../component/ShowSidebar";

const AdminLayout = ({ children }) => {
  const [isSidebarShow, setSideBarShow] = useState(false);
  return (
    <div className="flex">
      <div className="md:w-1/5 ">
        <Sidebar
          isSidebarShow={isSidebarShow}
          setSideBarShow={setSideBarShow}
        />
        <ShowSidebar
          isSidebarShow={isSidebarShow}
          setSideBarShow={setSideBarShow}
        />
      </div>
      <div className="flex mt-9 ml-0 md:w-4/5 w-full min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
