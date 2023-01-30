import React, { useContext } from "react";
import { MoonLoader } from "react-spinners";
import { USER_CONTEXT } from "../../Context/AuthContext";
import EditModal from "../Modal/editModal";
import TableData from "./TableData";

const Table = () => {
  const {
    billings,
    setEditBill,
    loading,
    refresh,
    setModalOpen,
    setRefresh,
    editBill,
    modalOpen,
  } = useContext(USER_CONTEXT);

  if (!billings.length) {
    return (
      <div className="flex items-center justify-center">
        <MoonLoader color="#36d7b7" size={200} />
      </div>
    );
  }

  return (
    <div className="overflow-x-auto max-w-[1440px] mx-auto px-4 ">
      <table className="table w-full striped">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Billing ID</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {billings?.map((bill) => {
            return (
              <TableData
                key={bill._id}
                bill={bill}
                setEditBill={setEditBill}
                loading={loading}
                refresh={refresh}
                setRefresh={setRefresh}
              />
            );
          })}
        </tbody>
      </table>
      {modalOpen && (
        <EditModal
          refresh={refresh}
          setModalOpen={setModalOpen}
          setRefresh={setRefresh}
          editBill={editBill}
        />
      )}
    </div>
  );
};

export default Table;
