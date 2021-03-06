import React, { useState, useEffect, createContext } from 'react'
import { useRouter } from "next/router";
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const userContext = createContext();

const UserProvider = ({ children }) => {

    const router = useRouter();
    const [idLaundry, setIdLaundry] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [whatsapp_number, setWhatsAppNumber] = useState('');
    const [priceWashRubbing, setPriceWashRubbing] = useState('');
    const [priceRubbing, setPriceRubbing] = useState('');
    const [priceWash, setPriceWash] = useState('');
    const [serviceFee, setServiceFee] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [paymentMethod, setPaymentMethod] = useState([])
    const id = typeof window !== 'undefined' ? localStorage.getItem('userId') : null

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);

            localStorage.setItem('userId', decoded.userId);
            setPaymentMethod(JSON.parse(decoded.payment_method));
            setName(decoded.name);
            setEmail(decoded.email);
            setAddress(decoded.address);
            setWhatsAppNumber(decoded.whatsapp_number);
            setPriceWashRubbing(decoded.price_wash_rubbing);
            setPriceRubbing(decoded.price_rubbing);
            setPriceWash(decoded.price_wash);
            setServiceFee(decoded.service_fee);
            setIdLaundry(decoded.idLaundry);
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

            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    })


    const userProfile = {
        id,
        name,
        email,
        address,
        whatsapp_number,
        priceWashRubbing,
        priceRubbing,
        priceWash,
        serviceFee,
        refreshToken,
        idLaundry,
        paymentMethod
    }

    return (
        <userContext.Provider value={userProfile}>
            {children}
        </userContext.Provider>
    )
}

export { UserProvider, userContext }