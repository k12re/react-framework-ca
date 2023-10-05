import {
  Outlet,
  Route,
  Routes,
  Link,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import ProductItem from "./components/ProductItem";
import ProductPage from "./components/ProductPage";
import ContactPage from "./components/ContactPage";
import { CheckOutPage } from "./components/CheckoutPage";
import { CheckOutSuccessPage } from "./components/CheckoutSuccessPage";
import { Cart } from "./components/Cart";
import { Search } from "./components/Search";
import * as Styled from "./App.styles";
import CartIcon from "./images/cart.svg";

export const url = "https://api.noroff.dev/api/v1/online-shop";

function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  const location = useLocation();

  return (
    <>
      <h1>Our products</h1>
      {location.pathname === "/" ? <Search data={data} /> : null}
      <Styled.ProductListContainer>
        {data.map((item) => (
          <ProductItem key={item.id} data={item} />
        ))}
      </Styled.ProductListContainer>
    </>
  );
}

function NotFound() {
  return <div>Not found</div>;
}

function Header({ data }) {
  return (
    <header>
      <Nav />
      <div>
        <Cart />
      </div>
    </header>
  );
}

function Nav() {
  return (
    <Styled.Nav>
      <ul>
        <li key={"home"}>
          <Link to="/">Home</Link>
        </li>
        <li key={"contact"}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </Styled.Nav>
  );
}

function Footer() {
  return <footer>Footer</footer>;
}

function Layout({ data, children }) {
  return (
    <div>
      <Header data={data} />
      <Outlet />
      <Footer />
    </div>
  );
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
        // console.log("price:", product.price, "qty:", product.quantity);
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

export const CartContext = createContext();

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

function App() {
  return (
    <>
      <CartProvider>
        <div>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route />
              {/* <Route path="product" element={<ProductPage />} /> */}
              <Route path="checkout" element={<CheckOutPage />} />
              <Route path="checkoutsuccess" element={<CheckOutSuccessPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
              <Route path="product/:id" element={<ProductPage />} />
            </Route>
          </Routes>
        </div>
      </CartProvider>
    </>
  );
}

export default App;
