import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { users } from "../../assets/data";
import "./LoginPopup.css";
import toast from "react-hot-toast";
const LoginPopup = (props) => {
  const [currentState, setCurrentState] = useState("Login");
  const { setShowLogin } = props;
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const signup = () => {
    users.push(user);
    setCurrentState("Login");
  };
  const login = () => {
    if (!validateLogin()) {
      toast.error("Email or password is empty");
      return;
    }
    var getUser = users.find(
      (u) => u.email === user.email && u.password === user.password
    );
    if (!getUser) {
      toast.error("Email or password is not correct");
      return;
    }
    toast.success("Login success");
    setShowLogin(false);
  };
  const validateLogin = () => {
    var isValid = true;
    if (
      !user.email ||
      user.email === "" ||
      !user.password ||
      user.password === ""
    ) {
      isValid = false;
    }
    return isValid;
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
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
            <input
              type="text"
              name="name"
              onChange={handleOnChange}
              placeholder="Your name"
              required
            />
          ) : (
            <></>
          )}

          <input
            type="email"
            name="email"
            onChange={handleOnChange}
            placeholder="Your email"
            required
          />
          <input
            type="password"
            name="password"
            onChange={handleOnChange}
            placeholder="Your password"
            required
          />
        </div>
        {currentState === "Sign Up" ? (
          <button type="button" onClick={signup}>
            Create account
          </button>
        ) : (
          <button type="button" onClick={login}>
            Login
          </button>
        )}

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
