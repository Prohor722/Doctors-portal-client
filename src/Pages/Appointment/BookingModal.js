import React from "react";
import { format } from "date-fns";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { name, slots } = treatment;
  //   slots && slots.map(s=>console.log(s))

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const patientName = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    console.log(slot);

    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg mt-[-15px]">{name}</h3>

          <form
            className="grid grid-cols-1 gap-3 justify-items-center mt-16"
            onSubmit={handleBooking}
          >
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              className="input input-bordered w-full font-bold"
            />
            <select
              name="slot"
              className="select select-bordered font-bold w-full"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full font-bold"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full font-bold"
            />
            <input
              name="email"
              type="text"
              placeholder="Email"
              className="input input-bordered w-full font-bold"
            />
            <input type="submit" className="btn btn-accent w-full" />
          </form>
          {/* <div className="modal-action">
            <label for="booking-modal" className="btn">
              Yay!
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
