import React, { useState, useEffect, useContext } from "react";
import { userContext } from "../../context/UserContext";
import { useRouter } from "next/router";
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/id'
moment.locale('id');

const TableTransaction = () => {
  const router = useRouter();
  const user = useContext(userContext);
  const [transaction, setTransaction] = useState([]);

  console.log(transaction)

  useEffect(() => {
    user.refreshToken();
    getTransaction();
  }, [])

  const getTransaction = async () => {
    const response = await axios.get(`http://localhost:5000/transactions/${user.id}`)
    setTransaction(response.data);
  }

  return (
    <div className="flex flex-col w-full ">
      <div className="overflow-x-auto">
        <div className="inline-block my-5 min-w-full  ">
          <div>
            <table className="min-w-full">
              <tbody>
                {
                  transaction.map((transaction, index) => (
                    <tr key={transaction.id}>
                      <section className="w-full flex items-center justify-between bg-[#ffffff] rounded-md md:px-3  my-2 drop-shadow hover:drop-shadow-md ">
                        <td className="py-4 px-3 md:px-0 text-gray-900 whitespace-nowrap dark:text-white ">
                          <div className="flex flex-col p-2">
                            <label
                              htmlFor=""
                              className="text-xs font-light text-[#C1B9B9] mb-1"
                            >
                              Nama Customer
                            </label>
                            <span className="text-sm">{transaction.name_customer}</span>
                          </div>
                        </td>
                        <td className="py-4 px-3 md:px-0 text-gray-900 whitespace-nowrap dark:text-white">
                          <div className="flex flex-col p-2">
                            <label
                              htmlFor=""
                              className="text-xs font-light text-[#C1B9B9] mb-1"
                            >
                              Total Tagihan
                            </label>
                            <span className="text-sm">Rp{transaction.total_bill}</span>
                          </div>
                        </td>
                        <td className="py-4 px-3 md:px-0 text-gray-900 whitespace-nowrap dark:text-white">
                          <div className="flex flex-col p-2">
                            <label
                              htmlFor=""
                              className="text-xs font-light text-[#C1B9B9] mb-1"
                            >
                              Status
                            </label>
                            <span className="text-sm">{transaction.status_payment}</span>
                          </div>
                        </td>
                        <td className="py-4 px-3 md:px-0 text-gray-900 whitespace-nowrap dark:text-white">
                          <div className="flex flex-col p-2">
                            <label
                              htmlFor=""
                              className="text-xs font-light text-[#C1B9B9] mb-1"
                            >
                              Tanggal Transaksi
                            </label>
                            <span className="text-sm">{moment(transaction.createdAt).format('LL')}</span>
                          </div>
                        </td>
                        <td className="py-4 px-3 md:px-0 text-sm font-medium text-right  ">
                          <div className="flex">
                            <div className="w-4/12">
                              <a className="cursor-pointer" onClick={() => router.push(`transactions/edit-transaction/${transaction.id}`)}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5  text-gray-400 hover:text-gray-700 duration-300 ease-in-out"
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
                            <div className="w-4/12 mx-4">
                              <a className="cursor-pointer" onClick={() => router.push(`transactions/${transaction.id}`)}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-gray-400 hover:text-gray-700 duration-300 ease-in-out"
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
                              <a href="">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-gray-400 hover:text-gray-700 duration-300 ease-in-out"
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
                      </section>
                    </tr>
                  ))
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableTransaction;
