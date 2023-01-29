import React from "react";

const Table = () => {
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
          <tr>
            <td>Cy Ganderton</td>
            <td>mahbubh0ssain.dev@gmail.com</td>
            <td>01735826627</td>
            <td>4354sajhrt34957n</td>
            <td>$ 4000</td>
            <td className="flex gap-2">
              <div className="bg-green-400 p-2 rounded-md font-bold cursor-pointer">
                Edit
              </div>
              <div className="bg-red-700 p-2 rounded-md font-bold cursor-pointer">
                Delete
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
