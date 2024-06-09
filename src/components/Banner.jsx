import { Col, Container, Nav, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useEffect, useState } from "react";
import TrackVisibility from "react-on-screen";
export const Banner = () => {
  const toRotate = [
    "Web Developer",
    "Frontend Developer",
    "Fullstack Developer",
  ];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const PERIOD = 2000;
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(PERIOD);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hey there! I'm Sarish Biswas `}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    A passionate and slightly caffeinated full stack developer
                    based in the vibrant city of Bengaluru, Karnataka. With 4
                    years of experience under my belt, I've danced through
                    various technologies like React, .NET, Java, Angular, HTML,
                    CSS, SQL, and AWS deployments, making me a true
                    jack-of-all-trades in the coding world. Currently, I'm
                    bringing my magic to Cornerstone Ondemand as an Associate
                    Software Engineer. And let’s not forget my stint as a
                    tech-savvy bachelor at Kalyani Government Engineering
                    College, where I graduated with a degree in Electronics and
                    Communication Engineering. So, whether you need someone to
                    debug your toughest issues, brainstorm the next big feature,
                    or just share a good laugh over a cup of coffee, I’m your
                    go-to guy! Let's connect and make some tech magic happen.
                  </p>
                  <Nav.Link href="#connect">
                    <button>
                      Let's Connect <ArrowRightCircle size={25} />
                    </button>
                  </Nav.Link>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
