import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import AuthLayout from "../../components/layout/AuthLayout";

const Register = () => {
  const router = useRouter();
  const [msg, setMsg] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [address, setAddress] = useState('');
  const [whatsapp_number, setWhatsAppNumber] = useState('');

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        address: address,
        whatsapp_number: whatsapp_number
      });
      router.push("/auth");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };


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
            onSubmit={Register}
            className="flex flex-col"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="form-group mt-4 flex flex-col">
              <label htmlFor="Email" className="text-sm">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                className="border my-2 border-gray-300 rounded md:w-[18rem] p-1"
              />
            </div>
            <div className="form-group mt-4 flex flex-col">
              <label htmlFor="Password" className="text-sm">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
                className="border my-2 border-gray-300 rounded md:w-[18rem] p-1"
              />
            </div>
            <div className="form-group mt-4 flex flex-col">
              <label htmlFor="Konfirmasi Password" className="text-sm">
                Konfirmasi Password
              </label>
              <input
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
                type="password"
                required
                className="border my-2 border-gray-300 rounded md:w-[18rem] p-1"
              />
            </div>
            <div className="form-group mt-4 flex flex-col">
              <label htmlFor="Nama Laundry" className="text-sm">
                Nama Laundry
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
                className="border my-2 border-gray-300 rounded md:w-[18rem] p-1"
              />
            </div>
            <div className="form-group mt-4 flex flex-col">
              <label htmlFor="Alamat Laundry" className="text-sm">
                Alamat Laundry
              </label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                required
                className="border my-2 border-gray-300 rounded md:w-[18rem] p-1"
              />
            </div>
            <div className="form-group mt-4 flex flex-col">
              <label htmlFor="Nomor Whatsapp" className="text-sm">
                Nomor Whatsapp
              </label>
              <input
                value={whatsapp_number}
                onChange={(e) => setWhatsAppNumber(e.target.value)}
                type="number"
                required
                className="border my-2 border-gray-300 rounded md:w-[18rem] p-1"
              />
            </div>
            <p className="text-sm mt-2 text-red-800 md:w-[18rem]">{msg}</p>
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
