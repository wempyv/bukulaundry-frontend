import { useRouter } from "next/router";

const AddTransactionFromCustomer = () => {
    const router = useRouter();
    return (
        <div className="flex flex-col px-2 items-center min-h-screen justify-center md:w-2/5 w-full mx-auto " data-aos="fade-down"
            data-aos-duration="800">
            <img src="/assets/courier.gif" />
            <h1 className="text-2xl font-semibold mt-2 text-[#232020]">Transaksi Berhasil dibuat !</h1>
            <p className="text-center w-80 text-gray-400 mt-2">Kurir kami akan menjemput item kamu sesuai alamat tujuan 🚀</p>
            <button onClick={() => router.push('/bukucustomer/check-invoice')}
                className="rounded w-4/5 md:w-3/5 mx-auto hover:scale-105  h-[2.8rem] bg-[#232020] text-white text-sm mt-10 hover:bg-[#111010] hover:shadow-xl duration-300 ease-in-out font-medium ml-auto flex items-center justify-center"
            >
                Halaman Invoice
            </button>
        </div>
    )
}

export default AddTransactionFromCustomer;