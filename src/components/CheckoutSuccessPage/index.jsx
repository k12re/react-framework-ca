import { Link } from "react-router-dom";
import * as Styled from "../../App.styles";

export function CheckOutSuccessPage() {
  return (
    <Styled.CheckoutSuccess>
      <h1>Checkout was successful</h1>
      <Styled.Button>
        <Link to={`/`}>Return to home</Link>
      </Styled.Button>
    </Styled.CheckoutSuccess>
  );
}
