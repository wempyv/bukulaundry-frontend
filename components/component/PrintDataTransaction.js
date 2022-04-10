import React, { useRef, useContext } from 'react';
import ReactToPrint from 'react-to-print';
import { userContext } from "../../context/UserContext";
import moment from 'moment';
import 'moment/locale/id'
moment.locale('id');

export default function PrintToComponent({ transaction }) {
    const user = useContext(userContext);
    let componentRef = useRef();

    const transactions = transaction.filter((i) => {
        return i.status_payment.match('SUDAH DIBAYAR')
    })

    return (
        <>
            <div>
                <ReactToPrint
                    trigger={() => <button >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mt-2 mx-2 hover:scale-105 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                        </svg>
                    </button>}
                    content={() => componentRef}
                />
                <div className='hidden'>
                    <ComponentToPrint transactions={transactions} user={user} ref={(el) => (componentRef = el)} />
                </div>
            </div>
        </>
    )
}

class ComponentToPrint extends React.Component {
    render() {
        return (
            <div className="flex flex-col p-4">
                <section>
                    <div className='flex justify-between'>
                        <div>
                            <img src="assets/logo.svg" className='h-14' />
                        </div>
                        <div className='text-right text-sm '>
                            <p>Transaksi {this.props.user.name}</p>
                            <p>{this.props.user.address}</p>
                            <p>{this.props.user.whatsapp_number}</p>
                        </div>
                    </div>
                </section>
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 mt-4">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="border-b bg-gray-600">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                                            No
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                                            Nama Customer
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                                            Nomor Whatsapp
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                                            Tanggal Transaksi
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                                            Total Tagihan
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                                            Status Pembayaran
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                                            Jenis Laundry
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                                            Alamat Customer
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.transactions.map((transaction, index) => (
                                        <tr className="border-b" key={transaction.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">{index + 1}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {transaction.name_customer}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {transaction.whatsapp_number}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {moment(transaction.createdAt).format('LL')}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                Rp.{transaction.total_bill}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                {transaction.status_payment}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                {transaction.type_laundry}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                {transaction.address}
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
