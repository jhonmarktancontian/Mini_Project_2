import { Container, Row, Col, Form, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    const dateNow = new Date()
    return (
        <footer>
            <Container>
                <Row className="mt-4 pb-4 border-bottom">
                    <Col>
                        <h4>Follow us!</h4>
                        <p>Add 3 social media icons here</p>  {/*fb, titok, linkedin */}
                    </Col>
                    <Col>
                        <h5>Company</h5>
                        <ListGroup className="gap-2 mt-3">
                            <ListGroup.Item className="border-0 p-0">
                                <Link to="/about" className=" text-decoration-none">About Us</Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 p-0">
                                <Link to="/services" className=" text-decoration-none">All Services</Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 p-0">
                                <Link to="/blog" className=" text-decoration-none">Blog</Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 p-0">
                                <Link to="/press" className=" text-decoration-none">Press</Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <h5>Quick Links</h5>
                        <ListGroup variant="flush" className="gap-2 mt-3">
                            <ListGroup.Item className="border-0 p-0">
                                <Link to="/about" className=" text-decoration-none">Terms & Conditions</Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 p-0">
                                <Link to="/services" className=" text-decoration-none">Privacy Policy</Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 p-0">
                                <Link to="/blog" className=" text-decoration-none">Support</Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 p-0">
                                <Link to="/press" className=" text-decoration-none">FAQ</Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <h5>Subscribe</h5>
                        <Form.Group controlId="subscriberEmail" className="mt-3">
                            <Form.Label>Subscribe to get latest news articles and resources.</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="py-4">
                    <Col>
                        <Link to="/"><img src="" alt="Logo"></img></Link>
                    </Col>
                    <Col className="text-end">
                        <span>&copy; {dateNow.getFullYear()} Taskmaster All Rights Reserved</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;

