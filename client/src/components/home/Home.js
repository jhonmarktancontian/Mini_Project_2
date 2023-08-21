import { Stack, Badge, Button, InputGroup, Form, Card, Image, Container, Row, Col } from "react-bootstrap";
import './Home.css';
import WebD from '../../assets/icons/web-design.png'
import Photo from '../../assets/icons/photo.png'
import Writing from '../../assets/icons/writing.png'
import Marketing from '../../assets/icons/marketing.png'
import Film from '../../assets/icons/film.png'
import Music from '../../assets/icons/music.png'
import Computer from '../../assets/icons/programming.png'
import Customer from '../../assets/icons/customer.png'

import Banner from '../../assets/images/woman.jpg';
import Green from '../../assets/images/green.png';
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'


const Home = () => {
    const [services, setServices] = useState('');
    const [tContent, setContent] = useState('')
    
    useEffect(() => {
        const titleContent = ['Graphics and Designs', 'Photography', 'Writing and Translation', 'Digital Marketing', 'Video Editing', 'Music and Audio', 'Programming & Tech', 'Customer Support'];
        setContent(titleContent)
        let currentIndex = 0;

        const interval = setInterval(() => {
            setServices(titleContent[currentIndex]);
            currentIndex = (currentIndex + 1) % titleContent.length;
        }, 1500);

        return () => {
            clearInterval(interval);
        };
    }, []);

    
    return (
        <div>
            <div className="card-container">
                <div className="overlay">
                    <Card className="overlay-card text-center border-dark-2 card-color">
                    <Card.Body>
                        <span><Card.Title className='fs-2'>Get anything done from <h5 className='fs-2'>{services}</h5></Card.Title></span>
                        <Card.Text style={{color: '#00308F'}}>—</Card.Text>
                        <Card.Subtitle></Card.Subtitle>
                        <InputGroup>
                            <Form.Control placeholder='Search for services near you...'></Form.Control>
                            <Button variant='success'>Search</Button>
                        </InputGroup>
                        <Card.Text></Card.Text>
                        <Card.Text className='fs-10'>Popular</Card.Text>
                        <div className='scrollable'>
                        <Stack direction="horizontal" gap={2}>
                                <Badge bg='success' as={Link} to='/services' className='text-decoration-none'>Art Commission</Badge>  
                                <Badge bg='success' as={Link} to='/services' className='text-decoration-none'>Account Boost</Badge>  
                                <Badge bg='success' as={Link} to='/services' className='text-decoration-none'>Gardening</Badge>  
                                <Badge bg='success' as={Link} to='/services' className='text-decoration-none'>Helper</Badge>  
                                <Badge bg='success' as={Link} to='/services' className='text-decoration-none'>Car Rental</Badge>  
                                <Badge bg='success' as={Link} to='/services' className='text-decoration-none'>Delivery Guy</Badge>
                                <Badge bg='success' as={Link} to='/services' className='text-decoration-none'>Witch Doctor</Badge>  
                                <Badge bg='success' as={Link} to='/services' className='text-decoration-none'>Logistics</Badge>  
                                <Badge bg='success' as={Link} to='/services' className='text-decoration-none'>Food Service</Badge>  
                                <Badge bg='success' as={Link} to='/services' className='text-decoration-none'>Lumber</Badge>  
                                <Badge bg='success' as={Link} to='/services' className='text-decoration-none'>Plumbing</Badge>  
                        </Stack>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
                <Image src={Banner} alt="Image" className="background-image" />
            </div>

            <Container className="my-5" fluid>
                <Row>
                    <Col sm={6} className='text-center'>
                        <Image src={Green} style={{width: 450, height: 500}} fluid rounded/>
                    </Col>

                    <Col sm={6}>
                        <header className='fs-2'>Get Taskmasters to help you!</header>
                        <p className='fs-10'>Hire professionals to assist in your work.</p>
                        <p className="fs-10">
                            Get work done with the assistance of professionals from different
                            fields and make your job more easier. Sign-up now to start making 
                            your life more easier.
                        </p>
                        <p>
                        Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum 
                        </p>
                    </Col>
                </Row>
            </Container>

            <Container className="my-5">
                    <p className='fs-2'>What you need, is what you get</p>
                    <span>
                        Need help with something?
                        <Link to='/services' className='text-decoration-none fs-10'> Post a job request</Link>
                    </span>
                    <Row className="my-auto">
                        <Col lg={3} className="my-3 mb-2">
                            <figure className='text-center pb-3'>
                                <Image src={WebD} alt="Image" className="mt-4" style={{width: 80}} fluid rounded/>
                                <figcaption className='mt-2'>{tContent[0]}</figcaption>
                            </figure>
                        </Col>

                        <Col lg={3} className="my-3 mb-2">
                            <figure className='text-center pb-3'>
                                <Image src={Photo} alt="Image" className="mt-4" style={{width: 80}} fluid rounded/>
                                <figcaption className='mt-2'>{tContent[1]}</figcaption>
                            </figure>
                        </Col>

                        <Col lg={3} className="my-3 mb-2">
                            <figure className='text-center pb-3'>
                                <Image src={Writing} alt="Image" className="mt-4" style={{width: 80}} fluid rounded/>
                                <figcaption className='mt-2'>{tContent[2]}</figcaption>
                            </figure>
                        </Col>

                        <Col lg={3} className="my-3 mb-2">
                            <figure className='text-center pb-3'>
                                <Image src={Marketing} alt="Image" className="mt-4" style={{width: 80}} fluid rounded/>
                                <figcaption className='mt-2'>{tContent[3]}</figcaption>
                            </figure>
                        </Col>

                        <Col lg={3} className="my-3 mb-2">
                            <figure className='text-center pb-3'>
                                <Image src={Film} alt="Image" className="mt-4" style={{width: 80}} fluid rounded/>
                                <figcaption className='mt-2'>{tContent[4]}</figcaption>
                            </figure>
                        </Col>

                        <Col lg={3} className="my-3 mb-2">
                            <figure className='text-center pb-3'>
                                <Image src={Music} alt="Image" className="mt-4" style={{width: 80}} fluid rounded/>
                                <figcaption className='mt-2'>{tContent[5]}</figcaption>
                            </figure>
                        </Col>

                        <Col lg={3} className="my-3 mb-2">
                            <figure className='text-center pb-3'>
                                <Image src={Computer} alt="Image" className="mt-4" style={{width: 80}} fluid rounded/>
                                <figcaption className='mt-2'>{tContent[6]}</figcaption>
                            </figure>
                        </Col>

                        <Col lg={3} className="my-3 mb-2">
                            <figure className='text-center pb-3'>
                                <Image src={Customer} alt="Image" className="mt-4" style={{width: 80}} fluid rounded/>
                                <figcaption className='mt-2'>{tContent[7]}</figcaption>
                            </figure>
                        </Col>
                    </Row>
            </Container>
        </div>
    );
}

export default Home;