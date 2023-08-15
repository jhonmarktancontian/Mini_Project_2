import './Footer.css'
import { Container, Row, Col, Form, ListGroup, Image, InputGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/logo.png'
import Fb from '../../assets/icons/facebook.png'
import Tiktok from '../../assets/icons/tik-tok.png'
import Twitter from '../../assets/icons/twitter.png'
import Linkedin from '../../assets/icons/linkedin.png'

const Footer = () => {
    const dateNow = new Date()
    return (
        <footer>
            <Container>
                <Row className="mt-4 pb-4 border-bottom">
                        <Col>
                        <h5>Company</h5>
                        <ListGroup className="gap-2 mt-3">
                            <ListGroup.Item className="border-0 p-0">
                                <Link to="/about" className=" underline-on-hover">About Us</Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 p-0">
                                <Link to="/services" className=" underline-on-hover">All Services</Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 p-0">
                                <Link to="/blog" className=" underline-on-hover">Blog</Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 p-0">
                                <Link to="/press" className=" underline-on-hover">Press</Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <h5>Quick Links</h5>
                        <ListGroup variant="flush" className="gap-2 mt-3">
                            <ListGroup.Item className="border-0 p-0">
                                <Link to="/about" className="  underline-on-hover">Terms & Conditions</Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 p-0">
                                <Link to="/services" className="underline-on-hover">Privacy Policy</Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 p-0">
                                <Link to="/blog" className="underline-on-hover">Support</Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 p-0">
                                <Link to="/press" className="underline-on-hover">FAQ</Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <h5>Subscribe</h5>
                        <InputGroup controlId="subscriberEmail" className="mt-3">
                            <Form.Label>Subscribe to get latest news articles and resources.</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" className='rounded-start'/>
                            <Button variant="success" className="rounded-end">Submit</Button>
                        </InputGroup>
                    </Col>
                </Row>
                    <Row className="py-4 mx-auto">
                    <Col>
                        <Link to="/"><Image src={Logo} style={{width: 180}} alt="Logo" fluid/></Link>
                    </Col>

                    <Col>
                        <Image src={Fb} alt='Facebook' className='mx-3' style={{width: 30}}/>
                        <Image src={Twitter} alt='Facebook' className='mx-3' style={{width: 30}}/>
                        <Image src={Tiktok} alt='Facebook' className='mx-3' style={{width: 30}}/>
                        <Image src={Linkedin} alt='Facebook' className='mx-3' style={{width: 30}}/>
                    </Col>

                    <Col>
                        <span>&copy; {dateNow.getFullYear()} Taskmaster All Rights Reserved</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;

