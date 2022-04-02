import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/id'
moment.locale('id');
import QRCode from 'react-qr-code';

const DetailInvoiceCustomer = () => {
    const router = useRouter();
    const { id } = router.query

    const [transaction, setTransaction] = useState([])
    const [detailItem, setDetailItem] = useState();

    useEffect(() => {
        if (router.isReady) {
            getInvoice()
        }
    }, [router.isReady])

    const getInvoice = async () => {
        const response = await axios.get(`http://localhost:5000/getinvoice/${id}`)
        setTransaction(response.data)
    }

    return (
        <div className="flex flex-col px-6 items-center mx-auto justify-center md:w-3/5 w-full ">
            {
                transaction != [] ? (
                    <div className="flex flex-col w-full items-stretch mt-10">
                        <section>
                            <div className="md:flex">
                                <div>
                                    <QRCode value={`https://localhost:3000/invoice/${transaction.transaction_unique}`} />
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
                ) : (
                    <div>Invoice tidak ditemukan!</div>
                )
            }
        </div>
    )
}

export default DetailInvoiceCustomer;