import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Health Care Plus System"
              description="A Health Care Plus System is an all-encompassing software platform that streamlines hospital operations, enhancing both administrative and clinical functions. It includes modules for patient management, where it handles registration, admission, and patient tracking, as well as communication with healthcare providers. This project was developed using the MERN stack, which includes MongoDB, Express.js, React, and Node.js, providing a robust and scalable solution for managing healthcare operations."
              ghLink="https://github.com/malikkusman/HealthCarePlus_SE_Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Exam Management System"
              description="An automated Exam Management System is essential to streamline these operations, reduce administrative burdens, minimize errors, and enhance efficiency and security. Such a system would significantly benefit educational institutions by saving time and resources, ensuring fairness, and improving the overall educational experience for students and educators alike. This project was developed using the MERN stack, which includes MongoDB, Express.js, React, and Node.js, providing a scalable solutions"
              ghLink="https://github.com/malikkusman/Exam-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Safe Password Pro"
              description="SafePass Pro is a user-friendly password management app built with Flutter that helps you securely store and manage your passwords. It offers features like adding, updating, and deleting passwords, along with a password generator and autofill for easy use. You can switch between light and dark modes, and the app includes a login and registration page for secure access. With SafePass Pro, you can keep your passwords safe and organized, and easily update your login details when needed."
              ghLink="https://github.com/malikkusman/SafePass-Pro"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Netflix Clone"
              description="The design of this Netflix clone is crafted using ReactJS and CSS to provide a visually stunning and responsive user experience. The interface features a dynamic home page with a sleek carousel for highlighting popular content, accompanied by neatly organized content categories for easy browsing. The detailed view of each movie or TV show is designed with high-quality imagery, intuitive navigation, and smooth hover effects. The application’s responsive layout ensures a seamless experience across all devices, thanks to meticulous use of CSS media queries, delivering a polished and engaging design that closely mirrors Netflix's aesthetic."
              ghLink="https://github.com/malikkusman/NETFLIX-CLONE-APP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Expense Tracker App"
              description="This expense tracker app, built with ReactJS, helps you keep track of your spending easily. The app has a clean and simple design where you can quickly add, edit, or delete expenses. You can view your expenses in a list, see how much you've spent in different categories, and check your total spending. The app updates instantly, so you always have up-to-date information. It's designed to be user-friendly and works well on both computers and mobile devices, making it easy to manage your finances anytime, anywhere."
              ghLink="https://github.com/malikkusman/Expense-Tracker-Apps"
              demoLink="https://malikkusman.github.io/Expense-Tracker-Apps/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Weather App"
              description="Certainly! Here’s a simple description for a weather app made with HTML, CSS, and JavaScript:

---

**Weather App**

This weather app, built with HTML, CSS, and JavaScript, provides current weather information in a user-friendly format. You can easily check the weather by entering your city or location. The app displays key details like temperature, weather conditions, and forecasts in a clear and attractive layout. With a modern design and responsive features, it works smoothly on both desktop and mobile devices, making it easy to get the latest weather updates wherever you are."
              ghLink="https://github.com/malikkusman/WEATHER-APP"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
