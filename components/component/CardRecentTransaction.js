import React from "react";

const CardRecentTransaction = () => {
  return (
    <div className="flex items-center text-[#232020] my-3 text-sm whitespace-nowrap overflow-x-auto">
      <div className="w-2/12">
        <div className="w-12 h-12 bg-[#EBFDF0] rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 rotate-[50deg]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
        </div>
      </div>
      <div className="w-4/12">
        <h1>Selfiani talia sari</h1>
      </div>
      <div className="w-3/12 md:mx-0 mx-5">
        <h1>1 Januari 2022</h1>
      </div>
      <div className="w-3/12">
        <h1 className="text-[#CA9E00] font-medium">+Rp120.000</h1>
      </div>
    </div>
  );
};

export default CardRecentTransaction;
