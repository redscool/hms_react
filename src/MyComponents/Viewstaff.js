import React from "react";
import logo from "../resources/logo.png";
import "./Addpatient.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Viewstaff() {
  const navigate = useNavigate();
  const [showMedicine, setShow] = useState(false);
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
              <div className="menu " onClick={() => navigate("/dashboard")}>
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
              <div className="menu active">View Staff</div>
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
      <div className="right-form">
        <div className="title">
          <div className="nav">
            <ul>
              <li id="help"> Help</li>
              <li id="contact-us">Contact us</li>
              <li id="logout">Logout</li>
            </ul>
          </div>
        </div>
        <div className="pagetitlediv">
          <label className="pagetitle">View Staff Details</label>
        </div>
        <div className="aadhar-div">
          <div className="input-field">
            <label className="aadhar label">Aadhar Number</label>
            <input type="number" className="aadhar input1" id="aadhar"></input>
          </div>
          <div>
            <button
              className="button"
              id="fetch-details"
              onClick={() => setShow(true)}
            >
              Fetch Details
            </button>
          </div>
        </div>
        <div className={showMedicine ? "patient-form" : "hidden"}>
          <div className="section-1">
            <div className="input-field">
              <label className="name label">Name</label>
              <p className="name output">Rohit Sharma</p>
            </div>
            <div className="input-field">
              <label className="gender label">Gender</label>
              <p className="gender output">Male</p>
            </div>
            <div className="input-field">
              <label className="dob label">Date of Birth</label>
              <p className="dob output">28-04-1986</p>
            </div>
            <div className="input-field">
              <label className="address label">Address</label>
              <p className="address output">D-125 Street No. 25</p>
            </div>
          </div>
          <div className="section-2">
            <div className="input-field">
              <label className="email label">E-mail</label>
              <p className="email output">rohitsharma45@gmail.com</p>
            </div>
            <div className="input-field">
              <label className="contact label">Contact</label>
              <p className="contact output">9876543210</p>
            </div>
            <div className="input-field">
              <label className="designation label">Designation</label>
              <p className="designation output">Doctor</p>
            </div>
            <div className="input-field">
              <label className="doj label">Date of Joining</label>
              <p className="doj output">12-04-2008</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
