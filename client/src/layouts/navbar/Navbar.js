import { Nav, Navbar, Container,Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const LandingNavbar = () => {
    return (
        <div className="LandingNavbar">
            <Navbar expand="lg" className="test bg-body-tertiary" style={{minHeight: "64px"}}>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <Image src={logo} style={{ width: 180 }} fluid></Image>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto d-flex gap-md-5">
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                                <Nav.Link as={Link} to="/services">Help</Nav.Link>
                            </Nav>
                            <Nav className='gap-md-1'>
                                <Nav.Link as={Link} to="/login" className='px-3'>Login</Nav.Link>  
                                <Nav.Link as={Link} to="/signup" className='border bg-success px-3'>Sign up</Nav.Link>                              
                            </Nav>
                        </Navbar.Collapse>
                </Container> 
            </Navbar>
        </div>
    ) 
}

export default LandingNavbar;