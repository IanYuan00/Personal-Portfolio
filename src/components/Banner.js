import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BoxArrowUpRight } from 'react-bootstrap-icons';
import headerImg from '../assets/img/Avatar.svg';
import { saveAs } from 'file-saver';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useInView, motion, useAnimation } from "framer-motion"
import resume from '../assets/Yuan_Gao_Web_Developer_Resume.pdf'

function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "Software Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const period = 1000;
    const ref = useRef(null);
    const isInview = useInView(ref, { once: false });
    const animateVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }
    const control = useAnimation();

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        if (isInview) {
            control.start("visible");
        }

        return () => { clearInterval(ticker) };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [control, isInview, text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200);
        } else if (!isDeleting && updatedText !== fullText) {
            setDelta(prevDelta => prevDelta / 1.2);
        }
    }

    const handleClick = () => {
        fetch(resume)
            .then(response => response.blob())
            .then(blob => {
                saveAs(blob, "Yuan_Gao_Web_Developer_Resume.pdf");
            })
            .catch(error => console.error('Failed to download the file:', error));
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col className="firstCol" xs={12} md={6} xl={7}>

                        <motion.span
                            ref={ref}
                            animate={control}
                            variants={animateVariants}
                            initial="hidden"
                            className="tagline">
                            Welcome to my Portfolio
                        </motion.span>
                        <motion.h1
                            ref={ref}
                            animate={control}
                            variants={animateVariants}
                            initial="hidden"
                        >{`Hi! I'm Ian`}<span className="wrap">{text}</span></motion.h1>
                        <motion.p
                            ref={ref}
                            animate={control}
                            variants={animateVariants}
                            initial="hidden"
                        >
                            Here, you can learn more about my background, explore the projects I’ve worked on, and see how my skills and experience align with the needs of your team. Feel free to reach out if you’d like to discuss potential opportunities or learn more about my work!</motion.p>

                        <TrackVisibility>
                            {(isVisible) =>
                                <div>
                                    <button
                                        className={isVisible ? "animate__animated animate__fadeInUp" : "animate__animated animate__zoomOut"}
                                        onClick={() => handleClick()}>
                                        Resume
                                        <BoxArrowUpRight size={25}></BoxArrowUpRight>
                                    </button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Hedder Img"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;