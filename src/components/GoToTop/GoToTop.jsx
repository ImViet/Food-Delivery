import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import "./GoToTop.css";
const GoToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  });
  return (
    <>
      {showTopBtn ? (
        <div className="button-top-container">
          <button className="back-to-top">
            <img src={assets.arrow_top} alt="" onClick={goToTop} />
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default GoToTop;
