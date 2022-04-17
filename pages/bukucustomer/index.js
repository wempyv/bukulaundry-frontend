import React, { useState } from "react";
import { useRouter } from "next/router";
import AuthLayout from "../../components/layout/AuthLayout";

const FindLaundry = () => {
  const router = useRouter();
  const [idLaundry, setIdLaundry] = useState('');

  const redirectToTransaction = (e) => {
    e.preventDefault()
    router.push(`/bukucustomer/add-transaction/${idLaundry}`)
  }
  return (
    <AuthLayout>
      <section className="flex">
        <div className="md:w-6/12 w-screen">
          <h1
            className="text-3xl font-medium mt-24"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            Tambah Transaksi
          </h1>
          <p
            className="text-gray-300 text-sm w-[16rem] mb-8"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            Masukan ID Laundry untuk membuat transaksi baru
          </p>
          <form
            className="flex flex-col"
            data-aos="fade-right"
            data-aos-duration="800"
            onSubmit={redirectToTransaction}
          >
            <div className="form-group mt-4 flex flex-col">
              <label htmlFor="Email" className="text-sm">
                ID Laundry
              </label>
              <input
                type="text" required
                value={idLaundry} onChange={(e) => setIdLaundry(e.target.value)}
                className="border my-2 border-gray-300 rounded md:w-[18rem] p-3"
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
            duration-100
            ease-in-out
          "
            >
              Cari laundry
            </button>
            <p
              className="text-sm"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Cek invoice ?
              <a
                onClick={() => router.push("/bukucustomer/check-invoice")}
                className="text-blue-600 hover:text-blue-900 duration-100 ease-in-out cursor-pointer"
              >
                Cek invoice
              </a>
            </p>
          </form>
        </div>
        <div
          className="md:w-6/12 w-0 fixed top-0 right-0"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <img
            src="../../assets/add-transaction.jpg"
            className="h-screen w-screen object-cover"
            alt=""
          />
        </div>
      </section>
    </AuthLayout>
  );
};

export default FindLaundry;
