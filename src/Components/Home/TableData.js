const TableData = ({ bill, setEditBill, loading, refresh, setRefresh }) => {
  const { _id, name, email, number, amount } = bill;

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
          Edit
        </label>
        <div className="bg-red-700 p-2 rounded-md font-bold cursor-pointer">
          Delete
        </div>
      </td>
    </tr>
  );
};

export default TableData;
