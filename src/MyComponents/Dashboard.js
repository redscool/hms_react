import React from "react";
import "./Dashboard.css";
import image from "../resources/dashboard.jpg";
import logo from "../resources/logo.png";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="left-container">
        <div className="top-left">
          <div className="logo-container">
            <img src={logo} className="logo"></img>
          </div>
        </div>
        <div className="bottom-left">
          <ul>
            <li>
              <div
                className="menu active"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </div>
            </li>
            <li>
              <div className="menu " onClick={() => navigate("/addpatient")}>
                Add Patient
              </div>
            </li>
            <li>
              <div className="menu " onClick={() => navigate("/addstaff")}>
                Add Staff
              </div>
            </li>
            <li>
              <div className="menu " onClick={() => navigate("/viewstaff")}>
                View Staff
              </div>
            </li>
            <li>
              <div
                className="menu "
                onClick={() => navigate("/manageemergency")}
              >
                Manage emergency wards
              </div>
            </li>
            <li>
              <div className="menu " onClick={() => navigate("/managerooms")}>
                Manage Rooms
              </div>
            </li>
            <li>
              <div
                className="menu "
                onClick={() => navigate("/managemedicines")}
              >
                Manage Medicines
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* <img src={image}></img> */}
      <div
        className="right-container"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="title">
          <div className="nav">
            <ul>
              <li>Help</li>
              <li>Contact us</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
        <div className="cards-container">
          <div className="cards">
            <h1>Generate Invoices</h1>
          </div>
          <div className="cards" onClick={() => navigate("/appointments")}>
            <h1>Book Appointments</h1>
          </div>
          <div className="cards">
            <h1>Generate Insurance</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
