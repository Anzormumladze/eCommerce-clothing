import React from "react";
import "./cartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import { connect } from "react-redux";
import { toggleCartHiden } from "../../redux/cart/cartActions";
const CartIcon = ({ toggleCartHiden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHiden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  toggleCartHiden: () => dispatch(toggleCartHiden())
});
export default connect(null, mapDispatchToProps)(CartIcon);
