import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Typewriter from "typewriter-effect";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={6} className="pb-3 d-flex justify-content-center align-items-center">
              <img src="/Nitish.jpg" alt="home pic" className="img-fluid home-img" />
            </Col>
            <Col md={6} className="home-header">
              <div>
                <h1 className="heading mb-3">
                  Hi There!
                  <span className="wave" role="wave image">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'm
                  <strong className="main-name"> Nitish Sharma</strong>
                </h1>
                <div className="ps-5">
                  <Typewriter
                    options={{
                      strings: [
                        "Full Stack Developer",
                        "I.T. Consultant",
                        "AI/ML Engineer",
                        "Open Source Contributor",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </div>
              </div>

              <div md="4" className="pt-5">
                <ul className="d-flex">
                  <li className="social-icons">
                    <a
                      className="text-white cursor-pointer"
                      href="https://github.com/Nitish-542"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub size={45} aria-label="Github icon" />
                    </a>
                    Github
                  </li>
                  <li className="social-icons">
                    <a
                      className="text-white"
                      href="https://www.linkedin.com/in/nitish-sharma-b6ba60226/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn size={45} aria-label="LinkedIn icon" />
                    </a>
                    LinkedIn
                  </li>
                  <li className="social-icons">
                    <a
                      className="text-white"
                      href="mailto:nitish601@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MdOutlineEmail size={45} aria-label="Email icon" />
                    </a>
                    Email
                  </li>
                  {/* <li className="social-icons">
                    <a
                      className="text-white"
                      href="https://www.instagram.com/nitish85699"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillInstagram size={45} aria-label="Instagram icon" />
                    </a>
                    Instagram
                  </li> */}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
