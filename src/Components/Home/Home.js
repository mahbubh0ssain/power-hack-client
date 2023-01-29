import React from "react";
import AddNewBill from "./AddNewBill";
import SearchBillings from "./SearchBillings";
import Table from "./Table";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex items-center justify-center my-6 px-4">
        {/* search billings */}
        <SearchBillings />
        {/* add billing */}
        <AddNewBill />
      </div>
      {/* table for user data */}
      <div className="my-4">
        <Table />
      </div>
    </div>
  );
};

export default Home;
