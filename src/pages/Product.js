import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from "../components/Rating";

import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import { baseUrl } from "../proxy";

export default function ProductPage() {
  let {_id} = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const url = baseUrl + `api/products/${_id}`;
    async function fetchProduct() {
      const { data } = await axios.get(url);
      setProduct(data);
    }
    fetchProduct();
  }, [_id]);
  return (
    <div>
      <Link to={"/"} className="btn btn-light my-3">
        Go back
      </Link>
      <Row>
        <Col md={6}>
          <Image
            className="rounded"
            src={product.image}
            alt={product.name}
            fluid
          />
        </Col>
        <Col md={3}>
          <ListGroup className="" variant="flush">
            <ListGroup.Item>{product.name}</ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#f8e825"}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: &#8358;{product.price}</ListGroup.Item>
            <ListGroup.Item>Description:{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>&#8358;{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="bg-slate-800 btn-block"
                  disabled={product.countInStock === 0}
                  type="button"
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
