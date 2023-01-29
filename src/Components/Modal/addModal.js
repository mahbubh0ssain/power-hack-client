import axios from "axios";
import React from "react";

const AddModal = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const amount = form.amount.value;
    const billingInfo = { name, email, number, amount };
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/add-billing`, billingInfo)
      .then((res) => {
        if (res?.data?.result?.acknowledged) {
          form.reset();
          
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="add-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="add-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleSubmit}>
            <p className="text-2xl text-center">Add Billing Info</p>
            <div className="form-control w-full">
              <label>Name</label>
              <input
                required
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
                type="number"
                name="number"
                placeholder="Type phone here..."
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label>Amount</label>
              <input
                required
                type="text"
                name="amount"
                placeholder="Type amount here..."
                className="input input-bordered w-full"
              />
            </div>
            <button className="btn w-full mt-3" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddModal;
