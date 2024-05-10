import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const {
    cartItems,
    food_list,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <>
      {Object.keys(cartItems).length === 0 ? (
        <h3 className="no-item">No item</h3>
      ) : (
        <div className="cart">
          <div className="cart-items">
            <div className="cart-items-title">
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br />
            <hr />
            {food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div key={index}>
                    <div className="cart-items-title cart-items-item">
                      <img src={item.image} alt="" />
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <p className="quantity">
                        <img
                          onClick={() => removeFromCart(item._id)}
                          src={assets.remove_icon_red}
                          alt=""
                          className="btn-quantity"
                        />
                        {cartItems[item._id]}
                        <img
                          onClick={() => addToCart(item._id)}
                          src={assets.add_icon_green}
                          alt=""
                          className="btn-quantity"
                        />
                      </p>
                      <p>{item.price * cartItems[item._id]}</p>
                      <p
                        onClick={() => removeFromCart(item._id)}
                        className="remove"
                      >
                        X
                      </p>
                    </div>
                    <hr />
                  </div>
                );
              }
            })}
          </div>
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Total</h2>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${0}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>
                  ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                </b>
              </div>
              <button onClick={() => navigate("/order")}>
                PROCESS TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
