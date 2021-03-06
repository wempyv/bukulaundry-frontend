import { React, useState, useEffect, useContext } from "react";
import { userContext } from "../../context/UserContext";
import ModalCustomer from "./ModalDetailCustomer";
import ModalEdit from './ModalEdit';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/id'
moment.locale('id');

const TableCustomer = ({ input, getCustomer, customers, setCustomer }) => {
  const user = useContext(userContext);
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [customerDetail, setCustomerDetail] = useState([]);

  useEffect(() => {
    user.refreshToken()
  }, []);

  if (input.length > 0) {
    customers = customers.filter((i) => {
      return i.name_customer.toLowerCase().match(input)
    })
  }


  const detailCustomer = async (id) => {
    const response = await axios.get(`http://localhost:5000/customer/${id}`);
    setCustomerDetail(response.data);
    setShowModal(true)
  }

  const deleteCustomer = async (id) => {
    await axios.delete(`http://localhost:5000/customer/${id}`);
    getCustomer();
  }

  const getCustomerById = async (id) => {
    const response = await axios.get(`http://localhost:5000/customer/${id}`);
    setCustomerDetail(response.data);
    setShowModalEdit(true);
  }

  return (
    <div className="flex flex-col w-full ">
      <div className="overflow-x-auto ">
        <div className="inline-block py-2 min-w-full  ">
          <div>
            <table className="min-w-full ">
              <thead className="dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="py-3  px-3 md:px-0 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Nama Customer
                  </th>
                  <th
                    scope="col"
                    className="py-3  px-3 md:px-0 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Nomor Whatsapp
                  </th>
                  <th
                    scope="col"
                    className="py-3  px-3 md:px-0 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Tanggal Daftar
                  </th>
                  <th
                    scope="col"
                    className="py-3  px-3 md:px-0 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Alamat Customer
                  </th>
                  <th scope="col" className="relative py-3  px-3 md:px-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index) => (
                  <tr className=" odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600" key={customer.id}>
                    <td className="py-4  px-3 md:px-0 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {customer.name_customer}
                    </td>
                    <td className="py-4  px-3 md:px-0 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {customer.whatsapp_number}
                    </td>
                    <td className="py-4  px-3 md:px-0 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {moment(customer.createdAt).format('LL')}
                    </td>
                    <td className="py-4 px-3 md:px-0 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      <p className="w-64 truncate whitespace-nowrap ">
                        {customer.address}
                      </p>
                    </td>
                    <td className="py-4  px-3 md:px-0 text-sm font-medium text-right  ">
                      <div className="flex ">
                        <div className="w-4/12">
                          <a className="cursor-pointer" onClick={() => getCustomerById(customer.id)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-400 hover:text-gray-700 duration-100 ease-in-out"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </a>
                        </div>
                        <div className="w-4/12">
                          <a className="cursor-pointer" onClick={() => detailCustomer(customer.id)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-400 hover:text-gray-700 duration-100 ease-in-out"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </a>
                        </div>
                        <div className="w-4/12">
                          <a className="cursor-pointer" onClick={() => deleteCustomer(customer.id)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-400 hover:text-gray-700 duration-100 ease-in-out"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ModalCustomer showModal={showModal} setShowModal={setShowModal} customerDetail={customerDetail} setCustomerDetail={setCustomerDetail} />
      <ModalEdit showModalEdit={showModalEdit} setShowModalEdit={setShowModalEdit} customerDetail={customerDetail} getCustomer={getCustomer} />
    </div>
  );
};

export default TableCustomer;
