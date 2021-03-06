import React, { useState, useContext } from "react";
import { userContext } from "../../context/UserContext";
import axios from 'axios';

const Modal = ({ showModal, setShowModal }) => {
  const user = useContext(userContext);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [whatsappNumber, setWhatsAppNumber] = useState('')

  const addCustomer = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/customer', {
      user_id: user.id,
      name_customer: name,
      address: address,
      whatsapp_number: whatsappNumber
    })
    setShowModal(false);
    window.location.reload(false);
  }

  return (
    showModal && (
      <div
        aria-hidden="true"
        className=" flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal h-full md:inset-0 drop-shadow-2xl"
      >
        <div className="relative px-4 w-full max-w-md h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => setShowModal(false)}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <form
              className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
              onSubmit={addCustomer}
            >
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Tambah data customer
              </h3>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Nama customer
                </label>
                <input
                  type="text"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={name} onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="whatsapp_number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Nomor whatsapp
                </label>
                <input
                  type="number"
                  name="whatsapp_number"
                  placeholder="contoh : 628776278202"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={whatsappNumber} onChange={(e) => setWhatsAppNumber(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Alamat Customer
                </label>
                <textarea
                  type="text"
                  name="address"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white h-28 resize-none" value={address} onChange={(e) => setAddress(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#232020] hover:scale-105 duration-100 ease-out focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Tambah Customer
              </button>
            </form>
          </div>
        </div >
      </div >
    )
  );
};

export default Modal;
