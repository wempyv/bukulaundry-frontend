import React, { useState } from "react";
import dynamic from "next/dynamic";
import toast, { Toaster } from 'react-hot-toast';
const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });

const Modal = ({ showModal, setShowModal, detailItem, setDetailItem }) => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [nameItem, setNameItem] = useState('');
  const [total, setTotal] = useState('');

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setShowPicker(false);
  };

  const addItem = (e) => {
    e.preventDefault()

    const item = {
      "id": Math.floor(1 + (Math.random() * (1000 - 1))),
      "icon": chosenEmoji.emoji,
      "name_item": nameItem,
      "total": total
    }
    setDetailItem(detailItem => [...detailItem, item])
    setChosenEmoji(null)
    setNameItem('')
    setTotal('')
    setShowPicker(false)

    const notify = () => toast(`Menambahkan ${nameItem}!`, {
      icon: chosenEmoji.emoji,
    });

    notify()
  }


  return (
    showModal && (
      <div
        aria-hidden="true"
        className=" flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal h-full md:inset-0 drop-shadow-2xl"
      >
        <Toaster position="top-right" reverseOrder={false} />
        <div className="relative px-4 w-full max-w-md h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => setShowModal(false)}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <form
              className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
              onSubmit={addItem}
            >
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Tambah item
              </h3>
              {chosenEmoji !== null && (
                <h2 className="text-3xl">{chosenEmoji.emoji}</h2>
              )}
              <div>
                <label
                  htmlFor="nama item"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Nama item
                </label>
                <div className="flex relative">
                  <input
                    type="text"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-600 "
                    placeholder="Contoh : Baju"
                    autoComplete="off"
                    value={nameItem}
                    onChange={(e) => setNameItem(e.target.value)}
                    required
                  />
                  <span
                    onClick={() => setShowPicker(true)}
                    className="flex items-center mx-auto text-xl cursor-pointer "
                  >
                    😀
                  </span>
                  {showPicker && (
                    <Picker
                      onEmojiClick={onEmojiClick}
                      pickerStyle={{ width: "100%", position: "absolute" }}
                    />
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="jumlah_item"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Jumlah Item
                </label>
                <input
                  type="number"
                  name="jumlah_item"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  value={total}
                  onChange={(e) => setTotal(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#232020] hover:scale-105 duration-100 ease-out focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Tambah Item
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
