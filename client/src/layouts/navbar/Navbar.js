import {Nav, Navbar, Container, Image, NavbarBrand, NavDropdown} from 'react-bootstrap'
import logo from '../../assets/images/logo.png'
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
                            <Nav className="m-auto d-flex gap-md-5">
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/services">Help</Nav.Link>
                        </Nav>
                        <Nav className='gap-md-1'>
                            {!isLoginSuccess ? (
                                <>
                                    <Nav.Link as={Link} to="/login" className='px-3'>Login</Nav.Link>
                                    <Nav.Link as={Link} to="/signup" className='border rounded-1 bg-success px-3'>Sign up</Nav.Link>
                                </>
                            ) : null}
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