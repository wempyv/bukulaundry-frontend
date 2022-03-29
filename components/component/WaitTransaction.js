import React from "react";
import moment from 'moment';
import 'moment/locale/id'
moment.locale('id');

const WaitTransaction = ({ transaction }) => {
  return (
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 h-full">
      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="text-sm font-normal text-white  py-2 text-left"
                >
                  Customer
                </th>
                <th
                  scope="col"
                  className="text-sm font-normal text-white  py-2 text-left"
                >
                  Tanggal Transaksi
                </th>
                <th
                  scope="col"
                  className="text-sm font-normal text-white  py-2 text-left"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-sm text-[#D7CDCD] font-light  py-4 whitespace-nowrap">
                  {transaction.name_customer}
                </td>
                <td className="text-sm text-[#D7CDCD] font-light py-4 whitespace-nowrap">
                  {moment(transaction.createdAt).format('LL')}
                </td>
                <td className="text-sm text-[#D7CDCD] font-medium  py-4 whitespace-nowrap">
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
