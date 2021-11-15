import React from "react";
import logo from "../resources/logo.png";
import "./Addpatient.css";
import { useNavigate } from "react-router-dom";
export default function Addstaff() {
  const showModal = function (className, instruction) {
    className.classList.remove("hidden");
    document.getElementById("instruction").innerHTML = instruction;
  };

  const hideModal = function (className) {
    className.classList.add("hidden");
  };
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
              <div
                className="menu active"
                onClick={() => navigate("/addstaff")}
              >
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
      <div className="modal hidden">
        <button
          className="close-modal"
          onClick={() => {
            const modal = document.querySelector(".modal");
            const overlay = document.querySelector(".overlay");
            hideModal(modal);
            hideModal(overlay);
          }}
        >
          &times;
        </button>
        {/* <h2>❓ HELP</h2> */}
        <p id="instruction"></p>
      </div>
      <div className="overlay hidden"></div>
      <div className="right-form">
        <div className="title">
          <div className="nav">
            <ul>
              <li id="help"> Help</li>
              <li id="contact-us">Contact us</li>
              <li id="Logout">Logout</li>
            </ul>
          </div>
        </div>
        <div className="pagetitlediv">
          <label className="pagetitle">Add Staff Details</label>
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
              onClick={() => {
                const aadhar = document.getElementById("aadhar").value;
                if (aadhar != null && aadhar.length == 12) {
                  document.getElementById("name").value = "Rohit";
                  document.getElementById("gender").options.selectedIndex = 0;
                  document.getElementById("dob").value = "1984-02-14";
                  document.getElementById("address").value =
                    "K-342 Street No.2, Nehru Place, Delhi";
                  document.getElementById("contact").value = "9874563210";
                  // document.getElementById();
                  // console.log(name);
                } else {
                  const modal = document.querySelector(".modal");
                  const overlay = document.querySelector(".overlay");
                  showModal(modal, "Wrong input");
                  showModal(overlay, "wrong input");
                }
              }}
            >
              Fetch Details
            </button>
          </div>
        </div>
        <div className="patient-form">
          <div className="section-1">
            <div className="input-field">
              <label className="name label">Name</label>
              <input type="text" className="name input1" id="name"></input>
            </div>
            <div className="input-field">
              <label className="gender label">Gender</label>
              <select className="gender input1" id="gender">
                <option value="item-1">Male</option>
                <option value="item-2">Female</option>
                <option value="item-3">Other</option>
              </select>
            </div>
            <div className="input-field">
              <label className="dob label">Date of Birth</label>
              <input type="date" className="dob input1" id="dob"></input>
            </div>
            <div className="input-field">
              <label className="address label">Address</label>
              <input
                type="text"
                className="address input1"
                id="address"
              ></input>
            </div>
          </div>
          <div className="section-2">
            <div className="input-field">
              <label className="email label">E-mail</label>
              <input type="email" className="email input1"></input>
            </div>
            <div className="input-field">
              <label className="contact label">Contact</label>
              <input
                type="number"
                className="contact input1"
                id="contact"
              ></input>
            </div>
            <div className="input-field">
              <label className="designation label">Designation</label>
              <select className="designation input1">
                <option value="item-1">Doctor</option>
                <option value="item-2">Surgeon</option>
                <option value="item-3">Nurse</option>
              </select>
            </div>
            <div className="input-field">
              <label className="doj label">Date of Joining</label>
              <input type="date" className="doj input1"></input>
            </div>
          </div>
        </div>
        <div>
          <button
            className="button"
            id="submit"
            onClick={() => {
              const modal = document.querySelector(".modal");
              const overlay = document.querySelector(".overlay");
              showModal(modal, "");
              showModal(overlay, "Staff Details Added Successfully");
              // navigate("/dashboard");
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
