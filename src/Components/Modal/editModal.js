import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const EditModal = ({ editBill, refresh, setRefresh, setModalOpen }) => {
  const { _id, name, email, number, amount } = editBill;

  const handleEdit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const amount = form.amount.value;
    const billingInfo = { name, email, number, amount };
    axios
      .patch(
        `${process.env.REACT_APP_SERVER_URL}/api/update-billing/${_id}`,
        billingInfo
      )
      .then((res) => {
        if (res?.data?.result?.acknowledged) {
          Swal.fire("Successfully updated");
          setRefresh(!refresh);
          form.reset();
          setModalOpen(false);
          console.log(res);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="edit-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="edit-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-gradient-to-l from-green-400 to-blue-500 border-0"
          >
            ✕
          </label>
          <form onSubmit={handleEdit}>
            <p className="text-2xl text-center">Edit Billing Info</p>
            <div className="form-control w-full">
              <label>Name</label>
              <input
                required
                defaultValue={name}
                type="name"
                name="name"
                placeholder="Type name here..."
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label>Email</label>
              <input
                required
                defaultValue={email}
                type="email"
                name="email"
                placeholder="Type email here..."
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label>Phone</label>
              <input
                required
                defaultValue={number}
                type="text"
                name="number"
                placeholder="Type phone here..."
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label>Amount</label>
              <input
                required
                defaultValue={amount}
                type="text"
                name="amount"
                placeholder="Type amount here..."
                className="input input-bordered w-full"
              />
            </div>
            <button
              className="btn w-full mt-3 bg-gradient-to-l from-green-400 to-blue-500 border-0"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditModal;
