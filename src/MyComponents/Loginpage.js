import "./Loginpage.css";
import React from "react";
import logo from "../resources/medi.jpg";
import { useNavigate } from "react-router-dom";
export default function Loginpage() {
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
      <div className="left">
        <h1 className="welcome">LOGIN</h1>
        <div className="switch">
          <div className="admin-sec">
            <p className="admin">Admin</p>
          </div>
          <input
            className="react-switch-checkbox"
            id={`react-switch-new`}
            type="checkbox"
          />
          <label className="react-switch-label" htmlFor={`react-switch-new`}>
            <span className={`react-switch-button`} />
          </label>
        </div>
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
        <div className="login-form">
          <div className="form">
            <label htmlFor="username">
              <i className="zmdi zmdi-account zmdi-hc-3x"></i>
            </label>
            <input
              type="text"
              className="input"
              placeholder="Your Username"
              id="username"
            ></input>
          </div>
          <div className="form password">
            <label htmlFor="password">
              <i className="zmdi zmdi-key zmdi-hc-3x"></i>
            </label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              id="password"
            ></input>
          </div>
        </div>
        <div className="forget">
          <p className="forgot">Forgot Password?</p>
        </div>
        <div className="buttons">
          <button
            className="login-button button"
            onClick={() => {
              // const password = document.getElementById("password").value;
              const email = document.getElementById("username").value;
              console.log(email);
              if (email === "redskull@123") {
                navigate("/dashboard");
              } else {
                const modal = document.querySelector(".modal");
                const overlay = document.querySelector(".overlay");
                showModal(modal, "Wrong input");
                showModal(overlay, "wrong username/password");
              }
            }}
          >
            Login
          </button>
          <button
            className="signup-button button"
            onClick={() => navigate("/signup")}
          >
            Create Account
          </button>
        </div>
      </div>
      <div className="right">
        <div>
          <img src={logo} alt="" className="medical"></img>
        </div>
      </div>
    </div>
  );
}
