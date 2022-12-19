import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center text-white py-3 bg-slate-700 max-h-screen">
            &copy;りたみ KIOSKS 2022
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
