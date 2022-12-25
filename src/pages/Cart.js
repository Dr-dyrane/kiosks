import React, { useEffect } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader";
import Message from "../components/Message";

import { addToCart, removeFromCart } from "../actions/cartActions";

export default function CartPage() {
  const location = useLocation();
  const navigate = useNavigate();
  let { _id } = useParams();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  useEffect(() => {
    if (_id) {
      dispatch(addToCart(_id, qty));
    }
  }, [dispatch, _id, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
  };

  return (
    <Row>
      <Col md={8}>
        <h1 className="text-2xl py-4">Shopping Cart</h1>
        {!cartItems||cartItems.length === 0 ? (
          <Message variant="info">
            Your cart is empty,
            <Link to="/" className="">
              &nbsp;please go back.
            </Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.id}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>&#8358;{item.price}</Col>
                  <Col md={3}>
                    <Form.Control
                      as="select"
                      className="rounded text-center"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(addToCart(item.id, Number(e.target.valuez)))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={1}>
                    <Button
                      type="button"
                      variant="light"
                      onclick={() => removeFromCartHandler(item.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              {cartItems ? (
                <>
                  <h2 className="text-xl py-2">
                    Subtotal(
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)})
                  </h2>
                  &#8358;
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </>
              ) : (
                <>
                  <h2 className="text-xl py-2">Subtotal (0) items</h2>
                  &#8358;0.00
                </>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="w-full bg-slate-800 rounded"
                disabled={!cartItems || cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed to Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}
