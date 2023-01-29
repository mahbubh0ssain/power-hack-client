import React from "react";
import Pagination from "../Pagination/Pagination";
import AddNewBill from "./AddNewBill";
import SearchBillings from "./SearchBillings";
import Table from "./Table";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-3 justify-center my-6 px-4">
        <SearchBillings />
        <AddNewBill />
      </div>
      <div className="my-4">
        <Table />
      </div>
      <Pagination />
    </div>
  );
};

export default Home;
