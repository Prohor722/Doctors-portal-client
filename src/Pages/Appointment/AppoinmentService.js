import React from "react";

const AppoinmentService = ({ service, setTreatment }) => {
  const { name, slots } = service;
//   console.log(slots);
  const len = slots.length;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-secondary">{name}</h2>
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
        <div class="card-actions justify-center">
          <label
          for="booking-modal"
            onClick={() => setTreatment(service)}
            disabled={len < 1}
            class="btn btn-secondary text-white modal-button"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentService;
