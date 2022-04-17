import React, { useState, useContext } from "react";
import { userContext } from "../../context/UserContext";
import { useRouter } from "next/router";
import moment from 'moment';
import 'moment/locale/id'
moment.locale('id');

const ModalCustomer = ({ showModal, setShowModal, customerDetail, setCustomerDetail }) => {
  const router = useRouter();
  const user = useContext(userContext);

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

            <div
              className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
            >
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Detail data customer
              </h3>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-300"
                >
                  Nama Customer
                </label>
                <p className="font-medium text-gray-900">{customerDetail.name_customer}</p>
              </div>
              <div>
                <label
                  htmlFor="whatsapp_number"
                  className="block mb-2 text-sm  text-gray-800 dark:text-gray-300"
                >
                  Nomor whatsapp
                </label>
                <p className="font-medium text-gray-900">{customerDetail.whatsapp_number}</p>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-300"
                >
                  Tanggal Daftar
                </label>
                <p className="font-medium text-gray-900">   {moment(customerDetail.createdAt).format('LL')}</p>
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm  text-gray-800 dark:text-gray-300"
                >
                  Alamat Customer
                </label>
                <p className="font-medium text-gray-900">{customerDetail.address}</p>
              </div>
              <button
                className="w-full text-white bg-[#232020] hover:scale-105 duration-100 ease-out focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " onClick={() => router.push(`add-customer-transaction/${customerDetail.id}`)}
              >
                Buat Transaksi
              </button>
            </div>
          </div>
        </div >
      </div >
    )
  );
};

export default ModalCustomer;
