import React from "react";
import logo from "../resources/logo.png";
import "./Addpatient.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function ManageMedicines() {
  const navigate = useNavigate();
  const [showMedicine, setShow] = useState(false);
  useEffect(() => {}, []);
  let medicineId = 100001;
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
              <div className="menu " onClick={() => navigate("/Addstaff")}>
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
                className="menu active"
                onClick={() => navigate("/managemedicines")}
              >
                Manage Medicines
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-form">
        <div className="title">
          <div className="nav">
            <ul>
              <li id="help"> Help</li>
              <li id="contact-us">Contact us</li>
              <li id="Logout" onClick={() => navigate("/")}>
                Logout
              </li>
            </ul>
          </div>
        </div>
        <div className="pagetitlediv">
          <label className="pagetitle">Manage Medicines</label>
        </div>
        <div className="medicine">
          <div className="aadhar-div">
            <div className="input-field">
              <label className="aadhar label">Medicine ID</label>
              <input
                type="number"
                className="aadhar input1"
                id="medicineId"
              ></input>
            </div>
            <div>
              <button
                className="button"
                id="fetch-details"
                onClick={() => {
                  medicineId = document.getElementById("medicineId").value;
                  console.log(medicineId);
                  setShow(true);
                }}
              >
                Details
              </button>
            </div>
          </div>
          <div className={showMedicine ? "medicine-details" : "hidden"}>
            <p>
              Medicine ID
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              {medicineId}{" "}
            </p>
            <p>
              Medicine
              Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Paracetamol
            </p>
            <p>
              Quantity Available
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              2000 Units
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
