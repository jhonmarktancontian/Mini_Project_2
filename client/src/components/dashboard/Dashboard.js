import { Nav, Navbar, Container, Image, NavbarBrand, NavDropdown } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import User from '../../assets/icons/user.png'
import { Link } from 'react-router-dom';

const Dashboard = ({ handleLogout }) => {

    const navigate = useNavigate();

    const handleLogoutClick = () => {
        handleLogout();
        navigate('/login');
    }
   
    return (
        <Container fluid>
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

                        <Nav>
                                <NavbarBrand className='mx-5'>
                                        <NavDropdown title={
                                            <Image src={User} style={{width: 30}} title='Profile' fluid rounded/>
                                        } menuVariant='success'> 
                                            <h1>{}</h1>  
                                            <NavDropdown.Item as={Link} to='/dashboard/profile'>Profile</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to='/dashboard/profile'>Switch Account</NavDropdown.Item>
                                            <NavDropdown.Divider/>
                                            <NavDropdown.Item onClick={handleLogoutClick}>Log-out</NavDropdown.Item>
                                        </NavDropdown>
                                    </NavbarBrand>

                            </Nav>
                        </Navbar.Collapse>
                </Container> 
            </Navbar>

            <h1>Dashboard</h1> 
        </Container>  
         
    )
}

export default Dashboard;

