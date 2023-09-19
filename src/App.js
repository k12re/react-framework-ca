import { Outlet, Route, Routes, Link, useParams } from "react-router-dom";
import "./App.css";

function Home() {
  return <div>Home</div>;
}

function ProductPage() {
  return <div>Product Page</div>;
}

function CheckOutPage() {
  return <div>Checkout Page</div>;
}

function CheckOutSuccessPage() {
  return <div>Checkout Success Page</div>;
}

function ContactPage() {
  return <div>Contact Page</div>;
}

function NotFound() {
  return <div>Not found</div>;
}

function Cart() {
  return <div>Cart</div>;
}

function Header() {
  return (
    <header>
      <div>Header</div>
      <Nav />
      <Cart />
    </header>
  );
}

function Nav() {
  return (
    <nav>
      Nav
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
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
          <Route path="product" element={<ProductPage />} />
          <Route path="checkout" element={<CheckOutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
