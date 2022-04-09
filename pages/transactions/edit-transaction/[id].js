import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import ModalAddItem from "../../../components/component/ModalAddItem";
import axios from 'axios';
import { userContext } from "../../../context/UserContext";
import AdminLayout from "../../../components/layout/AdminLayout";

const EditTransaction = () => {
  const router = useRouter();
  const { id } = router.query
  const user = useContext(userContext);

  const [showModal, setShowModal] = useState(false);

  const [transactionUnique, setTransactionUnique] = useState('');
  const [nameCustomer, setNameCustomer] = useState('');
  const [address, setAddress] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [totalWeight, setTotalWeight] = useState(1);
  const [statusPayment, setStatusPayment] = useState('');
  const [laundryType, setLaundryType] = useState("CUCI + GOSOK");
  const [laundryStatus, setLaundryStatus] = useState('');
  const [additionalBill, setAdditionalBill] = useState(0);
  const [inputService, setInputService] = useState(false);
  const [statusOnDemand, setStatusOnDemand] = useState('');
  const [detailItem, setDetailItem] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState([]);


  useEffect(() => {
    user.refreshToken();
    totalChange()
    setPaymentMethod(user.paymentMethod)
    if (router.isReady) {
      getTransactionById()
    }
  }, [router.isReady])

  const getTransactionById = async () => {
    const response = await axios.get(`http://localhost:5000/transaction/${id}`);
    setTransactionUnique(response.data.transaction_unique);
    setNameCustomer(response.data.name_customer);
    setAddress(response.data.address);
    setWhatsappNumber(response.data.whatsapp_number);
    setTotalWeight(response.data.total_weight);
    setStatusPayment(response.data.status_payment);
    setLaundryType(response.data.type_laundry);
    setLaundryStatus(response.data.status_laundry);
    setAdditionalBill(response.data.additional_bill);
    setInputService(response.data.service);
    setStatusOnDemand(response.data.status_on_demand);
    setDetailItem(JSON.parse(response.data.detail_item))
  }

  const totalChange = () => {
    const total = totalWeight * checkTypeLaundry() + checkService() + parseInt(additionalBill, 10)
    return total;
  }

  const checkService = () => {
    if (inputService === true) {
      return user.serviceFee
    }
    return 0
  }

  const checkTypeLaundry = () => {
    if (laundryType === 'CUCI + GOSOK') {
      return user.priceWashRubbing
    } else if (laundryType === 'CUCI') {
      return user.priceWash
    }
    return user.priceRubbing
  }

  const addTransactions = async (e) => {
    e.preventDefault()
    const totalPayment = totalWeight * checkTypeLaundry() + parseInt(additionalBill, 10) + checkService()

    await axios.patch(`http://localhost:5000/transaction/${id}`, {
      transaction_unique: transactionUnique,
      user_id: user.id,
      name_customer: nameCustomer,
      address: address,
      whatsapp_number: whatsappNumber,
      total_weight: totalWeight,
      total_bill: totalPayment,
      status_payment: statusPayment,
      type_laundry: laundryType,
      status_laundry: laundryStatus,
      additional_bill: additionalBill,
      service: inputService,
      status_on_demand: statusOnDemand,
      detail_item: detailItem
    })
    router.push('/transactions');
  }

  const deleteItem = (itemId) => {
    setDetailItem(detailItem.filter(({ id }) => id !== itemId));
  };

  return (
    <AdminLayout>
      <div className="flex flex-col w-full md:ml-4 px-2 items-stretch">
        <section>
          <h1 className="text-2xl font-medium">Edit Transaksi</h1>
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
                    Edit Transaksi
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
                    className="border my-2 border-gray-300 rounded p-1" value={whatsappNumber} onChange={(e) => setWhatsappNumber(e.target.value)}
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
                    <option value={statusPayment} selected>{statusPayment}</option>
                    {
                      paymentMethod.map((payment, index) => (
                        <option value={`${payment.name_payment}(${payment.name} - ${payment.id_payment}`} >{payment.name_payment}({payment.name} - {payment.id_payment})</option>
                      ))
                    }
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
                    <option value={laundryStatus} selected>{laundryStatus}</option>
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
                  <select className="border my-2 border-gray-300 bg-white rounded p-1" onChange={(e) => setLaundryStatus(e.target.value)}>
                    <option value={laundryStatus} selected>{laundryStatus}</option>
                    <option value='Penerimaan Cucian'>Penerimaan Cucian(Belum Selesai)</option>
                    <option value="Sudah Selesai">Sudah Selesai</option>
                  </select>
                </div>
                <div className="form-group mt-4 flex flex-col  w-full md:prWempy Virgana-4">
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
                    <option value={statusOnDemand} selected>{statusOnDemand}</option>
                    <option value="Sedang di proses(Pending)">Sedang di proses(Pending)</option>
                    <option value="Diantar ke-alamat tujuan">Diantar ke-alamat tujuan(Pending)</option>
                    <option value="Pending(Customer tidak ada dirumah)">Pending(Customer tidak ada dirumah)</option>
                    <option value="Selesai(Sudah diterima customer)">Selesai(Sudah diterima customer)</option>
                  </select>
                </div>
                <h1 className="mt-8 text-2xl font-semibold">Rincihan Pembayaran</h1>
                <div className="form-group mt-4  flex items-center justify-between w-full md:pr-4 capitalize">
                  <label htmlFor="Email" className="text-sm">
                    Total berat {totalWeight}kg x Rp{checkTypeLaundry()}
                  </label>
                  <h1 className="font-medium text-gray-700">
                    💰 +Rp{checkTypeLaundry() * totalWeight}
                  </h1>
                </div>
                <div className="form-group  flex items-center justify-between w-full md:pr-4 capitalize">
                  <label htmlFor="Email" className="text-sm">
                    Jasa Service Antar Jemput
                  </label>
                  <h1 className="font-medium text-gray-700">
                    💰 +Rp{checkService()}
                  </h1>
                </div>
                <div className="form-group  flex items-center justify-between w-full md:pr-4 capitalize">
                  <label htmlFor="Email" className="text-sm">
                    Biaya Tambahan
                  </label>
                  <h1 className="font-medium text-gray-700">
                    💰 +Rp{additionalBill}
                  </h1>
                </div>
                <div className="form-group flex items-center mt-2 justify-between w-full md:pr-4">
                  <label htmlFor="Email" className="text-sm font-semibold">
                    Total
                  </label>
                  <h1 className="text-2xl font-semibold text-[#CA9E00]">
                    Rp{totalChange()}
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
                      <div className="flex items-center">
                        <span className="text-sm text-[#B89F9F] mx-5">{item.total}x</span>
                        <button onClick={() => deleteItem(item.id)}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  type="submit"
                  className="rounded w-full h-[2.8rem] bg-[#232020] text-white text-sm mt-2 hover:bg-[#111010] hover:shadow-xl duration-300 ease-in-out font-medium ml-auto flex items-center justify-center"
                >
                  Simpan Transaksi
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

export default EditTransaction;
