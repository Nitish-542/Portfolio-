import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle"; // Optional
import Github from "./Github";     // Optional

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("https://http5222-s6v9.onrender.com/projects/");
        console.log("Fetched projects:", response.data);
        setProjects(response.data.projects); // ✅ Access .projects array
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Container fluid id="projects" className="project-section">
      <Particle />
      <Container>
        <h1 className="display-4 pb-3">
          My Recent <strong className="txt-color">Projects</strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>

        {loading ? (
          <p>Loading projects...</p>
        ) : (
          <Row className="justify-content-center pb-5">
            {projects.map((project) => (
              <Col key={project._id} md={4} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {project.year}
                    </Card.Subtitle>
                    <Card.Text>{project.description}</Card.Text>
                    <Button
                      variant="primary"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}

        <Github />
      </Container>
    </Container>
  );
}

export default Projects;
