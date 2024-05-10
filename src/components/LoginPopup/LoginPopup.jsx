import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import "./LoginPopup.css";
const LoginPopup = (props) => {
  const [currentState, setCurrentState] = useState("Login");
  const { setShowLogin } = props;
  return (
    <div className="login-popup">
      <form className="login-popup-container" action="">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Sign Up" ? (
            <input type="text" placeholder="Your name" required />
          ) : (
            <></>
          )}

          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Your password" required />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrentState("Sign Up")}> Click here</span>
          </p>
        ) : (
          <p>
            Already have a account?
            <span onClick={() => setCurrentState("Login")}> Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
