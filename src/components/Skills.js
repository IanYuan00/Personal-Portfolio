import { Container, Row, Col } from 'react-bootstrap';
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import TrackVisibility from 'react-on-screen';
import htmlImg from '../assets/img/HTML.svg';
import cssImg from '../assets/img/CSS.svg';
import jsImg from '../assets/img/JS.svg';
import reactImg from '../assets/img/REACT.svg';
import expressImg from '../assets/img/EXPRESS.svg';
import nodeImg from '../assets/img/NODE.svg';
import mongodbImg from '../assets/img/MONGODB.svg';
import mysqlImg from '../assets/img/MYSQL.svg';
import gitImg from '../assets/img/GIT.svg';
import dockerImg from '../assets/img/DOCKER.svg';
import awsImg from '../assets/img/AWS.svg';

function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    const centerX = 400;
    const centerY = 300;

    const skills = [
        // Frontend
        {
            name: 'HTML',
            icon: htmlImg,
            x: centerX + 120,
            y: centerY - 80,
            category: 'frontend'
        },
        {
            name: 'CSS',
            icon: cssImg,
            x: centerX + 200,
            y: centerY - 120,
            category: 'frontend'
        },
        {
            name: 'JavaScript',
            icon: jsImg,
            x: centerX + 160,
            y: centerY - 210,
            category: 'frontend'
        },
        {
            name: 'React.js',
            icon: reactImg,
            x: centerX + 290,
            y: centerY - 150,
            category: 'frontend'
        },

        // Backend
        {
            name: 'Node.js',
            icon: nodeImg,
            x: centerX - 120,
            y: centerY - 80,
            category: 'backend'
        },
        {
            name: 'Express',
            icon: expressImg,
            x: centerX - 200,
            y: centerY - 120,
            category: 'backend'
        },

        // Database
        {
            name: 'MongoDB',
            icon: mongodbImg,
            x: centerX - 160,
            y: centerY + 120,
            category: 'database'
        },
        {
            name: 'MySQL',
            icon: mysqlImg,
            x: centerX - 80,
            y: centerY + 160,
            category: 'database'
        },

        // DevOps
        {
            name: 'Git',
            icon: gitImg,
            x: centerX + 120,
            y: centerY + 80,
            category: 'devops'
        },
        {
            name: 'Docker',
            icon: dockerImg,
            x: centerX + 240,
            y: centerY + 120,
            category: 'devops'
        },
        {
            name: 'AWS',
            icon: awsImg,
            x: centerX + 160,
            y: centerY + 160,
            category: 'devops'
        }
    ];

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeInDown" : "animate__animated animate__zoomOut"}>
                                    <h2>Skills</h2>
                                    <p></p>
                                </div>}
                        </TrackVisibility>
                        <div ref={ref} className="skill-bx">
                            <div className="relative w-full h-[600px] bg-[#151515] rounded-xl overflow-hidden">
                                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600">

                                    <line
                                        x1={centerX} y1="30" x2={centerX} y2="750"
                                        stroke="rgba(143, 65, 233)"
                                        strokeWidth="2"
                                        opacity={0.5}
                                    />
                                    <line
                                        x1="50" y1={centerY} x2="750" y2={centerY}
                                        stroke="rgba(143, 65, 233)"
                                        strokeWidth="2"
                                        opacity={0.5}
                                    />

                                    {skills.map((skill, index) => (
                                        <motion.g
                                            key={index}
                                            initial={{ x: centerX, y: centerY, scale: 0, opacity: 0 }}
                                            animate={isInView ?
                                                { x: skill.x, y: skill.y, scale: 1, opacity: 1 } :
                                                { x: centerX, y: centerY, scale: 0, opacity: 0 }
                                            }
                                            transition={{
                                                type: "spring",
                                                bounce: 0.4,
                                                duration: 0.8,
                                                delay: index * 0.05
                                            }}
                                        >

                                            <image
                                                href={skill.icon}
                                                x="-25"
                                                y="-25"
                                                width="50"
                                                height="50"
                                            />
                                            <text y="40" textAnchor="middle" fill="#999" fontSize="20px">
                                                {skill.name}
                                            </text>
                                        </motion.g>
                                    ))}

                                    <text x={centerX + 260} y={centerY - 280} fill="#8F41E9" fontSize="25px" className="font-bold">FRONTEND</text>
                                    <text x={centerX - 380} y={centerY - 280} fill="#578AEF" fontSize="25px" className="font-bold">BACKEND</text>
                                    <text x={centerX - 380} y={centerY + 280} fill="#4ECB71" fontSize="25px" className="font-bold">DATABASES</text>
                                    <text x={centerX + 280} y={centerY + 280} fill="#FF8C37" fontSize="25px" className="font-bold">DEVOPS</text>
                                </svg>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} alt="" />
        </section>
    )
}

export default Skills;