import React from "react";

const DoctorRow = ({ doctor, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <th>
        <div class="avatar">
          <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={doctor.img} alt="doctor" />
          </div>
        </div>
      </th>
      <th>{doctor.name}</th>
      <th>{doctor.specialty}</th>
      <th>
        <button className="btn btn-xs btn-error">Delete</button>
      </th>
    </tr>
  );
};

export default DoctorRow;
