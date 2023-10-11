import { useContext } from "react";
import { ClearCart } from "../Cart";
import { CartContext } from "../../App";
import { Link } from "react-router-dom";
import * as Styled from "../../App.styles";

export function CheckOutPage() {
  const { state } = useContext(CartContext);
  const { cart, total, quantity } = state;

  return (
    <>
      <h1>Cart</h1>
      <Styled.CheckoutContainer>
        {cart.length > 0 ? (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <img src={item.imageUrl} alt={item.title} />
                  <p>{item.title} - </p>
                  <p>Qty: {item.quantity}</p>
                </li>
              ))}
              <h2>Total: {total.toFixed(2)}</h2>
            </ul>
            <ClearCart />
          </>
        ) : (
          <>
            <h1>Cart is empty</h1>
            <Styled.Button>
              <Link to={`/`}>Return to home</Link>
            </Styled.Button>
          </>
        )}
      </Styled.CheckoutContainer>
    </>
  );
}
