import { Outlet, Route, Routes, Link, useParams } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
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

  return (
    <ul>
      {data.map((item) => (
        <ProductItem key={item.id} data={item} />
      ))}
    </ul>
  );
}

function CheckOutPage() {
  return <div>Checkout Page</div>;
}

function CheckOutSuccessPage() {
  return <div>Checkout Success Page</div>;
}

function NotFound() {
  return <div>Not found</div>;
}

function Cart() {
  return (
    <div>
      <img className="cart-icon" src={CartIcon} />
    </div>
  );
}

function Header() {
  return (
    <header>
      <Nav />
      <Cart />
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
        <li key={"checkout"}>
          <Link to="/checkout">Checkout</Link>
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

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="product" element={<ProductPage />} /> */}
          <Route path="checkout" element={<CheckOutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="product/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
