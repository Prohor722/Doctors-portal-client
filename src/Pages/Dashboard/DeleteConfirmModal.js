import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
  const { name, _id } = deletingDoctor;

  const handleDelete = (id) => {
    fetch(`https://intense-badlands-42287.herokuapp.com/doctor/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Doctor ${name}`);
        }
        refetch();
        setDeletingDoctor(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to delete?
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <button
              className="btn btn-xs btn-error"
              onClick={() => handleDelete(_id)}
            >
              Delete
            </button>
            <label htmlFor="my-modal-6" className="btn btn-xs">
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
