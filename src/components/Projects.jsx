import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import langTranslator from "../assets/projects/lang-translator.jpg";
import tryyum from "../assets/projects/truyum.jpg";
import calculator from "../assets/projects/Calculator.jpeg";
import socialMedia from "../assets/projects/social-media.jpeg";
import myntraClone from "../assets/projects/myntra-clone.jpeg";
import employee from "../assets/projects/employee.jpeg";
import imageToIcon from "../assets/projects/image-to-icon.jpeg";
import basicPython from "../assets/projects/basic-python.jpeg";
import movieRating from "../assets/projects/movie-rating.png";
import housing from "../assets/projects/housing.png";
import portfolio from "../assets/projects/portfolio.png";
import javaBasic from "../assets/projects/java-basic.png";
import pythonAutomation from "../assets/projects/python-automation.png";
import bootstrapGallery from "../assets/projects/bootstrap-gallery.png";

export const Projects = () => {
  const otherProjects = [
    {
      title: "Language Translator",
      description:
        "This is a all language translator which can take input as speech or text and convert it back to any language the users want.",
      technologiesUsed: [
        "Python",
        "Speech Recognition and Translator by Google",
        "LangDetect",
        "Pyttsx3",
      ],
      imgUrl: langTranslator,
      projectUrl: "https://github.com/sarishbiswas/Language_Translator",
    },
    {
      title: "Image to Icon Converter",
      description:
        "This Application takes an Image (jpg, jpeg,png etc) as an input and gives and Icon(.ico) of the same image as output",
      technologiesUsed: ["Python", "tkinter"],
      imgUrl: imageToIcon,
      projectUrl:
        "https://github.com/sarishbiswas/Python-Mini-Projects/blob/master/ApplicationExample/ImageToIconConverterApplication.py",
    },
    {
      title: "Some Basic Python projects",
      description: "This are some basic python projects",
      technologiesUsed: ["Python", "tkinter"],
      imgUrl: basicPython,
      projectUrl:
        "https://github.com/sarishbiswas/Python-Mini-Projects/tree/master/ApplicationExample",
    },
    {
      title: "Housing Price Prediction",
      description:
        "This is a basic housing price prediction model using python and linear regression concept.",
      technologiesUsed: ["Python", "Machine Learning"],
      imgUrl: housing,
      projectUrl: "https://github.com/sarishbiswas/Housing-price-prediction",
    },
    {
      title: "Some Basic java Example Projects",
      description:
        "This are some basic JAVA based project which i have created for practice.",
      technologiesUsed: ["JAVA", "SpringBoot", "Microservices"],
      imgUrl: javaBasic,
      projectUrl: "https://github.com/sarishbiswas/Java8-Practice-example-",
    },
    {
      title: "Some Basic Automation Projects in Python",
      description:
        "This are some basic Python based Automation project which i have created for practice.",
      technologiesUsed: ["Python", "Automation", "Git"],
      imgUrl: pythonAutomation,
      projectUrl: "https://github.com/sarishbiswas/it-cert-automation-practice",
    },
  ];
  const fullstackProjects = [
    {
      title: "Restaurant Management Application",
      description:
        "This is a basic sample CRUD application of resturant management.",
      technologiesUsed: ["JAVA", "SpringBoot", "SQL", "JPA"],
      imgUrl: tryyum,
      projectUrl: "https://github.com/sarishbiswas/truyum-spring",
    },
    {
      title: "Employee CRUD Application",
      description:
        "This is a basic sample CRUD application of employee management.",
      technologiesUsed: ["JAVA", "SpringBoot", "SQL", "JPA", "JDBC"],
      imgUrl: employee,
      projectUrl: "https://github.com/sarishbiswas/Employee_Jdbc",
    },
    {
      title: "Sgopping Site",
      description:
        "This is a Shopping site Frontend influenced by Myntra which supports basic action like add to cart, delete from cart, showing selected product in cart and  showing all products in home",
      technologiesUsed: [
        "React",
        "React-redux",
        "HTML",
        "CSS",
        "JSX",
        "React form",
        "React hooks",
        "React Redux",
        "React Router",
        "node",
      ],
      imgUrl: myntraClone,
      projectUrl:
        "https://github.com/sarishbiswas/React-Projects/tree/master/example-projects/myntra-clone",
    },
  ];

  const frontendProjects = [
    {
      title: "React portfolio Website",
      description:
        "This is My Portfolio created in React which has functioning newsletter and form.",
      technologiesUsed: ["React", "HTML", "CSS", "bootstrap", "animation"],
      imgUrl: portfolio,
      projectUrl:
        "https://github.com/sarishbiswas/React-Projects/tree/master/example-projects/1-todo-app-version-3",
    },
    {
      title: "React Calculator",
      description:
        "This is a basic and sample Calculator application which supports basic calculation like addition, subtraction etc..",
      technologiesUsed: ["React", "React-redux", "HTML", "CSS", "JSX"],
      imgUrl: calculator,
      projectUrl:
        "https://github.com/sarishbiswas/React-Projects/tree/master/example-projects/react-calculator-v2-final",
    },
    {
      title: "Basic Social Media",
      description:
        "This is a basic and sample Social Media application Frontend which supports basic action like add post, delete post and  showing all posts",
      technologiesUsed: [
        "React",
        "React-redux",
        "HTML",
        "CSS",
        "JSX",
        "React form",
        "React hooks",
      ],
      imgUrl: socialMedia,
      projectUrl:
        "https://github.com/sarishbiswas/React-Projects/tree/master/example-projects/social-media",
    },
    {
      title: "Basic TODO APP",
      description:
        "This is a basic and sample Todo application Frontend which supports basic action like adding a todo and deleting a todo along with showing list of todos.",
      technologiesUsed: [
        "React",
        "React-redux",
        "HTML",
        "CSS",
        "JSX",
        "React form",
        "React hooks",
      ],
      imgUrl: socialMedia,
      projectUrl:
        "https://github.com/sarishbiswas/React-Projects/tree/master/example-projects/1-todo-app-version-3",
    },
    {
      title: "Movie Rating Website",
      description:
        "This is a basic Movie Rating Application using Javascript where we can Rate movies from the list provided.",
      technologiesUsed: ["Javascript", "HTML", "CSS", "bootstrap"],
      imgUrl: movieRating,
      projectUrl:
        "https://github.com/sarishbiswas/React-Projects/tree/master/example-projects/1-todo-app-version-3",
    },
    {
      title: "Gallery",
      description:
        "This is a Gallery view project using bootstrap which shows the images as gallery",
      technologiesUsed: ["Javascript", "HTML", "CSS", "bootstrap"],
      imgUrl: bootstrapGallery,
      projectUrl: "https://github.com/sarishbiswas/Bootstrap_Gallery",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              I've tackled a variety of exciting projects that showcase my full
              stack prowess. From designing a comprehensive Restaurant
              Management System that streamlines food ordering and delivery, to
              developing an Image to Icon Converter that’s become very useful
              among my friends in College days, I love turning ideas into
              functional, efficient solutions.Each project has honed my skills
              and contributed to significant performance improvements, making me
              a versatile and resourceful developer ready to take on any
              challenge.
            </p>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Front-End Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">FullStack Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Others</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {frontendProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {fullstackProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {otherProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
