import { Link, useNavigate } from "react-router-dom";
import { useContext, useReducer } from "react";
import { CartContext, reducer, initialState } from "../../App";
import * as Styled from "../../App.styles";
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

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function AddToCart({ data }) {
  const { dispatch } = useCart();

  const handleClick = () => {
    {
      dispatch({ type: "addProduct", payload: data });
    }
  };

  return <Styled.Button onClick={handleClick}>Add to cart</Styled.Button>;
}

export function ClearCart() {
  const { dispatch } = useCart();
  const navigate = useNavigate();

  const handleClear = () => {
    dispatch({ type: "clearCart" });
    navigate("/checkoutsuccess");
  };
  return <Styled.Button onClick={handleClear}>Checkout</Styled.Button>;
}
