import React from "react";
import AddModal from "../Modal/addModal";

const AddNewBill = () => {
  return (
    <>
      <label
        htmlFor="add-modal"
        className="bg-cyan-500 p-4 rounded-md text-xl flex items-center cursor-pointer"
      >
        Add New Bill
      </label>
      <AddModal />
    </>
  );
};

export default AddNewBill;
