import { Container, Row, Col } from "react-bootstrap";
import MyPhoto from "../assets/img/Me.png";
import TrackVisibility from 'react-on-screen';

function About() {
    return (
        <section className="about" id="about">
            <Container>
                <div className="about-bx">

                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div>
                                <h2 className={isVisible ? "animate__animated animate__fadeInDown" : "animate__animated animate__zoomOut"}>About Me</h2>
                            </div>}
                    </TrackVisibility>
                    <Row>
                        <Col className="firstCol" xs={12} md={6} xl={6}>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div>

                                        <img className={isVisible ? "animate__animated animate__fadeInUp" : "animate__animated animate__zoomOut"} src={MyPhoto} alt="" />

                                    </div>}

                            </TrackVisibility>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <TrackVisibility>

                                {({ isVisible }) =>
                                    <div className={isVisible ? "intro animate__animated animate__fadeInUp" : "intro animate__animated animate__zoomOut"}>
                                        <h4>Introduction</h4>
                                        <p>I got into web development the way most things start — just trying something out. I wrote my first few pages in plain HTML and CSS, nothing fancy, but seeing a complete page render in the browser for the first time genuinely excited me. That was enough to keep going. Since then I've moved into building dynamic interfaces with React, and the more I build, the more I want to keep building. I'm someone who learns by doing and cares about the end result — whether it works, feels right, and actually makes sense to the person using it.</p>
                                    </div>}

                            </TrackVisibility>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "education animate__animated animate__fadeInUp animate__delay-1s" : "education animate__animated animate__zoomOut animate__delay-1s"}>
                                        <h4>Education</h4>
                                        <p>
                                            <ul>
                                                <li>
                                                    University of Ottawa, Canada <span>2022 - 2025</span><br />
                                                    Master of Systems Science and Engineering
                                                </li>
                                                <li>
                                                    Hangzhou Dianzi University, China <span>2018 - 2022</span><br />
                                                    Bechelor of Biomedical Engineering
                                                </li>
                                            </ul>
                                        </p>
                                    </div>}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </div>
            </Container >
        </section >
    )
}

export default About;