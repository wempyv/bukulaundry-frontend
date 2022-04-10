import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import moment from 'moment';
import 'moment/locale/id'
moment.locale('id');

export default function PrintToComponent({ customers }) {
    let componentRef = useRef();
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
                    <ComponentToPrint customers={customers} ref={(el) => (componentRef = el)} />
                </div>
            </div>
        </>
    )
}

class ComponentToPrint extends React.Component {
    render() {
        return (
            <div class="flex flex-col p-4">
                <section>
                    <div className='flex justify-between'>
                        <div>
                            <img src="assets/logo.svg" className='h-10' />
                        </div>
                        <div>
                            <p classname="text-center">Daftar Customer</p>
                        </div>
                        <div>

                        </div>
                    </div>
                </section>
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 mt-4">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="border-b bg-gray-600">
                                    <tr>
                                        <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                                            No
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                                            Nama Customer
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                                            Nomor Whatsapp
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                                            Tanggal Daftar
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                                            Alamat Customer
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.customers.map((customer, index) => (
                                        <tr class="border-b" key={customer.id}>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {customer.name_customer}
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {customer.whatsapp_number}
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {moment(customer.createdAt).format('LL')}
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                                {customer.address}
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
