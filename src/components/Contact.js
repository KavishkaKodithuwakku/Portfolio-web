import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      let result = await response.json();
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ success: true, message: 'Message sent successfully'});
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.'});
      }
    } catch (err) {
      setButtonText("Send");
      setStatus({ success: false, message: 'Network error. Please try again.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">

          <Col xs={12} md={6} className="contact-left">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={contactImg} alt="Contact Us" />

                  <div className="contact-info">
                    <div className="info-item">
                      <span className="info-icon">📧</span>
                      <div>
                        <div className="info-label">Email</div>
                        <a href="mailto:kavishkakodithuwakku21@gmail.com">kavishkakodithuwakku21@gmail.com</a>
                      </div>
                    </div>

                    <div className="info-item">
                      <span className="info-icon">📞</span>
                      <div>
                        <div className="info-label">Phone</div>
                        <a href="tel:+94771006107">+94 77 100 6107</a>
                      </div>
                    </div>

                    <div className="info-item">
                      <span className="info-icon">📍</span>
                      <div>
                        <div className="info-label">Location</div>
                        <div>Matara, Sri Lanka</div>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} className="contact-right">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="contact-card">
                    <h2 className="contact-title">Get In Touch</h2>
                    <p className="contact-subtitle">Have a project or just want to say hi? I’d love to hear from you — send a message below and I’ll get back to you.</p>

                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col xs={12} sm={6} className="px-1">
                          <div className="input-with-icon">
                            <span className="input-icon">👤</span>
                            <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
                          </div>
                        </Col>

                        <Col xs={12} sm={6} className="px-1">
                          <div className="input-with-icon">
                            <span className="input-icon">👥</span>
                            <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                          </div>
                        </Col>

                        <Col xs={12} sm={6} className="px-1">
                          <div className="input-with-icon">
                            <span className="input-icon">✉️</span>
                            <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                          </div>
                        </Col>

                        <Col xs={12} sm={6} className="px-1">
                          <div className="input-with-icon">
                            <span className="input-icon">📱</span>
                            <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                          </div>
                        </Col>

                        <Col xs={12} className="px-1">
                          <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                        </Col>

                        <Col xs={12} className="px-1">
                          <button type="submit" className="contact-btn primary"><span>{buttonText}</span></button>
                        </Col>

                        {status.message &&
                          <Col xs={12} className="px-1">
                            <p className={status.success === false ? "danger contact-status" : "success contact-status"}>{status.message}</p>
                          </Col>
                        }

                      </Row>
                    </form>

                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>

        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}