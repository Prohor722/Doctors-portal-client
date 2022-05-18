import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { signOut } from "firebase/auth";

const MyAppointments = () => {
  const [user, loading] = useAuthState(auth);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(
        `https://intense-badlands-42287.herokuapp.com/booking?email=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            localStorage.removeItem("accessToken");
            signOut(auth);
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setAppointments(data);
        });
    }
  }, [user]);

  //   console.log(appointments);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h2>My Appointments: {appointments.length}</h2>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Service</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={appointment._id}>
                <th>{index + 1}</th>
                <td>{appointment.patientName}</td>
                <td>{appointment.treatment}</td>
                <td>{appointment.slot}</td>
                <td>{appointment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
