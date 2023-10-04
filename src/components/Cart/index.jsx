import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../App";
import CartIcon from "../../images/cart.svg";

export function Cart() {
  const { state } = useContext(CartContext);
  const { cart, total, quantity } = state;

  return (
    <div>
      <Link to="/checkout">
        <img className="cart-icon" src={CartIcon} />
      </Link>
      <p className="counter"> {quantity} </p>
    </div>
  );
}
