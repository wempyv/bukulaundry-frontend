import React from "react";
import axios from 'axios';
import { useRouter } from "next/router";

const Sidebar = ({ setSideBarShow, isSidebarShow }) => {
  const router = useRouter();

  const Logout = async () => {
    try {
      await axios.delete('http://localhost:5000/logout');
      localStorage.removeItem('userId');
      router.push('/auth');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div
      className={`z-10 fixed md:static w-56 md:w-full top-0 h-full md:h-full m-0 flex-col bg-[#F6F8FA] text-white shadow flex duration-100 ease-in-out ${isSidebarShow ? "left-0" : "-left-96"
        }`}
    >
      <section className="flex justify-center my-8">
        <img src="/assets/logo.svg" className="h-[38px] object-cover" />
      </section>
      <section className=" flex flex-col mx-auto my-16">
        <li
          onClick={() => router.push("/")}
          className={`flex cursor-pointer items-center hover:scale-105 duration-100 ease-in-out my-4  ${router.asPath == "/" ? "text-[#232020]" : " text-gray-300"
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
            />
          </svg>
          <span className="mx-2">Dashboard</span>
        </li>
        <li
          onClick={() => router.push("/transactions")}
          className={`flex cursor-pointer items-center hover:scale-105 duration-100 ease-in-out my-4  ${router.asPath == "/transactions"
            ? "text-[#232020]"
            : "text-gray-300"
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
          <span className="mx-2">Transaksi</span>
        </li>
        <li
          onClick={() => router.push("/customers")}
          className={`flex cursor-pointer items-center hover:scale-105 duration-100 ease-in-out my-4  ${router.asPath == "/customers" ? "text-[#232020]" : "text-gray-300"
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <span className="mx-2">Customer</span>
        </li>
        <li
          onClick={() => router.push("/settings")}
          className={`flex cursor-pointer items-center hover:scale-105 duration-100 ease-in-out my-4  ${router.asPath == "/settings" ? "text-[#232020]" : "text-gray-300"
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="mx-2">Pengaturan</span>
        </li>
        <li className="flex cursor-pointer items-center hover:scale-105 duration-100 ease-in-out my-4 text-gray-300" onClick={Logout}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span className="mx-2">Logout</span>
        </li>
        <li className="flex cursor-pointer items-center hover:scale-105 duration-100 ease-in-out mt-12 animate-bounce text-blue-500 md:hidden ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="ml-4" onClick={() => setSideBarShow(!isSidebarShow)}>
            Close sidebar
          </span>
        </li>
      </section>
    </div>
  );
};

export default Sidebar;
