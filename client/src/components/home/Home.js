import { Stack, Badge, Button, InputGroup, Form, Card, Image } from "react-bootstrap";
import './Home.css';
<<<<<<< HEAD
import Banner from './woman.jpg';
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

=======
import Banner from '../../assets/images/woman.jpg';
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'


>>>>>>> 086af5dfbcc415d5c7508f787da1dfc9eb21e659
const Home = () => {
    const [services, setServices] = useState('');
    
    useEffect(() => {
        const titleContent = ['Graphics and Designs', 'Digital Marketing', 'Writing and Translation', 'Photography', 'Video & Animation', 'Music and Audio', 'Programming & Tech'];
        let currentIndex = 0;

        const interval = setInterval(() => {
            setServices(titleContent[currentIndex]);
            currentIndex = (currentIndex + 1) % titleContent.length;
        }, 3000);

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
                        <span><Card.Title>Get anything done from <h5>{services}</h5></Card.Title></span>
                        <Card.Text style={{color: 'green'}}>—</Card.Text>
                        <Card.Subtitle></Card.Subtitle>
                        <InputGroup>
                            <Form.Control placeholder='Search for services near you...'></Form.Control>
                            <Button variant='success'>Search</Button>
                        </InputGroup>
                        <Card.Text></Card.Text>
                        <Card.Text>Popular</Card.Text>
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
        </div>
    );
}

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> 086af5dfbcc415d5c7508f787da1dfc9eb21e659
