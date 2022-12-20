import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Product from "../components/Product";
import axios from "axios";
import { baseUrl } from "../proxy";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = baseUrl + "api/products/";
    async function fetchProducts() {
      const { data } = await axios.get(url);
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
