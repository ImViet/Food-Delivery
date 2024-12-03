import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import GoToTop from "./components/GoToTop/GoToTop";
import { Toaster } from "react-hot-toast";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-scroll");
      } else {
        navbar.classList.remove("navbar-scroll");
      }
    });
  }, [showLogin]);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order" element={<PlaceOrder />}></Route>
        </Routes>
      </div>
      <GoToTop />
      <Footer></Footer>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;
