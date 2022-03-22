import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import AdminLayout from "../components/layout/AdminLayout";
import axios from "axios";
import { userContext } from "../context/UserContext";

const index = () => {
  const router = useRouter();
  const user = useContext(userContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState('');
  const [whatsapp_number, setWhatsAppNumber] = useState('');
  const [priceWashRubbing, setPriceWashRubbing] = useState('');
  const [priceRubbing, setPriceRubbing] = useState('');
  const [priceWash, setPriceWash] = useState('');
  const [serviceFee, setServiceFee] = useState('');
  const id = user.userId

  useEffect(() => {
    user.refreshToken()
  }, [])

  const userUpdate = async () => {
    await axios.patch(`http://localhost:5000/users/${id}`, {
      email: email,
      name: name,
      password: password,
      address: address,
      whatsapp_number: whatsapp_number,
      price_wash_rubbing: priceWashRubbing,
      price_rubbing: priceRubbing,
      price_wash: priceWash,
      service_fee: serviceFee
    });

    router.push("/settings");
    user.refreshToken()
  }


  return (
    <AdminLayout>
      <div className="flex flex-col w-full md:ml-4 px-2 items-stretch">
        <section>
          <h1 className="text-2xl font-medium">Pengaturan akun</h1>
          <div className="md:flex block my-4 items-center">
            <form className="w-full" data-aos="fade-up" data-aos-duration="800" onSubmit={userUpdate}>
              <div className="md:flex w-full">
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <label htmlFor="Email" className="text-sm">
                    Nama laundry
                  </label>
                  <input
                    type="text"
                    className="border my-2 border-gray-300 rounded p-1" onChange={(e) => setName(e.target.value)} value={user.name}
                  />
                </div>
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <label htmlFor="Email" className="text-sm">
                    Email
                  </label>
                  <input
                    type="text"
                    className="border my-2 border-gray-300 rounded p-1" onChange={(e) => setEmail(e.target.value)} value={user.email}
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
                    className="border my-2 border-gray-300 rounded p-1" onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <label htmlFor="Email" className="text-sm">
                    Tempat dan alamat
                  </label>
                  <input
                    type="text"
                    className="border my-2 border-gray-300 rounded p-1" onChange={(e) => setAddress(e.target.value)} value={user.address}
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
                    className="border my-2 border-gray-300 rounded p-1" onChange={(e) => setWhatsAppNumber(e.target.value)} value={user.whatsapp_number}
                  />
                </div>
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <label htmlFor="Email" className="text-sm">
                    Tarif jasa cuci & gosok per/kg
                  </label>
                  <input
                    type="number"
                    className="border my-2 border-gray-300 rounded p-1" onChange={(e) => setPriceWashRubbing(e.target.value)}
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
                    className="border my-2 border-gray-300 rounded p-1" onChange={(e) => setPriceWash(e.target.value)}
                  />
                </div>
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <label htmlFor="Email" className="text-sm">
                    Tarif jasa gosok per/kg
                  </label>
                  <input
                    type="number"
                    className="border my-2 border-gray-300 rounded p-1" onChange={(e) => setPriceRubbing(e.target.value)}
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
                    className="border my-2 border-gray-300 rounded p-1" onChange={(e) => setServiceFee(e.target.value)}
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
            </form>
          </div>
        </section>
      </div>
    </AdminLayout >
  );
};


export default index;
