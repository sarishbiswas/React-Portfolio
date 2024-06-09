import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import {
  FaReact,
  FaJava,
  FaHtml5,
  FaAngular,
  FaAws,
  FaPython,
} from "react-icons/fa";
import { SiDotnet, SiMysql, SiCss3, SiCsharp } from "react-icons/si";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                With a toolkit that's more versatile than a Swiss Army knife,
                I've dived deep into a variety of languages like Java, Python,
                C#, C++, React, PHP, Angular, JavaScript, HTML, CSS, and SQL.
                I'm well-versed in technologies and frameworks such as
                SpringBoot, Bootstrap, and .NET, and I've wielded developer
                tools like Mockito, JUnit, XUnit, Tkinter, NumPy, Pandas,
                Hibernate, and Maven with finesse. I've enhanced user
                interfaces, optimized performance, and even modernized web
                applications to keep up with the ever-changing tech landscape.
                My AWS deployment skills ensure that your applications are
                scalable and reliable. Whether it's setting up dashboards in
                Splunk, running SQL queries, or managing user stories in Jira, I
                bring efficiency and a touch of creativity to every project.
                Basically, if it involves code, there's a good chance I've done
                it and had fun doing it!
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <FaReact size={160} />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <FaPython size={160} />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <SiDotnet size={160} />
                  <h5>Dot NET</h5>
                </div>
                <div className="item">
                  <FaJava size={160} />
                  <h5>JAVA</h5>
                </div>
                <div className="item">
                  <SiMysql size={160} />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <FaHtml5 size={160} />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <SiCss3 size={160} />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <SiCsharp size={160} />
                  <h5>C Sharp</h5>
                </div>
                <div className="item">
                  <FaAngular size={160} />
                  <h5>Angular</h5>
                </div>
                <div className="item">
                  <FaAws size={160} />
                  <h5>AWS Basic</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
