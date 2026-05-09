import { Container, Row } from "react-bootstrap";
import githubLogo from "../assets/img/github-mark-white.svg";
import linkedinLogo from "../assets/img/linkedinLogo.svg";
import emialIcon from "../assets/img/emailIcon.svg";

function Footer() {
    const date = new Date().getFullYear();
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-left">

                    <div className="social-icon">
                        <a href="https://github.com/IanYuan00" target="_blank" rel='noreferrer'><img src={githubLogo} alt='GitHub' /></a>
                        <a href="https://www.linkedin.com/in/yuan-gao-yg0522" target="_blank" rel='noreferrer'><img src={linkedinLogo} alt='LinkedIn' /></a>
                        <a href="mailto:yuangao2517@gmail.com"><img src={emialIcon} alt='Emial me' /></a>
                    </div>
                    <p>CopyRight @{date}. All Right Reserved</p>

                </Row>
            </Container>
        </footer>
    )
}

export default Footer;