import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="8" className="footer-copywright">
          <h3>© Copyright Nitish Sharma, {year}. All rights reserved.</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="d-flex mb-0">
            <li className="social-icons">
              <a className="text-white" href="https://github.com/Nitish-542" target="_blank">
                <AiFillGithub size={25} aria-label="Github icon" />
              </a>
            </li>
            <li className="social-icons">
              <a
                className="text-white"
                href="https://www.linkedin.com/in/nitish-sharma-b6ba60226/"
                target="_blank"
              >
                <FaLinkedinIn size={25} aria-label="LinkedIn icon" />
              </a>
            </li>
            <li className="social-icons">
              <a className="text-white" href="mailto:nitish601@gmail.com" target="_blank">
                <MdOutlineEmail size={25} aria-label="Email icon" />
              </a>
            </li>
            <li className="social-icons">
              <a className="text-white" href="https://www.instagram.com/nitish85699" target="_blank">
                <AiFillInstagram size={25} aria-label="Instagram icon" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
