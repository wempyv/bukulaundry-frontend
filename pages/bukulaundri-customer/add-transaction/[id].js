import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import ModalAddItem from '../../../components/component/ModalAddItem'
import axios from 'axios';
import { userContext } from "../../../context/UserContext";

const AddTransactionFromCustomer = () => {
    const router = useRouter();
    const user = useContext(userContext);
    const [showModal, setShowModal] = useState(false);

    const [nameCustomer, setNameCustomer] = useState('');
    const [address, setAddress] = useState('');
    const [whatsappNumber, setWhatsappNumber] = useState('');
    const [totalWeight, setTotalWeight] = useState(1);
    const [statusPayment, setStatusPayment] = useState('');
    const [laundryType, setLaundryType] = useState("CUCI + GOSOK");
    const [laundryStatus, setLaundryStatus] = useState('');
    const [additionalBill, setAdditionalBill] = useState(0);
    const [inputService, setInputService] = useState(false);
    const [statusOnDemand, setStatusOnDemand] = useState('');
    const [detailItem, setDetailItem] = useState([]);

    useEffect(() => {
        totalChange()
    }, [])

    const totalChange = () => {
        const total = totalWeight * checkTypeLaundry() + checkService() + parseInt(additionalBill, 10)
        return total;
    }

    const checkService = () => {
        if (inputService === true) {
            return user.serviceFee
        }
        return 0
    }

    const checkTypeLaundry = () => {
        if (laundryType === 'CUCI + GOSOK') {
            return user.priceWashRubbing
        } else if (laundryType === 'CUCI') {
            return user.priceWash
        }
        return user.priceRubbing
    }

    const addTransactions = async (e) => {
        e.preventDefault()
        const unique = Math.floor(99 + (Math.random() * (99999 - 99)));
        const totalPayment = totalWeight * checkTypeLaundry() + parseInt(additionalBill, 10) + checkService()

        await axios.post('http://localhost:5000/transaction', {
            transaction_unique: `bukulaundry${unique}`,
            user_id: user.id,
            name_customer: nameCustomer,
            address: address,
            whatsapp_number: whatsappNumber,
            total_weight: totalWeight,
            total_bill: totalPayment,
            status_payment: statusPayment,
            type_laundry: laundryType,
            status_laundry: laundryStatus,
            additional_bill: additionalBill,
            service: inputService,
            status_on_demand: statusOnDemand,
            detail_item: detailItem
        })
        router.push('/transactions');
    }

    const deleteItem = (itemId) => {
        setDetailItem(detailItem.filter(({ id }) => id !== itemId));
    };
    return (
        <div className="flex flex-col w-full  px-2 items-center  justify-center">
            <section className="md:w-2/5 w-full mt-5">
                <h1 className="text-2xl font-medium">Buat Transaksi</h1>
                <div className="my-4 items-center">
                    <form
                        className="w-full flex flex-col"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        onSubmit={addTransactions}
                    >
                        <div className="w-full">
                            <div className="form-group mt-4 flex flex-col  w-full md:pr-4">
                                <label htmlFor="Nama customer" className="text-sm" >
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    className="border my-2 border-gray-300 rounded p-1" value={nameCustomer} onChange={(e) => setNameCustomer(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-4 flex flex-col  w-full md:pr-4">
                                <label htmlFor="Alamat customer" className="text-sm">
                                    Alamat
                                </label>
                                <input
                                    type="text"
                                    className="border my-2 border-gray-300 rounded p-1" value={address} onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-4 flex flex-col  w-full md:pr-4">
                                <label htmlFor="Nomor whatsapp" className="text-sm">
                                    Nomor whatsapp
                                </label>
                                <input
                                    type="number"
                                    className="border my-2 border-gray-300 rounded p-1" value={whatsappNumber} onChange={(e) => setWhatsappNumber(e.target.value)}
                                />
                            </div>


                            <div className="form-group mt-4 flex flex-col  w-full md:pr-4">
                                <label htmlFor="Email" className="text-sm">
                                    Type Laundry
                                </label>
                                <div className="flex my-2">
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#CA9E00] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="radio"
                                            value="CUCI + GOSOK"
                                            checked={laundryType === "CUCI + GOSOK"}
                                            onChange={(e) => setLaundryType(e.target.value)}
                                        />
                                        <label
                                            className="form-check-label inline-block text-gray-800"
                                            htmlFor="inlineRadio10"
                                        >
                                            Cuci + Gosok
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline ml-5">
                                        <input
                                            className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#685b2b] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="radio"
                                            value="CUCI"
                                            checked={laundryType === "CUCI"}
                                            onChange={(e) => setLaundryType(e.target.value)}
                                        />
                                        <label
                                            className="form-check-label inline-block text-gray-800"
                                            htmlFor="inlineRadio10"
                                        >
                                            Cuci
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline mx-5">
                                        <input
                                            className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#232020] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="radio"
                                            value="GOSOK"
                                            checked={laundryType === "GOSOK"}
                                            onChange={(e) => setLaundryType(e.target.value)}
                                        />
                                        <label
                                            className="form-check-label inline-block text-gray-800"
                                            htmlFor="inlineRadio20"
                                        >
                                            Gosok
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-4 flex flex-col  w-full md:pr-4">
                                <label htmlFor="" className="text-sm">
                                    Metode Pembayaran
                                </label>
                                <select className="border my-2 border-gray-300 bg-white rounded p-1" onChange={(e) => setStatusPayment(e.target.value)}>
                                    <option >Pilih Metode Pembayaran</option>
                                    <option value="PENDING">Bayar dengan E-WALLET</option>
                                    <option value="BAYAR DITEMPAT" >Bayar ditempat</option>
                                </select>
                            </div>
                            <div className="form-group mt-4 flex flex-col  w-full md:pr-4">
                                <label htmlFor="Email" className="text-sm">
                                    Service
                                </label>
                                <div className="flex my-2">
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#CA9E00] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="radio"
                                            name="inlineRadioOptions"
                                            id="inlineRadio1"
                                            value="option1"
                                            checked={inputService === true}
                                            onChange={() => setInputService(true)}
                                        />
                                        <label
                                            className="form-check-label inline-block text-gray-800"
                                            htmlFor="inlineRadio10"
                                        >
                                            Antar jemput
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline mx-5">
                                        <input
                                            className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#232020] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="radio"
                                            name="inlineRadioOptions"
                                            id="inlineRadio2"
                                            value="option2"
                                            checked={inputService === false}
                                            onChange={() => setInputService(false)}
                                        />
                                        <label
                                            className="form-check-label inline-block text-gray-800"
                                            htmlFor="inlineRadio20"
                                        >
                                            Tidak ada service
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full mt-5">
                            <div className="h-96 overflow-y-auto bg-[#232020] rounded-md  mt-6 md:mt-0 py-2">
                                <div className="flex w-full justify-between px-4 mt-3">
                                    <h1 className="text-white font-bold my-3 ">
                                        Detail item
                                    </h1>
                                    <a
                                        className="text-white hover:text-gray-300  text-3xl cursor-pointer"
                                        onClick={() => setShowModal(true)}
                                    >
                                        +
                                    </a>
                                </div>
                                {detailItem !== [] && detailItem.map((item, index) => (
                                    <div className="flex w-full justify-between px-4 mt-4">
                                        <div>
                                            <span>{item.icon}</span>
                                            <span className="text-sm text-[#D7CDCD] mx-2">
                                                {item.name_item}
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-sm text-[#B89F9F] mx-5">{item.total}x</span>
                                            <button onClick={() => deleteItem(item.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button
                                type="submit"
                                className="rounded w-full h-[2.8rem] bg-[#232020] text-white text-sm mt-2 hover:bg-[#111010] hover:shadow-xl duration-300 ease-in-out font-medium ml-auto flex items-center justify-center"
                            >
                                Buat Transaksi
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <ModalAddItem showModal={showModal} setShowModal={setShowModal} detailItem={detailItem} setDetailItem={setDetailItem} />
        </div>
    )
}

export default AddTransactionFromCustomer;