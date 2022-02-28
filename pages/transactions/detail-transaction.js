import { useState } from "react";
import { useRouter } from "next/router";
import AdminLayout from "../../components/layout/AdminLayout";
import ModalAddItem from "../../components/component/ModalAddItem";

const DetailTransaction = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  return (
    <AdminLayout>
      <div className="flex flex-col w-full md:ml-4 px-2 items-stretch">
        <section>
          <h1 className="text-2xl font-medium">Detail Transaksi</h1>
          <nav className="flex mt-10 mb-4" aria-label="Breadcrumb">
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
                    Detail Transaksi
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </section>
        <section>
          <div className="md:flex">
            <div className="md:w-4/12">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/43/WhatsApp_click-to-chat_QR_code.png"
                className="h-72"
              />
            </div>
            <div className="md:w-4/12 flex flex-col md:mx-4">
              <h1 className="text-2xl font-semibold text-[#232020]">
                INVOICE#12378
              </h1>
              <div className="form-group flex flex-col mt-4 mb-4">
                <span className="text-sm text-[#B89F9F]">Nama Customer</span>
                <span className="text-[#232020] font-medium">
                  Wempy Virgana
                </span>
              </div>
              <div className="form-group flex flex-col mb-4">
                <span className="text-sm text-[#B89F9F]">Total Berat</span>
                <span className="text-[#232020] font-medium">20Kg</span>
              </div>
              <div className="form-group flex flex-col mb-4">
                <span className="text-sm text-[#B89F9F]">
                  Tanggal Transaksi
                </span>
                <span className="text-[#232020] font-medium">
                  6 Januari 2022
                </span>
              </div>
            </div>
            <div className="md:w-4/12 flex flex-col md:mx-4 md:mt-8">
              <div className="form-group flex flex-col mt-4 mb-4">
                <span className="text-sm text-[#B89F9F]">Nomor Whatsapp</span>
                <span className="text-[#232020] font-medium">087742781165</span>
              </div>
              <div className="form-group flex flex-col mb-4">
                <span className="text-sm text-[#B89F9F]">Total Tagihan</span>
                <span className="text-[#232020] font-medium">Rp120.000</span>
              </div>
              <div className="form-group flex flex-col mb-4">
                <span className="text-sm text-[#B89F9F]">
                  Status Pembayaran
                </span>
                <span className="text-[#232020] font-medium">Belum Bayar</span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="md:flex">
            <div className="md:w-4/12 flex flex-col">
              <div className="form-group flex flex-col mt-4 mb-4">
                <span className="text-sm text-[#B89F9F]">Alamat Customer</span>
                <span className="text-[#232020] font-medium">
                  Jalan Gatot Subroto no 02 tanjung pandan belitung
                </span>
              </div>
              <div className="form-group flex flex-col mb-4">
                <span className="text-sm text-[#B89F9F]">
                  Status proses laundry
                </span>
                <span className="text-[#232020] font-medium">
                  Finish(Sudah selesai)
                </span>
              </div>
            </div>
            <div className="md:w-3/12 flex flex-col md:mx-4 ">
              <div className="form-group flex flex-col mt-4 mb-4">
                <span className="text-sm text-[#B89F9F]">Status on-demand</span>
                <span className="text-[#232020] font-medium">
                  Sedang di antar
                </span>
              </div>
            </div>
            <div className="md:w-5/12 flex flex-col mb-8">
              <div className="h-96 overflow-y-auto bg-[#232020] rounded-md py-5 mt-6 md:mt-0 md:py-2">
                <div className="flex w-full justify-between px-4 mt-3">
                  <h1 className="text-white font-bold text-xl">Detail item</h1>
                </div>
                <div className="flex w-full justify-between px-4 mt-4">
                  <div>
                    <span>👕</span>
                    <span className="text-sm text-[#D7CDCD] mx-2">
                      Baju Kaos
                    </span>
                  </div>
                  <span className="text-sm text-[#B89F9F]">5x</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
};

export default DetailTransaction;
