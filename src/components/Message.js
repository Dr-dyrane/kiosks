import { Alert } from "react-bootstrap";

export default function Message({ variant, children }) {
  return (
    <Alert variant={variant} className="mt-3 rounded">
      {children}
    </Alert>
  );
}
