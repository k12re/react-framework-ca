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
import { Cart, ClearCart, CartProvider } from "./components/Cart";
import { Search } from "./components/Search";
import * as Styled from "./App.styles";
import CartIcon from "./images/cart.svg";

export const url = "https://api.noroff.dev/api/v1/online-shop";

function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

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
      <Search data={data} setSearchResults={setSearchResults} />
      <Styled.ProductListContainer>
        {searchResults.length > 0
          ? searchResults.map((item) => (
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
            ))
          : data.map((item) => <ProductItem key={item.id} data={item} />)}
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

export const CartContext = createContext();

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
