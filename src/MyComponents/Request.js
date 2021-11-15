import React from "react";
import logo from "../resources/logo.png";
import "./Addpatient.css";
import { useEffect } from "react";
export default function Requests() {
  useEffect(() => {
    // code();
  }, []);
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
              <div className="menu ">Dashboard</div>
            </li>
            <li>
              <div className="menu ">Add Patient</div>
            </li>
            <li>
              <div className="menu ">Add Staff</div>
            </li>
            <li>
              <div className="menu ">View Staff</div>
            </li>
            <li>
              <div className="menu ">Manage emergency wards</div>
            </li>
            <li>
              <div className="menu ">Manage Rooms</div>
            </li>
            <li>
              <div className="menu ">Manage Medicines</div>
            </li>
            <li>
              <div className="menu active">Requests</div>
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
              <li id="Logout">Logout</li>
            </ul>
          </div>
        </div>
        <div className="pagetitlediv">
          <label className="pagetitle">Requests</label>
        </div>
        <div className="aadhar-div">
          <div className="input-field">
            <label className="request-id label">Enter Request ID</label>
            <input type="number" className="aadhar input1"></input>
          </div>
          <div>
            <button className="button" id="fetch-details">
              Attend
            </button>
          </div>
        </div>
        <div className="patient-form">
          <div className="section-1-request">
            <h3>Requests</h3>
            <table>
              <tr>
                <td>
                  <div className="request-head">
                    <p>Request ID</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>Hospital</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>Item</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>Age Group</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="request-head">
                    <p>10001</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>Aiims Delhi</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>Lungs</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>14-20</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="request-head">
                    <p>10002</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>GTB</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>Kidney</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>18-45</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="request-head">
                    <p>10003</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>Jag Pravesh</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>Heart</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>18-45</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className="section-2-confirmed-requests">
            <h3>Requests Confimation</h3>
            <table>
              <tr>
                <td>
                  <div className="request-head">
                    <p>Request ID</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>Hospital</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>Item</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>Confirmed</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>Fulfilled</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="request-head">
                    <p>10007</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>Aiims Delhi</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>Pancrease</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>-</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>-</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="request-head">
                    <p>10004</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>GTB</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>Liver</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>-</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>-</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="request-head">
                    <p>10008</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>Jag Pravesh</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>Blood</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>-</p>
                  </div>
                </td>
                <td>
                  <div className="request-head">
                    <p>-</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
