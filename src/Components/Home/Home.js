import React from "react";
import Table from "./Table";

const Home = () => {
  const addNewBill = () => {
    console.log("CLICKED");
  };
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex items-center justify-center my-6 px-4">
        {/* search billings */}
        <div className="flex-1 bg-red-500 mr-2 p-2 rounded-md">
          <div className="flex items-center">
            <p className="text-2xl mr-2">Billings</p>
            <input
              className="input"
              type="text"
              placeholder="Search by full name/email/phone"
            />
          </div>
        </div>
        {/* add billing */}
        <div
          onClick={addNewBill}
          className="bg-cyan-500 p-4 rounded-md text-xl flex items-center cursor-pointer"
        >
          Add New Bill <span className="text-4xlm-0">+</span>
        </div>
      </div>
      <div className="my-4">
        <Table />
      </div>
    </div>
  );
};

export default Home;
