import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Education = () => {
  const educationData = [
    {
      degree: "Higher National Diploma in Software Engineering",
      institution: "National Institute of Business Management",
      duration: "2024 - Present",
      status: "current",
      note: "Coursework: Algorithms, Databases, Web Development"
    },
    {
      degree: "Diploma in Software Engineering",
      institution: "National Institute of Business Management",
      duration: "2023 Aug - 2024 Aug",
      status: "completed",
      note: "Final project: Full-stack Portfolio Website"
    },
    {
      degree: "G.C.E. Advanced Level Examination - Technology Stream",
      institution: "Rahula College, Matara",
      duration: "2021",
      status: "completed",
      note: "Focus on Mathematics and ICT"
    }
  ];

  return (
    <section className="education" id="education">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="education-title">Education</h2>
                  <p className="education-subtitle">A concise look at my academic milestones and achievements</p>

                  <div className="education-grid">
                    {educationData.map((edu, index) => (
                      <div key={index} className="edu-card" style={{animationDelay: `${index * 0.12}s`}}>
                        <div className="edu-marker" aria-hidden>
                          <span className="marker-number">{index + 1}</span>
                        </div>

                        <div className="edu-body">
                          <h4 className="degree-title">{edu.degree}</h4>
                          <p className="institution-name">{edu.institution}</p>

                          <div className="edu-meta">
                            <span className={`duration-badge ${edu.status}`}>{edu.duration}</span>
                            <span className={`status-badge ${edu.status}`}>{edu.status === 'current' ? 'Ongoing' : 'Completed'}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2} alt="Decorative background" />
    </section>
  );
};

export default Education;
