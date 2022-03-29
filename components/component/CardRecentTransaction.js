import React from "react";
import moment from 'moment';
import 'moment/locale/id'
moment.locale('id');

const CardRecentTransaction = ({ transaction }) => {
  return (
    <div className="flex items-center text-[#232020] my-3 text-sm whitespace-nowrap">
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
        <h1>{transaction.name_customer}</h1>
      </div>
      <div className="w-3/12 md:mx-0 mx-6">
        <h1>{moment(transaction.createdAt).format('LL')}</h1>
      </div>
      <div className="w-3/12">
        <h1 className="text-[#CA9E00] font-medium">+Rp{transaction.total_bill}</h1>
      </div>
    </div>
  );
};

export default CardRecentTransaction;
