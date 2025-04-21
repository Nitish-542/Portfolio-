import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get("https://http5222-s6v9.onrender.com/skills/");
        console.log("Fetched skills:", response.data);
        setSkills(response.data.skills); 
      } catch (error) {
        console.error("Error fetching skills:", error);
        setSkills([]); 
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <Container fluid id="skills" className="project-section">
      <Particle />
      <Container>
        <h1 className="display-4 pb-3">
          My <strong className="txt-color">Skills</strong>
        </h1>
        <p>Here are some technologies and tools I've worked with.</p>

        {loading ? (
          <p>Loading skills...</p>
        ) : (
          <Row className="justify-content-center pb-5">
            {skills.map((skill) => (
              <Col key={skill._id} md={4} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <Card.Title>{skill.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {skill.category}
                    </Card.Subtitle>
                    <Card.Text>
                      <strong>Proficiency:</strong> {skill.proficiency}
                      <br />
                      <strong>Experience:</strong> {skill.yearsOfExperience} years
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </Container>
  );
}

export default Skills;
