import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import leaf from '../../Assets/Projects/leaf.png'
import emotion from '../../Assets/Projects/school.jpg'
import editor from '../../Assets/Projects/redhat.png'
import chatify from '../../Assets/Projects/airasia.jpg'
import suicide from '../../Assets/Projects/amzon.png'
import bitsOfCode from '../../Assets/Projects/tataneu.jpg'

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AirAsia"
              description="AirAsia india is a airline in india. We developed sites where customer can book flight seats in advance without any trouble. Developed this site with webt echnologies like Reactjs, Redux, HTML, CSS, Bootstrap, Javascript."
              demoLink="https://www.airasia.co.in/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="TATA NEU"
              description="TATA NEU is a e-commerce website where you can by a products.Supports dark mode and easy to use.Build with React.js, Javascript, Bootstrap, Redux."
              demoLink="https://www.tatadigital.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Red Hat MarketPlace"
              description="Red Hat Marketplace is a single source to find, try, buy, deploy, and manage enterprise applications across an organization's hybrid IT infrastructure.
              I worked as full stack developer, for backend use Node.js, Express.js, Koa, and Mongodb and for front-end use React.js,Typescript,  Redux and  carbon-react-component. "
              demoLink="https://marketplace.redhat.com/en-us"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Comfy"
              description="It is e-commerce site where customer can by product and search their product from search bar. Build with help of Reactjs, CSS, Redux."
              ghLink="https://github.com/prashantky/comfy"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Amazon Clone"
              description="Build a e-commerce web site where customer directly buy products. Build with the help of technologies like React.js, CSS, HTML, Redux, Bootstrap."
              ghLink="https://github.com/prashantky/amazon_clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="ADS School"
              description="It is school site where we keep record of each student and teachers. We can also send notification to students.Build with Reactjs, Tailwind CSS, Redux."
              ghLink="https://github.com/RahulUD/ADS-Pwa"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
