import React from "react";
import "./cartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import { connect } from "react-redux";
import { toggleCartHiden } from "../../redux/cart/cartActions";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";
const CartIcon = ({ toggleCartHiden, itemCount }) => {
  console.log(itemCount);
  return (
    <div className="cart-icon" onClick={toggleCartHiden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  toggleCartHiden: () => dispatch(toggleCartHiden())
});

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
