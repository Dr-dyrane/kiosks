import { Spinner } from "react-bootstrap";

export default function Loader() {
  return (
    <Spinner
      animation="border"
      role="status"
      className="h-16 w-16 m-auto block"
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}
