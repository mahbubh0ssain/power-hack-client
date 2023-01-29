import React, { useState } from "react";
import AddModal from "../Modal/addModal";

const AddNewBill = () => {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <>
      <label
        htmlFor="add-modal"
        className="bg-cyan-500 p-4 rounded-md text-xl flex items-center cursor-pointer"
      >
        Add New Bill
      </label>
      {modalOpen && (
        <AddModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
    </>
  );
};

export default AddNewBill;
