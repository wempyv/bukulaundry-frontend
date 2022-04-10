import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { userContext } from '../../context/UserContext';
import AdminLayout from "../../components/layout/AdminLayout";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import moment from 'moment';
import 'moment/locale/id'
moment.locale('id');
import QRCode from 'react-qr-code';

const DetailTransaction = () => {
  const router = useRouter();
  const user = useContext(userContext)
  const [transaction, setTransaction] = useState([]);
  const [detailItem, setDetailItem] = useState();
  const [file, setFile] = useState('');
  const { id } = router.query

  useEffect(() => {
    user.refreshToken();
    if (router.isReady) {
      getTransactionById()
    }
  }, [router.isReady])

  const getTransactionById = async () => {
    const response = await axios.get(`http://localhost:5000/transaction/${id}`);
    setTransaction(response.data);
    setDetailItem(JSON.parse(response.data.detail_item))
    getProodOfPayment(response.data.id, response.data.status_payment)
  }

  const getProodOfPayment = async (id, statusPayment) => {
    const response = await axios.get(`http://localhost:5000/upload/${id}`)
    setFile(response.data)

    if (statusPayment !== 'SUDAH DIBAYAR' && response.data !== '') {
      showToast()
    }

  }

  const showToast = () => {
    toast.custom((t) => (
      <div
        className={`${t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src="/assets/admin.png"
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                Admin Bukulaundri
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Halo, Customer telah mengirimkan bukti pembayaran, mohon untuk diproses 😉
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ))
  }


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
                      fillRule="evenodd" Baju Baru
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
              <QRCode value={`https://localhost:3000/bukucustomer/detail-invoice/${transaction.transaction_unique}`} />
            </div>
            <div className="md:w-4/12 flex flex-col md:mx-4">
              <div className="flex items-center">
                <h1 className="text-2xl font-semibold text-[#232020] uppercase">
                  #{transaction.transaction_unique}
                </h1>
                <a className="cursor-pointer" onClick={() => router.push(`/bukucustomer/detail-invoice/${transaction.transaction_unique}`)}>    <svg xmlns="http://www.w3.org/2000/svg" className="mx-4 text-blue-800 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg></a>
                <a className="cursor-pointer" target="_blank" href={`https://web.whatsapp.com/send?phone=${transaction.whatsapp_number}&text=Halo%20kami%20dari%20bukulaundri%20transaksi%20kamu%20telah%20diterima.%20Kode%20invoice%20kamu%20*${transaction.transaction_unique}*%20atau%20bisa%20diakses%20di:%20http://localhost:3000/bukucustomer/detail-invoice/${transaction.transaction_unique}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-600 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </a>
              </div>
              <div className="form-group flex flex-col mt-4 mb-4">
                <span className="text-sm text-[#B89F9F]">Nama Customer</span>
                <span className="text-[#232020] font-medium">
                  {transaction.name_customer}
                </span>
              </div>
              <div className="form-group flex flex-col mb-4">
                <span className="text-sm text-[#B89F9F]">Total Berat</span>
                <span className="text-[#232020] font-medium">{transaction.total_weight}Kg</span>
              </div>
              <div className="form-group flex flex-col mb-4">
                <span className="text-sm text-[#B89F9F]">
                  Tanggal Transaksi
                </span>
                <span className="text-[#232020] font-medium">
                  {moment(transaction.createdAt).format('LL')}
                </span>
              </div>
            </div>
            <div className="md:w-4/12 flex flex-col md:mx-4 md:mt-8">
              <div className="form-group flex flex-col mt-4 mb-4">
                <span className="text-sm text-[#B89F9F]">Nomor Whatsapp</span>
                <span className="text-[#232020] font-medium">{transaction.whatsapp_number}</span>
              </div>
              <div className="form-group flex flex-col mb-4">
                <span className="text-sm text-[#B89F9F]">Total Pembayaran</span>
                <span className="text-[#232020] font-medium">Rp{transaction.total_bill}</span>
              </div>
              <div className="form-group flex flex-col mb-4">
                <span className="text-sm text-[#B89F9F]">
                  Metode Pembayaran & Status
                </span>
                <span className="text-[#232020] font-medium">{transaction.status_payment}</span>
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
                  {transaction.address}
                </span>
              </div>
              <div className="form-group flex flex-col mb-4">
                <span className="text-sm text-[#B89F9F]">
                  Status proses laundry
                </span>
                <span className="text-[#232020] font-medium">
                  {transaction.status_laundry}
                </span>
              </div>
              <div className="form-group flex flex-col mb-4">
                <span className="text-sm text-[#B89F9F]">
                  Tipe Laundry
                </span>
                <span className="text-[#232020] font-medium">
                  {transaction.type_laundry}
                </span>
              </div>

            </div>
            <div className="md:w-3/12 flex flex-col md:mx-4 ">
              <div className="form-group flex flex-col mt-4 mb-4">
                <span className="text-sm text-[#B89F9F]">Status on-demand</span>
                <span className="text-[#232020] font-medium">
                  {transaction.status_on_demand}
                </span>
              </div>
              <div className="form-group flex flex-col mb-4">
                <span className="text-sm text-[#B89F9F]">
                  Biaya tambahan
                </span>
                <span className="text-[#232020] font-medium">
                  Rp{transaction.additional_bill}
                </span>
              </div>
            </div>
            <div className="md:w-5/12 flex flex-col mb-8">
              <div className="overflow-y-auto bg-[#232020] rounded-md py-5 mt-6 md:mt-0 md:py-2">
                <div className="flex w-full justify-between px-4 mt-3">
                  <h1 className="text-white font-bold text-xl">Detail item</h1>
                </div>
                {typeof detailItem != 'undefined' && detailItem.map((item, index) => (
                  <div className="flex w-full justify-between px-4 mt-4 mb-4" key={index}>
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
            </div>
          </div>
        </section>
        <section className="md:flex md:flex-col">
          {
            file === '' ? (<div></div>) : (
              <>
                <h1 className="mt-5 text-xl font-medium">💡Bukti Pembayaran </h1>
                <img src={`http://localhost:5000/${file.image}`} className="mt-5 w-72" />
              </>
            )
          }
        </section>
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </AdminLayout>
  );
};

export default DetailTransaction;
