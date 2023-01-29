import React, { useContext } from "react";
import { USER_CONTEXT } from "../../Context/AuthContext";

const Pagination = () => {
  const { numberOfPages, setCurrentPage, currentPage } =
    useContext(USER_CONTEXT);

  return (
    <div className="flex items-center justify-center mb-4">
      <div className="btn-group">
        {[...Array(numberOfPages).keys()].map((number) => (
          <button
            onClick={() => setCurrentPage(number)}
            key={number}
            className={`btn btn-md  ${
              currentPage === number
                ? "bg-gradient-to-r from-green-400 to-blue-500 border-0"
                : ""
            } `}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
