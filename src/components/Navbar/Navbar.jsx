import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const Navbar = (props) => {
  const [menu, setMenu] = useState("Home");
  const { setShowLogin } = props;
  const { getTotalQuantity } = useContext(StoreContext);
  return (
    <div className="navbar" id="navbar">
      <Link to="/">
        <img src={assets.logo} className="navbar-logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          className={menu === "Home" ? "active" : ""}
          onClick={() => setMenu("Home")}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          className={menu === "Menu" ? "active" : ""}
          onClick={() => setMenu("Menu")}
        >
          Menu
        </a>
        <a
          href="#app-download"
          className={menu === "Mobile" ? "active" : ""}
          onClick={() => setMenu("Mobile")}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          className={menu === "ContactUs" ? "active" : ""}
          onClick={() => setMenu("ContactUs")}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-cart">
          <Link to="/cart" onClick={() => setMenu("Cart")}>
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalQuantity() === 0 ? "" : "dot"}>
            {getTotalQuantity() === 0 ? (
              <></>
            ) : (
              <span>{getTotalQuantity()}</span>
            )}
          </div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
