import { useNavigate } from "react-router-dom";
import {Row, Col, Container} from "react-bootstrap"

const Profile = ({handleLogout}) => {

    const navigate = useNavigate()

    const LogOut = () => {
        handleLogout();
        navigate('/')
    }

    return(
        <div>
            <Container fluid>
                <Row>
                    <Col lg={4} className="border">
                        <h2>Profile</h2>
                    </Col>
                    <Col lg={8} className="border">
                    e
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Profile