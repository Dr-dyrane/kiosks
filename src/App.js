import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
import CartPage from "./pages/Cart";

import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />
      <main className="py-3 min-h-[80vh]">
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:_id" element={<ProductPage />} />
            <Route path="/cart/:_id?" element={<CartPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}
