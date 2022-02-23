import React from "react";

const WaitTransaction = () => {
  return (
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 h-full">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="text-sm font-normal text-white  py-2 text-left"
                >
                  Customer
                </th>
                <th
                  scope="col"
                  class="text-sm font-normal text-white  py-2 text-left"
                >
                  Tanggal masuk
                </th>
                <th
                  scope="col"
                  class="text-sm font-normal text-white  py-2 text-left"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-sm text-[#D7CDCD] font-light  py-4 whitespace-nowrap">
                  Wempy Virgana
                </td>
                <td class="text-sm text-[#D7CDCD] font-light py-4 whitespace-nowrap">
                  2 Januari 2022
                </td>
                <td class="text-sm text-[#D7CDCD] font-medium  py-4 whitespace-nowrap">
                  Pending
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WaitTransaction;
