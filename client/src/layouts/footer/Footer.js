import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    const dateNow = new Date()
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center">
                        <p>Taskmaster Copyright&copy; {dateNow.getFullYear()}</p>
                    </Col>
                    {/* implementing col to add more stuff later on */}
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;

