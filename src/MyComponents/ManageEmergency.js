import React from "react";
import logo from "../resources/logo.png";
import "./Addpatient.css";
import { useNavigate } from "react-router-dom";
export default function ManageEmergency() {
  const navigate = useNavigate();
  const showModal = function (className, instruction) {
    className.classList.remove("hidden");
    document.getElementById("instruction").innerHTML = instruction;
  };

  const hideModal = function (className) {
    className.classList.add("hidden");
  };
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
              <div className="menu " onClick={() => navigate("/viewstaff")}>
                View Staff
              </div>
            </li>
            <li>
              <div
                className="menu active"
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
                onClick={() => navigate("/managemedicines*")}
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
          <label className="pagetitle">Manage emergency wards</label>
        </div>
        <div className="schedule-title">
          <div className="date">
            <p className="date">November 07 - November 14</p>
          </div>
          <div className="am-pm">
            <div className="am time-active ">
              <p>AM</p>
            </div>

            <div className="pm">
              <p>PM</p>
            </div>
          </div>
        </div>
        <div>
          <table className="header-time">
            <thead>
              <td>
                <div className="header-time time">
                  <p>Sun</p>
                  <p>07/11</p>
                </div>
              </td>
              <td>
                <div className="header-time time">
                  <p>Mon</p>
                  <p>08/11</p>
                </div>
              </td>
              <td>
                <div className="header-time time">
                  <p>Tue</p>
                  <p>09/11</p>
                </div>
              </td>
              <td>
                <div className="header-time time">
                  <p>Wed</p>
                  <p>10/11</p>
                </div>
              </td>
              <td>
                <div className="header-time time">
                  <p>Thu</p>
                  <p>11/11</p>
                </div>
              </td>
              <td>
                <div className="header-time time">
                  <p>Fri</p>
                  <p>12/11</p>
                </div>
              </td>
              <td>
                <div className="header-time time">
                  <p>Sar</p>
                  <p>13/11</p>
                </div>
              </td>
            </thead>
          </table>
          <table>
            <tr>
              <td>
                <div className="time">
                  <p>12 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>12 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>12 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>12 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>12 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>12 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>12 AM</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="time">
                  <p>1 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>1 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>1 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>1 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>1 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>1 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>1 AM</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="time">
                  <p>2 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>2 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>2 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>2 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>2 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>2 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>2 AM</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="time">
                  <p>3 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>3 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>3 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>3 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>3 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>3 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>3 AM</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="time">
                  <p>4 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>4 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>4 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>4 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>4 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>4 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>4 AM</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="time">
                  <p>5 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>5 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>5 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>5 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>5 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>5 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>5 AM</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="time">
                  <p>6 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>6 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>6 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>6 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>6 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>6 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>6 AM</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="time">
                  <p>7 AM</p>
                </div>
              </td>
              <td>
                <div
                  className="time "
                  onClick={() => {
                    const modal = document.querySelector(".modal");
                    const overlay = document.querySelector(".overlay");
                    showModal(modal, "");
                    showModal(overlay, "Available Emergency Wards:\n 12 15 19");
                  }}
                >
                  <p>7 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>7 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>7 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>7 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>7 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>7 AM</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="time">
                  <p>8 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>8 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>8 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>8 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>8 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>8 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>8 AM</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="time">
                  <p>9 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>9 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>9 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>9 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>9 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>9 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>9 AM</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="time">
                  <p>10 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>10 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>10 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>10 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>10 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>10 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>10 AM</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="time">
                  <p>11 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>11 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>11 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>11 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>11 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>11 AM</p>
                </div>
              </td>
              <td>
                <div className="time">
                  <p>11 AM</p>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
