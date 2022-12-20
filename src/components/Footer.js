import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="p-3 shadow md:flex md:items-center md:justify-between md:p-4 bg-slate-800 inset-x-0 bottom-0">
      <Container>
        <Row>
          <Col>
            <span class="text-sm text-gray-50 sm:text-center">
              © 2022{" "}
              <Link to="/" class="hover:underline">
                KIOSKS™
              </Link>
              . All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-50 sm:mt-0">
              <li>
                <Link to="#" class="mr-4 hover:underline md:mr-6 ">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" class="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" class="mr-4 hover:underline md:mr-6">
                  Licensing
                </Link>
              </li>
              <li>
                <Link to="#" class="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
