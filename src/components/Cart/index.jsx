import { Link, useNavigate } from "react-router-dom";
import { useContext, useReducer } from "react";
import { CartContext } from "../../App";
import * as Styled from "../../App.styles";
import CartIcon from "../../images/cart.svg";

export function Cart() {
  const { state } = useContext(CartContext);
  const { cart, total, quantity } = state;

  return (
    <div>
      <Link to="/checkout">
        <img className="cart-icon" alt="Icon" src={CartIcon} />
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
    dispatch({ type: "addProduct", payload: data });
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

export const initialState = { cart: [], total: 0 };

export function reducer(state, action) {
  let productIndex;
  let newTotal;
  let newQuantity;
  let cart;

  switch (action.type) {
    case "addProduct":
      cart = [...state.cart];
      productIndex = cart.findIndex((data) => data.id === action.payload.id);
      if (productIndex === -1) {
        cart.push({
          ...action.payload,
          quantity: 1,
          price: action.payload.price,
        });
      } else {
        cart = [
          ...cart.slice(0, productIndex),
          { ...cart[productIndex], quantity: cart[productIndex].quantity + 1 },
          ...cart.slice(productIndex + 1),
        ];
      }
      newQuantity = cart.reduce((currentQuantity, product) => {
        currentQuantity += product.quantity;
        return currentQuantity;
      }, 0);
      newTotal = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);
      return { ...state, cart: cart, total: newTotal, quantity: newQuantity };

    case "clearCart":
      return { cart: [], total: 0 };

    default:
      return state;
  }
}
