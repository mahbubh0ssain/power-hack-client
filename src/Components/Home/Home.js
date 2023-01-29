import React, { useRef, useState } from "react";
import AddNewBill from "./AddNewBill";
import SearchBillings from "./SearchBillings";
import Table from "./Table";

const Home = () => {
  const [search, setSearch] = useState("");
  const searchRef = useRef();
  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex items-center justify-center my-6 px-4">
        {/* search billings */}
        <SearchBillings searchRef={searchRef} handleSearch={handleSearch} />
        {/* add billing */}
        <AddNewBill />
      </div>
      {/* table for user data */}
      <div className="my-4">
        <Table search={search} />
      </div>
    </div>
  );
};

export default Home;
