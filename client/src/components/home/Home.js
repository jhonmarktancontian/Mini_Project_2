import { Stack, Badge, Button, InputGroup, Form, Card, Image, Container, Row, Col } from "react-bootstrap";
import './Home.css';
import Green from '../../images/green.jpg'

import Banner from '../../assets/images/woman.jpg';
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'


const Home = () => {
    const [services, setServices] = useState('');
    
    useEffect(() => {
        const titleContent = ['Graphics and Designs', 'Digital Marketing', 'Writing and Translation', 'Photography', 'Video & Animation', 'Music and Audio', 'Programming & Tech'];
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
                                <Badge bg='success'><Link as={Link} to="/services" className='text-decoration-none text-light'>Art Commission</Link></Badge>  
                                <Badge bg='success'><Link as={Link} to="/services" className='text-decoration-none text-light'>Account Boost</Link></Badge>  
                                <Badge bg='success'><Link as={Link} to="/services" className='text-decoration-none text-light'>Gardening</Link></Badge>  
                                <Badge bg='success'><Link as={Link} to="/services" className='text-decoration-none text-light'>Helper</Link></Badge>  
                                <Badge bg='success'><Link as={Link} to="/services" className='text-decoration-none text-light'>Car Rental</Link></Badge>  
                                <Badge bg='success'><Link as={Link} to="/services" className='text-decoration-none text-light'>Delivery Guy</Link></Badge>
                                <Badge bg='success'><Link as={Link} to="/services" className='text-decoration-none text-light'>Witch Doctor</Link></Badge>  
                                <Badge bg='success'><Link as={Link} to="/services" className='text-decoration-none text-light'>Logistics</Link></Badge>  
                                <Badge bg='success'><Link as={Link} to="/services" className='text-decoration-none text-light'>Food Service</Link></Badge>  
                                <Badge bg='success'><Link as={Link} to="/services" className='text-decoration-none text-light'>Lumber</Link></Badge>  
                                <Badge bg='success'><Link as={Link} to="/services" className='text-decoration-none text-light'>Plumbing</Link></Badge>  
                        </Stack>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
                <Image src={Banner} alt="Image" className="background-image" />
            </div>

            <Container className="my-4" fluid>
                    <p className='fs-2'>What you need, is what you get</p>
                    <span>
                        Need help with something?
                        <Link to='/services' className='text-decoration-none fs-10'> Post a job request</Link>
                    </span>
                    <Row className="my-auto mt-4 scrollable">
                    <Stack direction="horizontal" gap={2}>
                        <Col lg={3} className="my-3 mb-2">
                            <Card>
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Subtitle>Service details</Card.Subtitle>
                                    <Image src={Green} alt="Image" className="mt-4" style={{height: 300, width: 300}} fluid rounded/>
                                </Card.Body>
                                <Button variant="success" className="mx-3 mb-2" as={Link} to='/services'>Learn More</Button>
                            </Card>
                        </Col>

                        <Col lg={3} className="my-3 mb-2">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Services Categ Holder</Card.Title>
                                    <Card.Subtitle>Service details</Card.Subtitle>
                                    <Image src={Green} alt="Image" className="mt-4" style={{height: 300, width: 300}} fluid rounded/>
                                </Card.Body>
                                <Button variant="success" className="mx-3 mb-2" as={Link} to='/services'>Learn More</Button>
                            </Card>
                        </Col>

                        <Col lg={3} className="my-3 mb-2">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Services Categ Holder</Card.Title>
                                    <Card.Subtitle>Service details</Card.Subtitle>
                                    <Image src={Green} alt="Image" className="mt-4" style={{height: 300, width: 300}} fluid rounded/>
                                </Card.Body>
                                <Button variant="success" className="mx-3 mb-2" as={Link} to='/services'>Learn More</Button>
                            </Card>
                        </Col>

                        <Col lg={3} className="my-3 mb-2">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Services Categ Holder</Card.Title>
                                    <Card.Subtitle>Service details</Card.Subtitle>
                                    <Image src={Green} alt="Image" className="mt-4" style={{height: 300, width: 300}} fluid rounded/>
                                </Card.Body>
                                <Button variant="success" className="mx-3 mb-2" as={Link} to='/services'>Learn More</Button>
                            </Card>
                        </Col>

                        <Col lg={3} className="my-3 mb-2">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Services Categ Holder</Card.Title>
                                    <Card.Subtitle>Service details</Card.Subtitle>
                                    <Image src={Green} alt="Image" className="mt-4" style={{height: 300, width: 300}} fluid rounded/>
                                </Card.Body>
                                <Button variant="success" className="mx-3 mb-2" as={Link} to='/services'>Learn More</Button>
                            </Card>
                        </Col>

                        <Col lg={3} className="my-3 mb-2">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Services Categ Holder</Card.Title>
                                    <Card.Subtitle>Service details</Card.Subtitle>
                                    <Image src={Green} alt="Image" className="mt-4" style={{height: 300, width: 300}} fluid rounded/>
                                </Card.Body>
                                <Button variant="success" className="mx-3 mb-2" as={Link} to='/services'>Learn More</Button>
                            </Card>
                        </Col>
                        </Stack>
                    </Row>
            </Container>
        </div>
    );
}

export default Home;
