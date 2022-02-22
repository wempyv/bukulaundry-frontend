import React from "react";

const ShowSidebar = ({ setSideBarShow, isSidebarShow }) => {
  return (
    <span
      className={`absolute top-0 right-0 mx-5 my-8 md:hidden ${
        isSidebarShow ? "hidden" : "block"
      }`}
      onClick={() => setSideBarShow(!isSidebarShow)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </span>
  );
};

export default ShowSidebar;
