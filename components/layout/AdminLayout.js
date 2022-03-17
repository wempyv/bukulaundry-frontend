import { React, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Sidebar from "../component/Sidebar";
import ShowSidebar from "../component/ShowSidebar";

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const [isSidebarShow, setSideBarShow] = useState(false);

  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');

  useEffect(() => {
    refreshToken();
  }, [])

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);

    } catch (error) {
      if (error.response) {
        router.push('/auth')
      }
    }
  }

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(async (config) => {
    const currentDate = new Date();
    if (expire * 1000 < currentDate.getTime()) {
      const response = await axios.get('http://localhost:5000/token');
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setToken(response.data.accessToken);

      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  })

  return (
    <div className="flex">
      <div className="md:w-1/5 ">
        <Sidebar
          isSidebarShow={isSidebarShow}
          setSideBarShow={setSideBarShow}
        />
        <ShowSidebar
          isSidebarShow={isSidebarShow}
          setSideBarShow={setSideBarShow}
        />
      </div>
      <div className="flex mt-9 ml-0 md:w-4/5 w-full min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
