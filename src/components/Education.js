import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Education = () => {
  const educationData = [
    {
      degree: "Higher National Diploma in Software Engineering",
      institution: "National Institute of Business Management",
      duration: "2024 - Present",
      status: "current"
    },
    {
      degree: "Diploma in Software Engineering",
      institution: "National Institute of Business Management",
      duration: "2023 Aug - 2024 Aug",
      status: "completed"
    },
    {
      degree: "G.C.E. Advanced Level Examination Technology Stream",
      institution: "Rahula College, Matara",
      duration: "2021",
      status: "completed"
    }
  ];

  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2 className="education-title">Education</h2>
                <p className="education-subtitle">My academic journey in Software Engineering and Technology</p>
                
                <div className="education-timeline">
                  {educationData.map((edu, index) => (
                    <div key={index} className="education-card wow fadeInUp" style={{animationDelay: `${index * 0.2}s`}}>
                      <div className="education-marker">
                        <span className="marker-number">{index + 1}</span>
                      </div>
                      <div className="education-content">
                        <h4 className="degree-title">{edu.degree}</h4>
                        <p className="institution-name">{edu.institution}</p>
                        <span className={`duration-badge ${edu.status}`}>{edu.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}

export default Education;
