import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  technologiesUsed,
  imgUrl,
  projectUrl,
}) => {
  return (
    <Col sm={6} md={4}>
      <a href={projectUrl} style={{ color: "#fff" }}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="Project Image" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <br /><br />
            <div style={{ background: "black" }}>
              {technologiesUsed.map((tech, index) => (
                <span key={index}>{tech}, </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};
