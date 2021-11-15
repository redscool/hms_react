import "./Loginpage";
import React from "react";
import logo from "../resources/medi.jpg";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="left">
        <h1 className="welcome">SIGNUP</h1>
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
        <div className="login-form">
          <div className="form">
            <label htmlFor="username">
              <i className="zmdi zmdi-account zmdi-hc-2x"></i>
            </label>
            <input
              type="text"
              className="input username"
              placeholder="Your Username"
            ></input>
          </div>
          <div className="form email">
            <label htmlFor="form email">
              <i className="zmdi zmdi-email zmdi-hc-2x"></i>
            </label>
            <input
              type="text"
              className="input email"
              placeholder="Your E-Mail"
            ></input>
          </div>
          <div className="form password">
            <label htmlFor="password">
              <i className="zmdi zmdi-key zmdi-hc-2x"></i>
            </label>
            <input
              type="password"
              className="input password"
              placeholder="Password"
            ></input>
          </div>
          <div className="form password">
            <label htmlFor="password">
              <i className="zmdi zmdi-key zmdi-hc-2x"></i>
            </label>
            <input
              type="password"
              className="input cpassword"
              placeholder="Confirm Password"
            ></input>
          </div>
        </div>
        <div className="forget">
          <p className="forgot">Forgot Password?</p>
        </div>
        <div className="buttons">
          <button
            className="signup-button button"
            onClick={() => navigate("/")}
          >
            Create Account
          </button>
          <button className="login-button button" onClick={() => navigate("/")}>
            Login
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
