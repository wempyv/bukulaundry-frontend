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
    const [laundry, setLaundry] = useState([])
    const [detailItem, setDetailItem] = useState();
    const [fileSelected, setFileSelected] = useState('');
    const [file, setFile] = useState('');

    useEffect(() => {
        if (router.isReady) {
            getInvoice()
        }
    }, [router.isReady])

    const submit = async () => {
        const data = new FormData()
        data.append('image', fileSelected)
        data.append('transaction_id', transaction.id)

        await axios.post('http://localhost:5000/upload', data)
        router.push('success')
    }

    const getInvoice = async () => {
        const response = await axios.get(`http://localhost:5000/getinvoice/${id}`)
        setTransaction(response.data)
        if (response.data != []) {
            setDetailItem(JSON.parse(response.data.detail_item))
        }
        getLaundry(response.data.user_id)
        getProodOfPayment(response.data.id)
    }

    const getLaundry = async (id) => {
        const response = await axios.get(`http://localhost:5000/laundry/${id}`);
        setLaundry(response.data)
    }

    const getProodOfPayment = async (id) => {
        const response = await axios.get(`http://localhost:5000/upload/${id}`)
        setFile(response.data)
    }

    return (
        <div className="flex flex-col px-6 items-center mx-auto justify-center md:w-3/5 w-full min-h-screen" data-aos="fade-down"
            data-aos-duration="800">
            {
                transaction != [] ? (
                    <div className="flex flex-col w-full items-stretch mt-10 bg-gray-50 p-4 rounded-md" >
                        <section >
                            <div className="md:flex">
                                <div>
                                    <QRCode value={`https://localhost:3000/bukucustomer/detail-invoice/${transaction.transaction_unique}`} />
                                </div>
                                <div className="md:w-4/12 flex flex-col md:mx-4">
                                    <h1 className="text-xl font-semibold text-[#232020] uppercase">
                                        {transaction.transaction_unique}
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
                                            Nama Laundry
                                        </span>
                                        <span className="text-[#232020] font-medium">
                                            {laundry.name}
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
                        <section >
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
                                    <div className="form-group flex flex-col mb-4">
                                        <span className="text-sm text-[#B89F9F]">
                                            Tanggal Transaksi
                                        </span>
                                        <span className="text-[#232020] font-medium">
                                            {moment(transaction.createdAt).format('LL')}
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
                            {transaction.status_payment !== 'BAYAR DITEMPAT' && transaction.status_payment !== 'SUDAH DIBAYAR' && (
                                <div className="flex md:flex-row flex-col items-center justify-between">
                                    <div className="m-2">
                                        <p className="text-xs">*{file === '' ? 'Mohon untuk' : 'Kamu telah'} melakukan pembayaran sebesar <span className="font-bold">Rp.{transaction.total_bill} </span>ke {transaction.status_payment}</p>
                                    </div>
                                    {
                                        file === '' ? (<div className="flex flex-col w-full">
                                            <input type="file" id="actual-payment" className="hidden" onChange={(e) => setFileSelected(e.target.files[0])} />
                                            <p className={`${fileSelected === '' ? 'hidden' : 'text-sm text-right mt-7 flex items-center justify-end'}`}>{fileSelected.name}<button onClick={() => setFileSelected('')} className="mx-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg></button></p>
                                            <label htmlFor="actual-payment"
                                                className={` ${fileSelected !== '' ? 'hidden' : 'rounded w-full  h-[2.8rem] bg-gray-900 text-white uppercase text-sm my-2 hover:scale-105 flex items-center justify-center  cursor-pointer hover:shadow-xl duration-300 ease-in-out '} `}>
                                                Upload Bukti Pembayaran
                                            </label>
                                            <button onClick={submit}
                                                className={` ${fileSelected === '' ? 'hidden' : 'rounded w-full  h-[2.8rem] bg-gray-900 text-white uppercase text-sm my-2 hover:scale-105 flex items-center justify-center  cursor-pointer hover:shadow-xl duration-300 ease-in-out '} `}>
                                                Kirim Bukti Pembayaran
                                            </button>
                                        </div>) : (
                                            <p className="text-xs w-full text-right">💡Bukti pembayaran kamu telah terkirim</p>
                                        )
                                    }
                                </div>
                            )
                            }
                            {transaction.status_payment === 'SUDAH DIBAYAR' && (
                                <p className="text-xs">*Status Pembayaran anda <span className="font-bold">{transaction.status_payment}</span></p>
                            )}
                            {transaction.status_payment === 'BAYAR DITEMPAT' && (
                                <p className="text-xs">*Mohon untuk melunasi pembayaran sebesar <span className="font-bold">Rp.{transaction.total_bill}</span> kepada pihak {laundry.name}</p>
                            )}
                        </section>
                    </div>
                ) : (
                    <section className="flex flex-col justify-center items-center min-h-screen" >
                        <img src="/assets/invoice.gif" className="my-4 rounded-full md:h-2/5 md:w-2/5" />
                        <h1 className="text-2xl font-semibold mt-2 text-[#232020]">Ooppss!</h1>
                        <p className="text-center w-80 text-gray-400 mt-2 capitalize">Maaf kami tidak dapat menemukan Invoice dengan kode <span className="font-semibold normal-case text-[#232020]">'{id}'</span> </p>
                        <button onClick={() => router.push('/bukucustomer/check-invoice')}
                            className="rounded w-4/5 md:w-3/5 mx-auto hover:scale-105  h-[2.8rem] bg-[#232020] text-white text-sm mt-10 hover:bg-[#111010] hover:shadow-xl duration-300 ease-in-out font-medium ml-auto flex items-center justify-center"
                        >
                            Coba Lagi
                        </button>
                    </section>
                )
            }
        </div>
    )
}

export default DetailInvoiceCustomer;