const SearchBillings = ({ handleSearch, searchRef }) => {
  return (
    <div className="flex-1 bg-red-500 mr-2 p-2 rounded-md">
      <div className="flex items-center">
        <p className="text-2xl mr-2">Billings</p>
        <input
          className="input"
          type="text"
          ref={searchRef}
          placeholder="Search by full name/email/phone"
        />
        <button onClick={handleSearch} className="btn ml-2">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBillings;
