import { useState } from "react";
import { useRouter } from "next/router";
import AdminLayout from "../../components/layout/AdminLayout";
import ModalAddItem from "../../components/component/ModalAddItem";
import axios from 'axios';

const AddTransaction = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const [nameCustomer, setNameCustomer] = useState('');
  const [address, setAddress] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [totalWeight, setTotalWeight] = useState();
  const [statusPayment, setStatusPayment] = useState('');
  const [laundryType, setLaundryType] = useState("CUCI + GOSOK");
  const [laundryStatus, setLaundryStatus] = useState('');
  const [additionalBill, setAdditionalBill] = useState();
  const [inputService, setInputService] = useState(false);
  const [statusOnDemand, setStatusOnDemand] = useState('');
  const [detailItem, setDetailItem] = useState([]);

  console.log(detailItem)

  const addTransactions = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:5000/transaction', {

    })
    router.push('/transactions');
  }

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
              onSubmit={addTransactions}
            >
              <div className="md:w-3/5 w-full">
                <div className="form-group mt-4 flex flex-col  w-full md:pr-4">
                  <label htmlFor="Nama customer" className="text-sm" >
                    Nama customer
                  </label>
                  <input
                    type="text"
                    className="border my-2 border-gray-300 rounded p-1" value={nameCustomer} onChange={(e) => setNameCustomer(e.target.value)}
                  />
                </div>
                <div className="form-group mt-4 flex flex-col  w-full md:pr-4">
                  <label htmlFor="Alamat customer" className="text-sm">
                    Alamat customer
                  </label>
                  <input
                    type="text"
                    className="border my-2 border-gray-300 rounded p-1" value={address} onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="form-group mt-4 flex flex-col  w-full md:pr-4">
                  <label htmlFor="Nomor whatsapp" className="text-sm">
                    Nomor whatsapp
                  </label>
                  <input
                    type="number"
                    className="border my-2 border-gray-300 rounded p-1" value={whatsappNumber} onChange={(e) => setWhatsappNumber(e.target.whatsappNumber)}
                  />
                </div>
                <div className="form-group mt-4 flex flex-col  w-full md:pr-4">
                  <label htmlFor="Email" className="text-sm">
                    Total berat
                  </label>
                  <input
                    placeholder="Kg"
                    type="text"
                    className="border my-2 border-gray-300 rounded p-1" value={totalWeight} onChange={(e) => setTotalWeight(e.target.value)}
                  />
                </div>
                <div className="form-group mt-4 flex flex-col  w-full md:pr-4">
                  <label htmlFor="" className="text-sm">
                    Status Pembayaran
                  </label>
                  <select className="border my-2 border-gray-300 bg-white rounded p-1" onChange={(e) => setStatusPayment(e.target.value)}>
                    <option >Pilih Status Pembayaran</option>
                    <option value="PENDING">Pending</option>
                    <option value="BAYAR DITEMPAT" >Bayar ditempat(Pending)</option>
                    <option value="SUDAH DIBAYAR" >Sudah dibayar(Sukses)</option>
                  </select>
                </div>
                <div className="form-group mt-4 flex flex-col  w-full md:pr-4">
                  <label htmlFor="Email" className="text-sm">
                    Type Laundry
                  </label>
                  <div className="flex my-2">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#CA9E00] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        value="CUCI + GOSOK"
                        checked={laundryType === "CUCI + GOSOK"}
                        onChange={(e) => setLaundryType(e.target.value)}
                      />
                      <label
                        className="form-check-label inline-block text-gray-800"
                        htmlFor="inlineRadio10"
                      >
                        Cuci + Gosok
                      </label>
                    </div>
                    <div className="form-check form-check-inline ml-5">
                      <input
                        className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#685b2b] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        value="CUCI"
                        checked={laundryType === "CUCI"}
                        onChange={(e) => setLaundryType(e.target.value)}
                      />
                      <label
                        className="form-check-label inline-block text-gray-800"
                        htmlFor="inlineRadio10"
                      >
                        Cuci
                      </label>
                    </div>
                    <div className="form-check form-check-inline mx-5">
                      <input
                        className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#232020] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        value="GOSOK"
                        checked={laundryType === "GOSOK"}
                        onChange={(e) => setLaundryType(e.target.value)}
                      />
                      <label
                        className="form-check-label inline-block text-gray-800"
                        htmlFor="inlineRadio20"
                      >
                        Gosok
                      </label>
                    </div>
                  </div>
                </div>
                <div className={`form-group mt-4  flex-col  w-full md:pr-4 ${laundryType === "CUCI + GOSOK" ? 'flex' : 'hidden'}`}>
                  <label htmlFor="" className="text-sm">
                    Status Proses Laundry
                  </label>
                  <select className="border my-2 border-gray-300 bg-white rounded p-1" onChange={(e) => setLaundryStatus(e.target.value)}>
                    <option>Pilih Proses Laundry</option>
                    <option value="Penerimaan Cucian">Penerimaan Cucian</option>
                    <option value="Pembasahan(Pre washings)">Pembasahan(Pre washings)</option>
                    <option value="Pencucian(Washing)">Pencucian(Washing)</option>
                    <option value="Pengeringan(Drying)">Pengeringan(Drying)</option>
                    <option value="Penyetrikaan(Pressing)">Penyetrikaan(Pressing)</option>
                    <option value="Selesai(Finish)">Selesai(Finish)</option>
                  </select>
                </div>
                <div className={`form-group mt-4  flex-col  w-full md:pr-4 ${laundryType === "CUCI" || laundryType === "GOSOK" ? 'flex' : 'hidden'}`}>
                  <label htmlFor="" className="text-sm">
                    Status Proses Laundry
                  </label>
                  <select className="border my-2 border-gray-300 bg-white rounded p-1">
                    <option>Penerimaan Cucian(Belum Selesai)</option>
                    <option>Sudah Selesai</option>
                  </select>
                </div>
                <div className="form-group mt-4 flex flex-col  w-full md:pr-4">
                  <label htmlFor="Total tagihan" className="text-sm">
                    Tagihan tambahan
                  </label>
                  <input
                    type="number"
                    placeholder="Rp"
                    className="border my-2 border-gray-300 rounded p-1" value={additionalBill} onChange={(e) => setAdditionalBill(e.target.value)}
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
                  <select className="border my-2 border-gray-300 bg-white rounded p-1" onChange={(e) => setStatusOnDemand(e.target.value)}>
                    <option>Pilih Status on-demand</option>
                    <option value="Sedang di proses(Pending)">Sedang di proses(Pending)</option>
                    <option value="Diantar ke-alamat tujuan">Diantar ke-alamat tujuan(Pending)</option>
                    <option value="Pending(Customer tidak ada dirumah)">Pending(Customer tidak ada dirumah)</option>
                    <option value="Selesai(Sudah diterima customer)">Selesai(Sudah diterima customer)</option>
                  </select>
                </div>
                <div className="form-group mt-8 flex itTagihan tambahanems-center justify-between w-full md:pr-4">
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
                  {detailItem !== [] && detailItem.map((item, index) => (
                    <div className="flex w-full justify-between px-4 mt-4">
                      <div>
                        <span>{item.icon}</span>
                        <span className="text-sm text-[#D7CDCD] mx-2">
                          {item.name_item}
                        </span>
                      </div>
                      <span className="text-sm text-[#B89F9F]">{item.total}x</span>
                    </div>
                  ))}
                </div>
                <button
                  type="submit"
                  className="rounded w-full h-[2.8rem] bg-[#232020] text-white text-sm mt-2 hover:bg-[#111010] hover:shadow-xl duration-300 ease-in-out font-medium ml-auto flex items-center justify-center"
                >
                  Tambah Transaksi
                </button>
              </div>
            </form>
          </div>
        </section>
        <ModalAddItem showModal={showModal} setShowModal={setShowModal} detailItem={detailItem} setDetailItem={setDetailItem} />
      </div>
    </AdminLayout>
  );
};

export default AddTransaction;
