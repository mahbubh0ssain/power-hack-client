import { useContext, useRef } from "react";
import { USER_CONTEXT } from "../../Context/AuthContext";

const SearchBillings = () => {
  const { setSearch } = useContext(USER_CONTEXT);

  const searchRef = useRef();

  const handleSearch = () => {
    setSearch(searchRef?.current?.value);
  };

  return (
    <div className="py-2 px-2 rounded-md bg-gradient-to-r from-green-400 to-blue-500  cursor-pointer text-xl">
      <div className="flex items-center justify-between">
        <input
          className="input w-full "
          type="text"
          ref={searchRef}
          placeholder="Search by full name/email/phone"
        />
        <button
          onClick={handleSearch}
          className="btn bg-gradient-to-l from-green-400 to-blue-500  ml-2 border-0"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBillings;
