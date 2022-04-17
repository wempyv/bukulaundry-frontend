import { useState, useContext, useEffect } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import TableCustomer from "../../components/component/TableCustomer";
import Modal from "../../components/component/Modal";
import PrintDataCustomer from '../../components/component/PrintDataCustomer';
import { userContext } from "../../context/UserContext";
import axios from 'axios';

const Index = () => {
  const user = useContext(userContext);
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState('');
  const [customers, setCustomer] = useState([])


  useEffect(() => {
    user.refreshToken()
    getCustomer();
  }, []);


  const getCustomer = async () => {
    const response = await axios.get(`http://localhost:5000/customers/${user.id}`);
    setCustomer(response.data);
  }

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  }


  return (
    <AdminLayout>
      <div className="flex flex-col w-full md:ml-4 px-2 items-stretch">
        <section>
          <div className="flex md:flex-row flex-col">
            <div className="flex items-center">
              <h1 className="text-2xl font-medium pr-3">Data Customer</h1>

            </div>
            <button
              className="rounded w-full md:w-[18rem] h-[2.8rem] bg-gray-900 text-white text-sm my-6 md:my-0  hover:scale-105 hover:shadow-xl duration-100 ease-in-out ml-auto font-medium"
              onClick={() => setShowModal(true)}
            >
              + Tambah Customer
            </button>
          </div>
          <div className="flex w-full mt-2">
            <input
              type="text"
              className="h-10 border rounded-md w-full pl-2"
              placeholder="Cari data customer" value={input} onChange={handleChange}
            />
            <PrintDataCustomer customers={customers} user={user} />
          </div>
          <div className="md:flex w-full my-4 items-center">
            <TableCustomer input={input} getCustomer={getCustomer} customers={customers} setCustomer={setCustomer} />
          </div>
        </section>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </AdminLayout>
  );
};

export default Index;
