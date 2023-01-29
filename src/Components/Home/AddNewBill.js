import React, { useState } from "react";
import AddModal from "../Modal/addModal";
import { HiOutlinePlusCircle } from "react-icons/hi";
const AddNewBill = () => {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <>
      <label
        htmlFor="add-modal"
        className=" flex items-center justify-between py-1 px-2 rounded-md bg-gradient-to-r from-green-400 to-blue-500 text-white cursor-pointer text-3xl"
      >
        <p>Add New Bill</p>
        <HiOutlinePlusCircle className="text-6xl" />
      </label>
      {modalOpen && (
        <AddModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
    </>
  );
};

export default AddNewBill;
