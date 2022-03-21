import { useState } from "react";
import { useRouter } from "next/router";
import AdminLayout from "../../components/layout/AdminLayout";
import ModalAddItem from "../../components/component/ModalAddItem";

const AddTransaction = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputService, setInputService] = useState(false);
  const router = useRouter();
  return (
    <AdminLayout>
      <div className="flex flex-col w-full md:ml-4 px-2 items-stretch">
        <section>
          <h1 className="text-2xl font-medium">Tambah Transaksi Baru</h1>

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
                    Tambah Transaksi
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="my-4 items-center">
            <form
              className="w-full md:flex block"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="md:w-3/5 w-full">
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
                  <label htmlFor="" className="text-sm">
                    Status Pembayaran
                  </label>
                  <select className="border my-2 border-gray-300 bg-white rounded p-1">
                    <option>Pending</option>
                    <option>Bayar ditempat(Pending)</option>
                    <option>Sudah dibayar(Sukses)</option>
                  </select>
                </div>
                <div className="form-group mt-4 flex flex-col  w-full md:pr-4">
                  <label htmlFor="" className="text-sm">
                    Status Proses Laundry
                  </label>
                  <select className="border my-2 border-gray-300 bg-white rounded p-1">
                    <option>Penerimaan Cucian</option>
                    <option>Pembasahan(Pre washings)</option>
                    <option>Pencucian(Washing)</option>
                    <option>Pengeringan(Drying)</option>
                    <option>Penyetrikaan(Pressing)</option>
                    <option>Selesai(Finish)</option>
                  </select>
                </div>
                <div className="form-group mt-4 flex flex-col  w-full md:pr-4">
                  <label htmlFor="Total tagihan" className="text-sm">
                    Tagihan tambahan
                  </label>
                  <input
                    type="number"
                    placeholder="Rp"
                    className="border my-2 border-gray-300 rounded p-1"
                  />
                </div>
                <div className="form-group mt-4 flex flex-col  w-full md:pr-4">
                  <label htmlFor="Email" className="text-sm">
                    Service
                  </label>
                  <div className="flex my-2">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#CA9E00] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                        checked={inputService === true}
                        onChange={() => setInputService(true)}
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
                        checked={inputService === false}
                        onChange={() => setInputService(false)}
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
                <div className={inputService ? 'form-group mt-4 flex flex-col  w-full md:pr-4' : 'hidden'}>
                  <label htmlFor="" className="text-sm">
                    Status on-demand
                  </label>
                  <select className="border my-2 border-gray-300 bg-white rounded p-1">
                    <option>Sedang di proses(Pending)</option>
                    <option>Diantar ke-alamat tujuan(Pending)</option>
                    <option>Pending(Customer tidak ada dirumah)</option>
                    <option>Selesai(Sudah diterima customer)</option>
                  </select>
                </div>
                <div className="form-group mt-8 flex items-center justify-between w-full md:pr-4">
                  <label htmlFor="Email" className="text-sm">
                    Total
                  </label>
                  <h1 className="text-2xl font-semibold text-[#CA9E00]">
                    Rp125.000
                  </h1>
                </div>
              </div>

              <div className="md:w-2/5 w-full ">
                <div className="h-96 overflow-y-auto bg-[#232020] rounded-md py-5 mt-6 md:mt-0 md:py-2">
                  <div className="flex w-full justify-between px-4 mt-3">
                    <h1 className="text-white font-bold my-3 ">
                      Detail item Customer
                    </h1>
                    <a
                      className="text-white hover:text-gray-300  text-3xl cursor-pointer"
                      onClick={() => setShowModal(true)}
                    >
                      +
                    </a>
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
                <button
                  type="submit"
                  className="rounded w-full h-[2.8rem] bg-[#232020] text-white text-sm mt-2 hover:scale-105 hover:shadow-xl duration-300 ease-in-out font-medium ml-auto flex ipencuciantems-center justify-center"
                >
                  Tambah Transaksi
                </button>
              </div>
            </form>
          </div>
        </section>
        <ModalAddItem showModal={showModal} setShowModal={setShowModal} />
      </div>
    </AdminLayout>
  );
};

export default AddTransaction;
