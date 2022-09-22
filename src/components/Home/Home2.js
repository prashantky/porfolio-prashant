import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "3.6em" ,fontFamily:'sans-serif' }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{fontFamily:"sans-serif", fontWeight:"300px"}}>
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="#ff0000" style={{fontFamily:"sans-serif", fontWeight:"300px"}}> Javascript,React.js,Node.js and Express.js. </b>
              </i>
              <br />
              <br />
              I'am meticulous web developer with over 3 years having insightful knowledge of front-end technologies like;
              <i>
                <b className="purple" style={{fontFamily:"sans-serif", fontWeight:"300px"}}>React.js, HTML, CSS, Javascript,Typescript </b> 
                and posses good command over {" "}
                <b className="purple" style={{fontFamily:"sans-serif", fontWeight:"300px"}}>
                 Node.js and Express.js.{""} 
                </b>
              </i>
               A curious and tech-savvy guy who is always up to take on new challenges.

              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple" style={{fontFamily:"sans-serif", fontWeight:"300px"}}>
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple" style={{fontFamily:"sans-serif", fontWeight:"300px"}}> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{fontFamily:"sans-serif", fontWeight:"300px"}}>FIND ME ON</h1>
            <p style={{fontFamily:"sans-serif", fontWeight:"300px"}}>
              Feel free to <span className="purple" style={{fontFamily:"sans-serif", fontWeight:"300px"}}>connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/prashantky"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
