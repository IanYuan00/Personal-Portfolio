import { Col, Row, Card, Modal } from 'react-bootstrap';
import { useState } from 'react';
import Carousel from "react-bootstrap/Carousel";
import "react-multi-carousel/lib/styles.css";
import githubLogo from "../assets/img/github-mark-white.svg";

function ProjectCard({ title, description, imgUrl, carouselImgs = [], modalDescription, githubLink, websiteURL, index, isVisible }) {
    const [showModal, setShowModal] = useState(false);
    const [carouselIndex, setCarouselIndex] = useState(0);
    const handleCardClick = async (e) => {
        e.stopPropagation();
        setShowModal(true);
    }
    const handleSelect = (selectedIndex) => {
        setCarouselIndex(selectedIndex);
    }

    return (
        <Col sm={6} md={4}>
            <Card className={`projectCard ${isVisible ? `animate__animated animate__fadeInUp animate__delay-${index}s` : ''}`}
                style={{ height: '100%' }}
                onClick={handleCardClick}>
                <Card.Img variant="top" src={imgUrl} style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', borderRadius: '20px' }} />
                <Card.Body style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1'
                }}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text style={{ flex: '1' }}>
                        {description}
                    </Card.Text>
                    <Card.Text style={{ fontSize: '14px' }}>
                        (Click to see details)
                    </Card.Text>
                </Card.Body>
            </Card>

            <Modal
                show={showModal}
                onHide={() => { setShowModal(false) }}
                size="l"
                scrollable
                className="details-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='p-0' style={{ height: '60vh', display: 'flex', flexDirection: 'column' }}>
                    <Col className='g-0'>
                        <Row>
                            <Carousel activeIndex={carouselIndex} onSelect={handleSelect}>
                                {carouselImgs.map((img, i) => (
                                    <Carousel.Item key={i}>
                                        <img
                                            className='d-block w-100'
                                            src={img}
                                            style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }}
                                            alt=''
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Row>
                        <Row>
                            <div className='modal-description'>
                                <h4>Technologies Used: </h4>
                                <p>{modalDescription}</p>
                            </div>
                            <div className='modal-description'>
                                <h4>Link to the Website:</h4>
                                <a href='yuangaoportfolio.com'>{websiteURL}</a>
                            </div>
                            <div className='modal-description'>
                                <h4>See Source Code in Github:</h4>

                                <button>
                                    <a target='_blank' rel='noreferrer' href={githubLink}>
                                        <img style={{ height: '30px', marginRight: '10px' }} src={githubLogo} alt="Github" />
                                        Go to Github
                                    </a>
                                </button>

                            </div>
                        </Row>
                    </Col>
                </Modal.Body>
            </Modal>
        </Col>
    )
}

export default ProjectCard;