import axios from "axios";
import React, { useEffect, useState } from "react";
import EditModal from "../Modal/editModal";
import TableData from "./TableData";

const Table = () => {
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const [billings, setBillings] = useState([]);
  const [editBill, setEditBill] = useState({});
  const [modalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/billing-list`)
      .then((res) => {
        if (res?.data?.result?.length) {
          setLoading(false);
          setRefresh(!refresh);
          setModalOpen(true);
          setBillings(res?.data?.result);
        }
      });
  }, [refresh, loading]);

  return (
    <div className="overflow-x-auto max-w-[1440px] mx-auto px-4">
      <table className="table w-full">
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
