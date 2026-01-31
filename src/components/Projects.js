import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/webScraping.png";
import projImg2 from "../assets/img/ML.jpg";
import projImg3 from "../assets/img/mobile.jpg";
import projImg4 from "../assets/img/portfolio.jpeg";
import projImg5 from "../assets/img/Analysis.jpg";
import  projImg6 from "../assets/img/Chatbot.webp";
import colorSharp from "../assets/img/color-sharp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

  const projects = [
    {
      title: "YC Startup Web Scraper",
      description: "Python, Selenium, Data Extraction",
      imgUrl: projImg1,
    },
    {
      title: "Fraud Detection System",
      description: "Machine Learning, Data Analytics",
      imgUrl: projImg2,
    },
    {
      title: "AutoCare+ Mobile App",
      description: "Kotlin, Firebase, Mobile Development",
      imgUrl: projImg3,
    },
    {
      title: "Portfolio Website",
      description: "React, Frontend Development",
      imgUrl: projImg4,
    },
    {
      title: "Data Analysis Dashboard",
      description: "Python, Pandas, Data Visualization",
      imgUrl: projImg5,
    },
    {
      title: "AI Chatbot Application",
      description: "NLP, Firebase, Software Engineering",
      imgUrl: projImg6,
    },
  ];
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These projects reflect my experience in AI, Machine Learning, Data Analytics, and Software Engineering, highlighting my ability to analyze data, build intelligent systems, and develop real-world applications using modern technologies.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>I develop software solutions by combining Software Engineering principles with AI, Machine Learning, and Data Analytics, focusing on clean architecture, performance, and real-world impact.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>I develop software solutions by combining Software Engineering principles with AI, Machine Learning, and Data Analytics, focusing on clean architecture, performance, and real-world impact.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  )
}

export default Projects;