import React, { useState, useEffect, createContext } from 'react'
import { useRouter } from "next/router";
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const userContext = createContext();

const UserProvider = ({ children }) => {

    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');

    const userProfile = {
        name,
        email
    }

    useEffect(() => {
        refreshToken();
    }, [])

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setEmail(decoded.email);
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
            setEmail(decoded.email);

            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    })

    return (
        <userContext.Provider value={userProfile}>
            {children}
        </userContext.Provider>
    )
}

export { UserProvider, userContext }