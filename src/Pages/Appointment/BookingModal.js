import React, { useEffect } from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";import { toast } from 'react-toastify';


const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  const { name, slots } = treatment;
  const [ user, loading, error] = useAuthState(auth);

  if(loading){
    <Loading/>
  }

  // const notify = () => toast("You have booked and appointment.");

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(slot);
    const formattedDate = format(date, 'PP');

    const booking = {
      treatment : name,
      treatmentId : treatment._id,
      date: formattedDate,
      slot,
      patientName: user.displayName,
      patientEmail: user.email,
      phone: e.target.phone.value
    }
    console.log(booking)

    fetch('http://localhost:5000/booking',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.success){
        toast(`Appointment is set, ${formattedDate} at ${slot}`);
      }
      else{
        toast.error(`Already have an Appointment on ${data.booking?.date} at ${data.booking?.slot}`);
      }
      refetch();
      setTreatment(null);
    })

  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
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
              {slots.map((slot,index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              value={user.displayName}
              disabled
              className="input input-bordered w-full font-bold"
            />
            <input
              name="email"
              type="text"
              disabled
              value={user.email}
              className="input input-bordered w-full font-bold"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full font-bold"
            />
            <input type="submit" className="btn btn-accent w-full" />
          </form>

        </div>
      </div>
    </div>
  );
};

export default BookingModal;
