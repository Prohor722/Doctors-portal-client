import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
  const { name, email, specialty, img, _id } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <th>
        <div className="avatar">
          <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="doctor" />
          </div>
        </div>
      </th>
      <th>{name}</th>
      <th>{specialty}</th>
      <th>
        <label
          onClick={() => setDeletingDoctor(doctor)}
          htmlFor="my-modal-6"
          className="btn btn-xs btn-error"
        >
          Delete
        </label>
      </th>
    </tr>
  );
};

export default DoctorRow;
