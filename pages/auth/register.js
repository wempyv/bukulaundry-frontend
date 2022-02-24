import { useRouter } from "next/router";
import AuthLayout from "../../components/layout/AuthLayout";

const Register = () => {
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
            Daftar Akun
          </h1>
          <p
            className="text-gray-300 text-sm w-[16rem] mb-8"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            Daftar untuk kemudahan mengatur keuangan laundry anda
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
            <div className="form-group mt-4 flex flex-col">
              <label htmlFor="Email" className="text-sm">
                Nama Laundry
              </label>
              <input
                type="text"
                className="border my-2 border-gray-300 rounded md:w-[18rem] p-1"
              />
            </div>
            <div className="form-group mt-4 flex flex-col">
              <label htmlFor="Email" className="text-sm">
                Alamat Laundry
              </label>
              <input
                type="text"
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
              Daftar
            </button>
            <p className="text-sm">
              Sudah punya akun ?
              <a
                onClick={() => router.push("/auth")}
                className="
              text-blue-600
              hover:text-blue-900
              duration-300
              ease-in-out
              md:pb-24
              cursor-pointer
            "
              >
                Login
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
            src="../../assets/register-background.jpg"
            className="h-screen w-screen object-cover"
            alt=""
          />
        </div>
      </section>
    </AuthLayout>
  );
};

export default Register;
