import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded-2xl">
      <Link to={`/product/${product._id}`}>
        <Card.Img className=" rounded-t-2xl" src={product.image} />
      </Link>

      <Card.Body>
        <Link className="no-underline" to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={"#f8e825"}
            />
          </div>
        </Card.Text>
        <Card.Text className="py-[1rem]" as="h3">
          &#8358;{product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
