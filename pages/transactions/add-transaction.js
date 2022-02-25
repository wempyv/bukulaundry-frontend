import React from "react";
import { useRouter } from "next/router";
import AdminLayout from "../../components/layout/AdminLayout";

const AddTransaction = () => {
  const router = useRouter();
  return (
    <AdminLayout>
      <div className="flex flex-col w-full md:ml-4 px-2 items-stretch">
        <section>
          <h1 className="text-2xl font-medium">Tambah Transaksi Baru</h1>

          <nav className="flex mt-10 mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li>
                <div className="flex items-center">
                  <a
                    onClick={() => router.push("/transactions")}
                    className="text-sm text-blue-600 hover:text-blue-900 cursor-pointer "
                  >
                    Data Transaksi
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-[#232020]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-1 text-sm  text-[#232020] md:ml-2 dark:text-gray-500">
                    Tambah Transaksi
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="md:flex block my-4 items-center">
            <form
              className="md:w-1/2 w-full"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="form-group mt-4 flex flex-col  w-full md:pr-4">
                <label htmlFor="Nama customer" className="text-sm">
                  Nama customer
                </label>
                <input
                  type="text"
                  className="border my-2 border-gray-300 rounded p-1"
                />
              </div>
              <div className="form-group mt-4 flex flex-col  w-full md:pr-4">
                <label htmlFor="Alamat customer" className="text-sm">
                  Alamat customer
                </label>
                <input
                  type="text"
                  className="border my-2 border-gray-300 rounded p-1"
                />
              </div>
              <div className="form-group mt-4 flex flex-col  w-full md:pr-4">
                <label htmlFor="Nomor whatsapp" className="text-sm">
                  Nomor whatsapp
                </label>
                <input
                  type="number"
                  className="border my-2 border-gray-300 rounded p-1"
                />
              </div>
              <div className="form-group mt-4 flex flex-col  w-full md:pr-4">
                <label htmlFor="Email" className="text-sm">
                  Total berat
                </label>
                <input
                  placeholder="Kg"
                  type="text"
                  className="border my-2 border-gray-300 rounded p-1"
                />
              </div>
              <div className="form-group mt-4 flex flex-col  w-full md:pr-4">
                <label htmlFor="Total tagihan" className="text-sm">
                  Total tagihan tambahan
                </label>
                <input
                  type="number"
                  placeholder="Rp"
                  className="border my-2 border-gray-300 rounded p-1"
                />
              </div>
              <div className="form-group mt-4 flex flex-col  w-full md:pr-4">
                <label htmlFor="Email" className="text-sm">
                  Total tagihan
                </label>
                <div className="flex my-2">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#CA9E00] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="inlineRadio10"
                    >
                      Antar jemput
                    </label>
                  </div>
                  <div className="form-check form-check-inline mx-5">
                    <input
                      className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#232020] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="inlineRadio20"
                    >
                      Tidak ada service
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group mt-8 flex items-center justify-between w-full md:pr-4">
                <label htmlFor="Email" className="text-sm">
                  Total
                </label>
                <h1 className="text-2xl font-semibold text-[#CA9E00]">
                  Rp125.000
                </h1>
              </div>
            </form>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
};

export default AddTransaction;
