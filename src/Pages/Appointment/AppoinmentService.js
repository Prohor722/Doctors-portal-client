import React from "react";

const AppoinmentService = ({ service, setTreatment }) => {
  const { name, slots } = service;
  //   console.log(slots);
  const len = slots.length;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>
          {len ? (
            <span>{slots[0]} slots available</span>
          ) : (
            <span className="text-red-500">No Slots Available.</span>
          )}
        </p>
        <p>
          {len}
          {len > 1 ? " spaces" : " space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            onClick={() => setTreatment(service)}
            disabled={len < 1}
            className="btn btn-secondary text-white modal-button"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentService;
