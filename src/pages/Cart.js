import React, { useEffect } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";

import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader";
import Message from "../components/Message";

import { addToCart } from "../actions/cartActions";

export default function CartPage() {
  const location = useLocation();
  const navigate = useNavigate();
  let { _id } = useParams();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return state.cart;
  });
  const { cartItems } = cart;
  useEffect(() => {
    if (_id) {
      dispatch(addToCart(_id, qty));
    }
  }, [dispatch, _id, qty]);

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {_id},{qty},{dispatch.length}
        {/*  {cartItems.length === 0 ? (
          <Message variant="info">
            Your cart is empty
            <Link to="/" className="btn border rounded btn-light my-3">
              Go back
            </Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} />
                  </Col>
                  <Col md={3}>{item.name}</Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )} */}
      </Col>
      <Col md={4}></Col>
    </Row>
  );
}
