import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/projImg1.png';
import projImg2 from '../assets/img/projImg2.png';
import projImg3 from '../assets/img/projImg3.png';
import projImg4 from '../assets/img/projImg4.png';
import projImg5 from '../assets/img/projImg5.png';
import projImg6 from '../assets/img/projImg6.png';
import projImg7 from '../assets/img/projImg7.png';
import carouselImg1 from '../assets/img/carouselImg1.png';
import carouselImg2 from '../assets/img/carouselImg2.png';
import carouselImg3 from '../assets/img/carouselImg3.png';
import carouselImg4 from '../assets/img/carouselImg4.png';
import carouselImg5 from '../assets/img/carouselImg5.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from "react";

function Projects() {

    const projects = [
        {
            title: "Personal Portfolio",
            description: "Personal website showing my background and experiences.",
            imgUrl: carouselImg1,
            category: 'frontend',
            carouselImgs: [carouselImg1, carouselImg2, carouselImg3, carouselImg4, carouselImg5],
            modalDescription: "HTML, CSS, JacaScript, React.js, bootstrap",
            githubLink: 'https://github.com/IanYuan00',
        },
        {
            title: "Interview Chatbot",
            description: "AI-powered platform designed to enhance interview preparedness for job seekers.",
            imgUrl: projImg3,
            category: 'fullstack',
            carouselImgs: [projImg1, projImg2, projImg3, projImg4, projImg5, projImg6, projImg7],
            modalDescription: 'Frontend: React.js; Backend: Node.js; Database: PostgreSQL',
            githubLink: 'https://github.com/Pavan-12062000/Interview-Chatbot/',
        },
    ];

    const [selectedId, setSelectedId] = useState(null);

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeInDown" : "animate__animated animate__zoomOut"}>
                                    <h2>Projects</h2>
                                    <p> </p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id="pill-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">All</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Frontend</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Full Stack</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                        index={index}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projects
                                                .filter(project => project.category === 'frontend')
                                                .map((project, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...project}
                                                            index={index}
                                                        />
                                                    )
                                                })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            projects
                                                .filter(project => project.category === 'fullstack')
                                                .map((project, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...project}
                                                            index={index}
                                                        />
                                                    )
                                                })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt="" />
        </section>
    )
}

export default Projects;