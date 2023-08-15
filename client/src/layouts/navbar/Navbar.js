import {Nav, Navbar, Container, Button, Image} from 'react-bootstrap'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';

const LandingNavbar = () => {
    return (
        <div className="LandingNavbar">
            <Navbar expand="lg" className="test bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <Image src={Logo} style={{width: 180}} fluid></Image>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto d-flex gap-lg-5">
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/services" >Services</Nav.Link>
                                <Nav.Link as={Link} to="/services" >Help</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link as={Link} to="/login" >Log in / Sign up</Nav.Link>
                                <Button variant='success' className='mx-3'>Become a Taskmaster</Button>
                            </Nav>
                        </Navbar.Collapse>
                </Container> 
            </Navbar>
        </div>
    ) 
}

export default LandingNavbar;