import React from "react";

const EditModal = ({ data }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <input type="checkbox" id="edit-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="edit-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleSubmit}>
            <p className="text-2xl text-center">Edit Billing Info</p>
            <div className="form-control w-full">
              <label>Name</label>
              <input
                required
                defaultValue={data?.name}
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

export default EditModal;
