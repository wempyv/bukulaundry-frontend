import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import AdminLayout from "../components/layout/AdminLayout";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { userContext } from "../context/UserContext";
import toast, { Toaster } from 'react-hot-toast';
import ModalAddPayment from "../components/component/ModalAddPayment";

const index = () => {
  const router = useRouter();
  const userToken = useContext(userContext);
  const [showModal, setShowModal] = useState(false);

  const [user, setUser] = useState([])
  const [idLaundry, setLaundry] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState('');
  const [whatsapp_number, setWhatsAppNumber] = useState('');
  const [priceWashRubbing, setPriceWashRubbing] = useState('');
  const [priceRubbing, setPriceRubbing] = useState('');
  const [priceWash, setPriceWash] = useState('');
  const [serviceFee, setServiceFee] = useState('');
  const [payment, setPayment] = useState([]);

  useEffect(() => {
    userToken.refreshToken()
    if (userToken.idLaundry != '') {
      getUser()
    }
  }, [userToken.idLaundry])

  const getUser = async () => {
    const response = await axios.get(`http://localhost:5000/getlaundry/${userToken.idLaundry}`)

    setName(response.data.name)
    setEmail(response.data.email)
    setAddress(response.data.address)
    setWhatsAppNumber(response.data.whatsapp_number)
    setPriceWashRubbing(response.data.price_wash_rubbing)
    setPriceRubbing(response.data.price_rubbing)
    setPriceWash(response.data.price_wash)
    setServiceFee(response.data.service_fee)
    setLaundry(response.data.id_laundry)
    setPayment(JSON.parse(response.data.payment_method))
  }

  const userUpdate = async () => {
    await axios.patch(`http://localhost:5000/users/${userToken.id}`, {
      email: email,
      name: name,
      password: password,
      address: address,
      whatsapp_number: whatsapp_number,
      price_wash_rubbing: priceWashRubbing,
      price_rubbing: priceRubbing,
      price_wash: priceWash,
      service_fee: serviceFee,
      payment_method: payment
    });

    router.push("/settings");
    user.refreshToken()
  }

  const deletePayment = (id) => {
    setPayment(payment.filter(({ id_payment }) => id_payment !== id));
  };

  return (
    <AdminLayout>
      <div className="flex flex-col w-full md:ml-4 px-2 items-stretch">
        <section>
          <h1 className="text-2xl font-medium">Pengaturan akun</h1>
          <p className="mt-5 flex items-center text-sm">URL Transaksi customer : <span className="text-blue-600 mx-2">{userToken.idLaundry}</span> <CopyToClipboard
            text={`http://localhost:3000/bukucustomer/add-transaction/${idLaundry}`}
            onCopy={() => toast.success('URL Berhasil disalin')}>
            <button className="hover:scale-110"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg></button>
          </CopyToClipboard> </p>
          <div className="md:flex block my-4 items-center">
            <form className="w-full" onSubmit={userUpdate}>
              <div className="md:flex w-full">
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <label htmlFor="Email" className="text-sm">
                    Nama laundry
                  </label>
                  <input
                    type="text"
                    className="border my-2 border-gray-300 rounded p-1" value={name} onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <label htmlFor="Email" className="text-sm">
                    Email
                  </label>
                  <input
                    type="text"
                    className="border my-2 border-gray-300 rounded p-1" onChange={(e) => setEmail(e.target.value)} value={email}
                  />
                </div>
              </div>
              <div className="md:flex w-full">
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <label htmlFor="Password" className="text-sm">
                    Password
                  </label>
                  <input
                    type="password"
                    className="border my-2 border-gray-300 rounded p-1" required onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <label htmlFor="Email" className="text-sm">
                    Tempat dan alamat
                  </label>
                  <input
                    type="text"
                    className="border my-2 border-gray-300 rounded p-1" onChange={(e) => setAddress(e.target.value)} value={address}
                  />
                </div>
              </div>
              <div className="md:flex w-full">
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <label htmlFor="Password" className="text-sm">
                    Nomor Whatsapp
                  </label>
                  <input
                    type="number"
                    className="border my-2 border-gray-300 rounded p-1" onChange={(e) => setWhatsAppNumber(e.target.value)} value={whatsapp_number}
                  />
                </div>
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <label htmlFor="Email" className="text-sm">
                    Tarif jasa cuci & gosok per/kg
                  </label>
                  <input
                    type="number"
                    className="border my-2 border-gray-300 rounded p-1" value={priceWashRubbing} onChange={(e) => setPriceWashRubbing(e.target.value)}
                  />
                </div>
              </div>
              <div className="md:flex w-full">
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <label htmlFor="Email" className="text-sm">
                    Tarif jasa cuci per/kg
                  </label>
                  <input
                    type="number"
                    className="border my-2 border-gray-300 rounded p-1" value={priceWash} onChange={(e) => setPriceWash(e.target.value)}
                  />
                </div>
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <label htmlFor="Email" className="text-sm">
                    Tarif jasa gosok per/kg
                  </label>
                  <input
                    type="number"
                    className="border my-2 border-gray-300 rounded p-1" value={priceRubbing} onChange={(e) => setPriceRubbing(e.target.value)}
                  />
                </div>
              </div>
              <div className="md:flex w-full">
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <label htmlFor="Email" className="text-sm">
                    Harga tambahan antar/jemput
                  </label>
                  <input
                    type="number"
                    className="border my-2 border-gray-300 rounded p-1" value={serviceFee} onChange={(e) => setServiceFee(e.target.value)}
                  />
                </div>
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <button
                    type="submit"
                    className="rounded w-full] h-[2.4rem] bg-gray-900 text-white uppercase text-sm my-7 hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
                  >
                    Simpan
                  </button>
                </div>
              </div>
              <div className="md:flex w-full">
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <div className="flex items-center justify-between mb-3">
                    <h1 className="text-xl font-medium">Metode Pembayaran</h1>
                    <a className="cursor-pointer" onClick={() => setShowModal(true)}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg></a>
                  </div>
                  {
                    payment !== [] && payment.map((payment, index) => (
                      <div className="flex items-center bg-[#565CED] mt-2 p-3 rounded-md text-white text-sm" key={payment.id_payment}>
                        <button onClick={() => deletePayment(payment.id_payment)}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg></button>
                        <p className="ml-2">{payment.name_payment}({payment.name})</p>
                        <span className="ml-3 mr-1">💴</span>
                        <p>{payment.id_payment}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </form>
          </div>
        </section>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </div>
      <ModalAddPayment showModal={showModal} setShowModal={setShowModal} payment={payment} setPayment={setPayment} />
    </AdminLayout >
  );
};


export default index;
