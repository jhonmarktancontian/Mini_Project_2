
import {Nav, Navbar, Container, Image, NavbarBrand, NavDropdown} from 'react-bootstrap'
import Logo from '../../assets/images/logo.png'
import User from '../../assets/icons/user.png'
import { Link, useNavigate } from 'react-router-dom';

const LandingNavbar = ({logout}) => {

    const isLoginSuccess = !!localStorage.getItem('token')
    const navigate = useNavigate()

    const exitSession = () => {
        logout();
        navigate('/')
    }

    return (
        <div className="LandingNavbar">
            <Navbar expand="lg" className="test bg-body-tertiary" style={{minHeight: "64px"}}>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <Image src={logo} style={{ width: 180 }} fluid></Image>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">

                            <Nav className="m-auto d-flex gap-lg-5">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                                <Nav.Link as={Link} to="/services">Help</Nav.Link>
                            </Nav>

                            <Nav>
                                <Nav.Link as={Link} to="/login" >Log in / Sign up</Nav.Link>
                            </Nav>
                            <Nav>
                                {isLoginSuccess ? (
                                    <NavbarBrand className='mx-5'>
                                        <NavDropdown title={
                                            <Image src={User} style={{width: 30}} title='Profile' fluid rounded/>
                                        } menuVariant='success'> 
                                            <h1>{}</h1>  
                                            <NavDropdown.Item as={Link} to='/dashboard/profile'>Profile</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to='/dashboard/profile'>Switch Account</NavDropdown.Item>
                                            <NavDropdown.Divider/>
                                            <NavDropdown.Item onClick={exitSession}>Log-out</NavDropdown.Item>
                                        </NavDropdown>
                                    </NavbarBrand>
                                ):('')}
                            </Nav>
                        </Navbar.Collapse>
                </Container> 
            </Navbar>
        </div>
    ) 
}

export default LandingNavbar;