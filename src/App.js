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
    <Styled.ProductListContainer>
      {location.pathname === "/" ? <Search data={data} /> : null}

      {data.map((item) => (
        <ProductItem key={item.id} data={item} />
      ))}
    </Styled.ProductListContainer>
  );
}

function CheckOutPage() {
  const { state } = useContext(CartContext);
  const { cart, total, quantity } = state;

  console.log(state);

  console.log(cart);
  return (
    <Styled.CheckoutContainer>
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.imageUrl} />
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
  );
}

function CheckOutSuccessPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Styled.CheckoutSuccess>
      <h1>Checkout was successful</h1>
      <Styled.Button>
        <Link to={`/`}>Return to home</Link>
      </Styled.Button>
    </Styled.CheckoutSuccess>
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
      console.log("New Total:", newTotal);
      console.log("New Qty:", newQuantity);
      console.log(state);
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

function Cart() {
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

function Search(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    const results = props.data.filter((item) => {
      return item.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setSearchResults(results);
  };

  return (
    <div>
      <Styled.SearchFormContainer>
        <form id="search-form" onKeyUp={handleSearch}>
          <label htmlFor="search"></label>
          <input
            name="search"
            id="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </form>
      </Styled.SearchFormContainer>
      <div>
        {searchResults.map((item) => (
          <Styled.ProductContainer key={item.id}>
            <li>
              <h2>{item.title}</h2>
              <img src={item.imageUrl} alt={item.title} />
              <p>{item.description}</p>
              <Styled.Button>
                <Link to={`/product/${item.id}`}>View product</Link>
              </Styled.Button>
            </li>
          </Styled.ProductContainer>
        ))}
      </div>
    </div>
  );
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
