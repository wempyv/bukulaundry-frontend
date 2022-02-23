import React from "react";
import CardRecentTransaction from "../components/component/CardRecentTransaction";
import AdminLayout from "../components/layout/AdminLayout";
CardRecentTransaction;
import WaitTransaction from "../components/component/WaitTransaction";

const index = () => {
  return (
    <AdminLayout>
      <div className="flex flex-col w-full md:ml-4 px-2 items-stretch">
        <section>
          <h1 className="text-2xl font-medium">Dashboard</h1>
          <div className="md:flex my-4 items-center">
            <div className="card bg-[#EBFDEE] md:w-4/12 flex my-2 flex-col p-5 rounded-xl md:mr-5">
              <div className="h-[50px] w-[50px] bg-[#232020] text-white items-center flex justify-center rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-xs text-gray-400 mt-4">Saldo</span>
              <span className="text-xl font-medium">Rp980.000</span>
            </div>
            <div className="card bg-[#E8F0FB] md:w-4/12 my-2 flex flex-col p-5 rounded-xl md:mr-5">
              <div className="h-[50px] w-[50px] bg-[#232020] text-white items-center flex justify-center rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <span className="text-xs text-gray-400 mt-4">
                Total Transaksi
              </span>
              <span className="text-xl font-medium">250</span>
            </div>
            <div className="card bg-[#FFEFE7] md:w-4/12 my-2 flex flex-col p-5 rounded-xl md:mr-5">
              <div className="h-[50px] w-[50px] bg-[#232020] text-white items-center flex justify-center rounded-2xl">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-xs text-gray-400 mt-4">
                Sedang Menunggu
              </span>
              <span className="text-xl font-medium">34</span>
            </div>
          </div>
        </section>
        <section className="mt-4">
          <h1 className="text-xl font-medium text-[#232020]">
            Riwayat Transaksi
          </h1>
          <p className="text-xs font-light text-gray-400">
            Riwayat transaksi yang berstatus sukses
          </p>
        </section>
        <section className="md:flex block md:flex-row flex-col mt-4">
          <div className="md:w-3/5  flex flex-col">
            <CardRecentTransaction />
            <CardRecentTransaction />
            <CardRecentTransaction />
            <CardRecentTransaction />
          </div>
          <div className="md:w-2/5 flex flex-col bg-[#232020]  md:mr-5 rounded-lg px-4">
            <h1 className="text-white font-bold my-3">
              Menunggu untuk di proses
            </h1>
            <WaitTransaction />
          </div>
        </section>
      </div>
    </AdminLayout>
  );
};

export default index;
