import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";
import { Container, Row } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const MailchimpForm = () => {
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <section className="newsletter" style={{ padding: '100px 0 50px 0' }}>
      <Container>
        <Row>
          <MailchimpSubscribe
            url={postUrl}
            render={({ subscribe, status, message }) => (
              <Newsletter
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
                />
            )}
            />
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  )
}