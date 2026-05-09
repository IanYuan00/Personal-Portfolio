import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect, useRef } from "react";
import githubLogo from "../assets/img/github-mark-white.svg";
import linkedinLogo from "../assets/img/linkedinLogo.svg";
import emialIcon from "../assets/img/emailIcon.svg";

function NavBar() {
    const [activeLink, setActiveLikn] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const sections = useRef([]);

    const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }

        sections.current.forEach((section) => {
            const sectionOffsetTop = section.offsetTop - 500;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionOffsetTop && window.scrollY < sectionOffsetTop + sectionHeight) {
                setActiveLikn(section.id);
            }
        })
    }

    useEffect(() => {
        sections.current = document.querySelectorAll('section');
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLikn(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">Yuan Gao</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            className={activeLink === 'home' ? 'actived navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}>
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#about"
                            className={activeLink === 'about' ? 'actived navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('about')}>
                            About Me
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={activeLink === 'skills' ? 'actived navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('skills')}>
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            smooth spy to="projects"
                            className={activeLink === 'projects' ? 'actived navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('projects')}>
                            Projects
                        </Nav.Link>

                    </Nav>
                    <div className="navbar-text">
                        <div className="social-icon">
                            <a href="https://github.com/IanYuan00" target='_blank' rel='noreferrer'><img src={githubLogo} alt="Github" /></a>
                            <a href="https://www.linkedin.com/in/yuan-gao-yg0522" target='_blank' rel='noreferrer'><img src={linkedinLogo} alt="Linkedin" /></a>
                            <a href="mailto:yuangao2517@gmail.com"><img src={emialIcon} alt="Email me" /></a>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavBar;