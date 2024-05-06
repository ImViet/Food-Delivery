import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="navbar">
      <img src={assets.logo} className="navbar-logo" />
      <ul className="navbar-menu">
        <li
          className={menu === "Home" ? "active" : ""}
          onClick={() => setMenu("Home")}
        >
          Home
        </li>
        <li
          className={menu === "Menu" ? "active" : ""}
          onClick={() => setMenu("Menu")}
        >
          Menu
        </li>
        <li
          className={menu === "Mobile" ? "active" : ""}
          onClick={() => setMenu("Mobile")}
        >
          Mobile-app
        </li>
        <li
          className={menu === "ContactUs" ? "active" : ""}
          onClick={() => setMenu("ContactUs")}
        >
          Contact us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-cart">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
