import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is{" "}
              <span className="yellow">Muhammad Usman Asghar</span>
              and I'm from <span className="yellow">Lahore, Pakistan.</span>
              <br />
              <br />
              I am currently studing Bachelor's of Computer Science from
              University Of Engineering And Technology Lahore.
              <br />
              <br />
              As a<b className="yellow"> Full-Stack Developer,</b> I am
              dedicated to creating efficient and scalable solutions.
              <br />
              <br />I am proficient in
              <b className="yellow"> Javascript, </b>
              as well as have knowledge in programming languages such as{" "}
              <b className="yellow">C++, C#, Python.</b>
              <br />
              <br />I have a passion for working with{" "}
              <b className="yellow">Node.js, MongoDB, Express.js</b> and
              <i>
                <b className="yellow">
                  {" "}
                  modern Javascript libraries and frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="yellow"> React.js</b>
              </i>
              <br />
              <br />I have actively participated in various
              <i>
                <b className="yellow"> coding competitions </b>
                and
                <b className="yellow"> collaborative projects,</b> where I
                demonstrated strong problem-solving skills and the ability to
                work effectively in teams.
              </i>
              <br />
              <br />
              <i>
                My goal is to contribute to challenging projects that have a
                significant impact, allowing me to grow as a developer and make
                a meaningful difference in the tech world.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/malikkusman"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/malikusmann_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muhammad-usman-asghar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
