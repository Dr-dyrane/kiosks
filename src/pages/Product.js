import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";
import React from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductPage() {
  let { id } = useParams();
  const product = products.find((p) => p._id === id);
  return (
    <div>
      <Link to={"/"} className="btn btn-light my-3">
        Go back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>{product.name}</ListGroup.Item>
          </ListGroup>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#f8e825"}
              />
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}
