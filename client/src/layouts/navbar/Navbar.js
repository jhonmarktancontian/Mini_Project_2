import {Nav, Navbar, Container, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const LandingNavbar = () => {
    return (
        <div className="LandingNavbar">
            <Navbar expand="lg" className="test bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/">LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto d-flex gap-md-5">
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                                <Nav.Link as={Link} to="/services">Help</Nav.Link>
                            </Nav>
                            <Nav className='gap-md-3'>
                                <Nav.Link as={Link} to="/login">Log in</Nav.Link>
                                <Nav.Link as={Link} to="/signup" className='border custom-bg'>Sign up</Nav.Link>                                
                            </Nav>
                        </Navbar.Collapse>
                </Container> 
            </Navbar>
        </div>
    ) 
}

export default LandingNavbar;