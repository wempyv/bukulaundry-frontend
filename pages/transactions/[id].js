import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { userContext } from '../../context/UserContext';
import AdminLayout from "../../components/layout/AdminLayout";
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
              <h1 className="text-2xl font-semibold text-[#232020] uppercase">
                #{transaction.transaction_unique}
              </h1>
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
                  Status Pembayaran
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
              <div className="form-group flex flex-col mb-4">
                <span className="text-sm text-[#B89F9F]">
                  Biaya tambahan
                </span>
                <span className="text-[#232020] font-medium">
                  Rp{transaction.additional_bill}
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
      </div>
    </AdminLayout>
  );
};

export default DetailTransaction;
