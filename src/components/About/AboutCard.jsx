import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <div className="blockquote mb-0 text-start">
          <p>
            Hello, everyone! My name is <span className="txt-color">Nitish Sharma</span>, and I'm from the
            vibrant city of <span className="txt-color">Sirsa in Haryana, India.</span> I'm a Web
            Developer with a Bachelor's in Computer Application and 1.5 years of experience as a Zoho Developer.
            I’m passionate about technology and thrive on creating innovative solutions. With expertise in
            <span className="txt-color"> React.js </span> and <span className="txt-color"> Node.js</span>, I
            focus on developing fast, accessible, and visually appealing applications that provide exceptional
            digital experiences.
          </p>
          <p>
            Every project is an opportunity to push boundaries and deliver something impactful. Beyond the screen,
            I love travelling to new destinations as well as gliding around on my skates. These interests keep
            me inspired and balanced, both in my professional and personal life.
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
