import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user]= useAuthState(auth);
  const [admin] = useAdmin(user);
  
  return (
    <div class="drawer drawer-mobile mt-20 ">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-purple-500 text-3xl">Welcome to yourDashboard</h2>
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Review</Link>
          </li>
          <li>
            <Link to="/dashboard/history">My History</Link>
          </li>
          {admin && <li>
            <>
            <Link to="/dashboard/users">All Users</Link>
            <Link to="/dashboard/addDoctor">Add Doctor</Link>
            <Link to="/dashboard/manageDoctors">Manage Doctors</Link>
            </>
          </li>}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
