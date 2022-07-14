import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AirAsia"
              description="Flight booking sites where customer can book flight seats in advance without any trouble. Build this site with Reactjs,Redux,HTML5,CSS3,Bootstrap,Javascript etc ."
              demoLink="https://www.airasia.co.in/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="TATA NEU"
              description="TATA NEU is a e-commerce website where you can by a products. Supports dark mode and easy to use.Build with Reactjs,Javascript,Bootstrap,Redux."
              demoLink="https://www.tatadigital.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Red Hat MarketPlace"
              description="This is e-commerce website where customer can buy software and  get support to use that software.I worked as full stack developer ,for backend use Nodejs,Expressjs,Koa,and Mongodb and for front-end use Reactjs,Typescript,carbon-react-component,and Redux"
              demoLink="https://marketplace.redhat.com/en-us"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Comfy"
              description="It is e-commerce site where customer can by product and search their product from search bar.Build with help of Reactjs,Material Ui"
              ghLink="https://github.com/prashantky/comfy"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Amazon Clone"
              description="Used Reactjs and Firbase for authentication to clone amazon."
              ghLink="https://github.com/prashantky/amazon_clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="ADS School"
              description="It is school site where we keep record of each student and teacher.We can also send notification to student and teacher and student can download admission form also.Build with Reactjs,Tailwind CSS,Redux."
              ghLink="https://github.com/RahulUD/ADS-Pwa"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
