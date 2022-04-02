import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import axios from 'axios';

const DetailInvoiceCustomer = () => {
    const router = useRouter();
    const { id } = router.query

    return (
        <div className="flex flex-col w-full  px-2 items-center  justify-center">
            {id}
        </div>
    )
}

export default DetailInvoiceCustomer;