import { useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import TableCustomer from "../../components/component/TableCustomer";
import Modal from "../../components/component/Modal";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <AdminLayout>
      <div className="flex flex-col w-full md:ml-4 px-2 items-stretch">
        <section>
          <div className="flex md:flex-row flex-col">
            <h1 className="text-2xl font-medium">Data Customer</h1>
            <button
              className="rounded w-full md:w-[18rem] h-[2.8rem] bg-gray-900 text-white text-sm my-4 md:my-0  hover:scale-105 hover:shadow-xl duration-300 ease-in-out ml-auto font-medium"
              onClick={() => setShowModal(true)}
            >
              + Tambah Customer
            </button>
          </div>
          <div className="md:flex w-full my-4 items-center">
            <TableCustomer />
          </div>
        </section>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </AdminLayout>
  );
};

export default Index;
