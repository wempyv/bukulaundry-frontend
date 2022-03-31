import { useRouter } from "next/router";
import AuthLayout from "../../components/layout/AuthLayout";

const CheckInvoice = () => {
  const router = useRouter();
  return (
    <AuthLayout>
      <section className="flex">
        <div className="md:w-6/12 w-screen">
          <h1
            className="text-3xl font-medium mt-24"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            Cek invoice
          </h1>
          <p
            className="text-gray-300 text-sm w-[16rem] mb-8"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            Masukan kode invoice anda
          </p>
          <form
            className="flex flex-col"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="form-group mt-4 flex flex-col">
              <label htmlFor="Email" className="text-sm">
                Kode Invoice
              </label>
              <input
                type="text"
                className="border my-2 border-gray-300 rounded md:w-[18rem] p-3"
                placeholder="Contoh : INVOICE#2728"
              />
            </div>

            <button
              type="submit"
              className="
            rounded
            md:w-[18rem]
            h-[2.8rem]
            bg-gray-900
            text-white
            uppercase
            text-sm
            my-8
            hover:scale-105 hover:shadow-xl
            duration-300
            ease-in-out
          "
            >
              Cari Invoice
            </button>
            <p className="text-sm">
              Membuat Transaksi Baru ?
              <a
                onClick={() => router.push("/bukucustomer")}
                className="
              text-blue-600
              hover:text-blue-900
              duration-300
              ease-in-out
              md:pb-24
              cursor-pointer
            "
              >
                Buat Transaksi
              </a>
            </p>
          </form>
        </div>
        <div
          className="md:w-6/12 w-0 fixed top-0 right-0"
          data-aos="fade-left"
          data-aos-duration="500"
        >
          <img
            src="../../assets/check-invoice.jpg"
            className="h-screen w-screen object-cover"
            alt=""
          />
        </div>
      </section>
    </AuthLayout>
  );
};

export default CheckInvoice;
