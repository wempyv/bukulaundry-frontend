import React from "react";
import TableTransaction from "../../components/component/TableTransaction";
import AdminLayout from "../../components/layout/AdminLayout";

const index = () => {
  return (
    <AdminLayout>
      <div className="flex flex-col w-full md:ml-4 px-2 items-stretch">
        <section>
          <div className="flex md:flex-row flex-col">
            <h1 className="text-2xl font-medium">Data Transaksi</h1>
            <button className="rounded w-full md:w-[18rem] h-[2.8rem] bg-gray-900 text-white text-sm mt-6 md:my-0  hover:scale-105 hover:shadow-xl duration-300 ease-in-out ml-auto font-medium">
              + Tambah Transaksi
            </button>
          </div>
          <div className="flex w-full mt-8">
            <input
              type="text"
              className="h-10 border rounded-md w-full pl-2"
              placeholder="Cari data transaksi"
            />
          </div>
          <div className="md:flex block items-center">
            <TableTransaction />
          </div>
        </section>
      </div>
    </AdminLayout>
  );
};

export default index;
