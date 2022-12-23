import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  Form,
} from "react-bootstrap";

import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";

import { listProductDetails } from "../actions/productActions";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";

export default function ProductPage() {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  let { _id } = useParams();
  useEffect(() => {
    dispatch(listProductDetails(_id));
  }, [dispatch, _id]);

  const addToCartHandler = () => {
    navigate(`/cart/${_id}?qty=${qty}`);
  };

  return (
    <div>
      <Link to={"/"} className="btn border rounded btn-light my-3">
        Go back
      </Link>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
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
            <Card className="rounded">
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

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col className="py-2">Qty</Col>
                      <Col xs="auto" className="">
                        <Form.Control
                          as="select"
                          className="rounded text-center"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    className="bg-slate-800 rounded btn-block"
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
      )}
    </div>
  );
}
