import React from "react";
import { useRouter } from "next/router";
import AuthLayout from "../../components/layout/AuthLayout";

const Login = () => {
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
            Login
          </h1>
          <p
            className="text-gray-300 text-sm w-[16rem] mb-8"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            Login kemudian atur keuangan laundry dengan mudah dan cepat
          </p>
          <form
            className="flex flex-col"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="form-group mt-4 flex flex-col">
              <label htmlFor="Email" className="text-sm">
                Email
              </label>
              <input
                type="text"
                className="border my-2 border-gray-300 rounded md:w-[18rem] p-1"
              />
            </div>
            <div className="form-group mt-4 flex flex-col">
              <label htmlFor="Email" className="text-sm">
                Password
              </label>
              <input
                type="password"
                className="border my-2 border-gray-300 rounded md:w-[18rem] p-1"
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
              Login
            </button>
            <p
              className="text-sm"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Belum punya akun ?
              <a
                onClick={() => router.push("/auth/register")}
                className="text-blue-600 hover:text-blue-900 duration-300 ease-in-out cursor-pointer"
              >
                Buat akun
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
            src="../../assets/login-background.jpg"
            className="h-screen w-screen object-cover"
            alt=""
          />
        </div>
      </section>
    </AuthLayout>
  );
};

export default Login;