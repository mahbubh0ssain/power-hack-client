import axios from "axios";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const TableData = ({ bill, setEditBill, loading, refresh, setRefresh }) => {
  const { _id, name, email, number, amount } = bill;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to retrieve!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#B91C1C",
      cancelButtonColor: "#4ADE80",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result?.isConfirmed) {
        axios
          .delete(`${process.env.REACT_APP_SERVER_URL}/delete-billing/${id}`)
          .then((res) => {
            if (res?.data?.result?.acknowledged) {
              setRefresh(!refresh);
              Swal.fire("Deleted!");
            }
          });
      }
    });
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{number}</td>
      <td>{loading ? "Generating Id..." : _id}</td>
      <td>${amount}</td>
      <td className="flex gap-2">
        <label
          onClick={() => setEditBill(bill)}
          htmlFor="edit-modal"
          className="bg-green-400 p-2 rounded-md font-bold cursor-pointer"
        >
          <BiEdit className="w-6" />
        </label>
        <div
          onClick={() => handleDelete(_id)}
          className="bg-red-700 p-2 rounded-md font-bold cursor-pointer"
        >
          <MdDeleteForever />
        </div>
      </td>
    </tr>
  );
};

export default TableData;
