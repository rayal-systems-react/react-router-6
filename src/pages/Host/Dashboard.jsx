import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <p>Dashboard</p>
      <Outlet />
    </>
  );
};

export default Dashboard;
