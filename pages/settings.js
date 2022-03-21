import React from "react";
import AdminLayout from "../components/layout/AdminLayout";

const index = (props) => {
  console.log(props.name)
  return (
    <AdminLayout>
      <div className="flex flex-col w-full md:ml-4 px-2 items-stretch">
        <section>
          <h1 className="text-2xl font-medium">Pengaturan akun</h1>
          <div className="md:flex block my-4 items-center">
            <form className="w-full" data-aos="fade-up" data-aos-duration="800">
              <div className="md:flex w-full">
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <label htmlFor="Email" className="text-sm">
                    Nama laundry
                  </label>
                  <input
                    type="text"
                    className="border my-2 border-gray-300 rounded p-1"
                  />
                </div>
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <label htmlFor="Email" className="text-sm">
                    Email
                  </label>
                  <input
                    type="text"
                    className="border my-2 border-gray-300 rounded p-1"
                  />
                </div>
              </div>
              <div className="md:flex w-full">
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <label htmlFor="Password" className="text-sm">
                    Password
                  </label>
                  <input
                    type="password"
                    className="border my-2 border-gray-300 rounded p-1"
                  />
                </div>
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <label htmlFor="Email" className="text-sm">
                    Tempat dan alamat
                  </label>
                  <input
                    type="text"
                    className="border my-2 border-gray-300 rounded p-1"
                  />
                </div>
              </div>
              <div className="md:flex w-full">
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <label htmlFor="Password" className="text-sm">
                    Nomor Whatsapp
                  </label>
                  <input
                    type="number"
                    className="border my-2 border-gray-300 rounded p-1"
                  />
                </div>
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <label htmlFor="Email" className="text-sm">
                    Tarif jasa cuci & gosok per/kg
                  </label>
                  <input
                    type="number"
                    className="border my-2 border-gray-300 rounded p-1"
                  />
                </div>
              </div>
              <div className="md:flex w-full">
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <label htmlFor="Email" className="text-sm">
                    Tarif jasa cuci per/kg
                  </label>
                  <input
                    type="number"
                    className="border my-2 border-gray-300 rounded p-1"
                  />
                </div>
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <label htmlFor="Email" className="text-sm">
                    Tarif jasa gosok per/kg
                  </label>
                  <input
                    type="number"
                    className="border my-2 border-gray-300 rounded p-1"
                  />
                </div>
              </div>
              <div className="md:flex w-full">
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <label htmlFor="Email" className="text-sm">
                    Harga tambahan antar/jemput
                  </label>
                  <input
                    type="number"
                    className="border my-2 border-gray-300 rounded p-1"
                  />
                </div>
                <div className="form-group mt-4 flex flex-col  w-full md:w-1/2 md:pr-4">
                  <button
                    type="submit"
                    className="rounded w-full] h-[2.4rem] bg-gray-900 text-white uppercase text-sm my-7 hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </AdminLayout >
  );
};

export default index;
