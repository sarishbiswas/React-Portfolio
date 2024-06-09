import { Col, Container, Row } from "react-bootstrap";
import { MailChimpForm } from "./MailChimpForm";
import logo from "../assets/img/LOGO.jpeg";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github.svg";
import leetcode from "../assets/img/leetcode.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailChimpForm />
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sarishbiswas/">
                <img src={linkedin} alt="Linkedin" />
              </a>
              <a href="https://github.com/sarishbiswas/">
                <img src={github} alt="github" />
              </a>
              <a href="https://leetcode.com/u/sarishbiswas/">
                <img src={leetcode} alt="leetcode" />
              </a>
            </div>
            <p>CopyRight 2024. All Right Reserved by Sarish Biswas.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
