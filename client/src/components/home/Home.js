import { Badge, Card, Image, Container, Row, Col, ListGroup, Dropdown } from "react-bootstrap";
import WebD from '../../assets/icons/web-design.png';
import Photo from '../../assets/icons/photo.png';
import Writing from '../../assets/icons/writing.png';
import Marketing from '../../assets/icons/marketing.png';
import Film from '../../assets/icons/film.png';
import Music from '../../assets/icons/music.png';
import Computer from '../../assets/icons/programming.png';
import Customer from '../../assets/icons/customer.png';
import Green from '../../assets/images/green.png';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { StyledRow, StyledStack, StyledCard, StyledBadge, StyledContainer } from './Home.style';
import { StyledInputGroup, StyledFormControl } from "../styles/InputGroup.style";
import { ServicesData } from '../../data/ServicesData';

const Home = () => {
    const [serviceItem, setServiceItem] = useState('')
    const [searchService, setSearchService] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const handleTouchStart = () => {
        setIsTouched(true);
    };

    const handleTouchCancel = () => {
        setIsTouched(false);
    };

    useEffect(() => {
        const serviceTitles = ['Graphics and Designs', 'Photography', 'Writing and Translation', 'Digital Marketing', 'Video Editing', 'Programming and Tech'];
        setServiceItem(serviceTitles[0])
        let currentIndex = 0;

        const interval = setInterval(() => {
            setServiceItem(serviceTitles[currentIndex]);
            currentIndex = (currentIndex + 1) % serviceTitles.length;
        }, 1500);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const serviceList = ['Erands', 'Home Repair', 'Landscaping', 'Plumbing', 'Electrical'];

    return (
        <section>
            <StyledContainer fluid className="img-fluid p-0 position-relative vh-50">
                <StyledRow>
                    <Col xs={10} sm={9} md={8} lg={7} xl={6} xxl={5}>

                        <StyledCard className="text-center text-white">
                            <Card.Body>

                                <Card.Title className='fs-2 mb-2'>Get anything done from</Card.Title>

                                <Card.Text className='fs-2 mb-5'>{serviceItem}</Card.Text>

                                <StyledInputGroup>
                                    <StyledFormControl
                                        placeholder='I need help with...'
                                        className="rounded-0 shadow-none col-12"
                                        value={searchService}
                                        onChange={(e) => setSearchService(e.target.value)}
                                        onFocus={handleTouchStart}
                                        onBlur={handleTouchCancel}
                                    >
                                    </StyledFormControl>
                                </StyledInputGroup>

                                {isTouched &&
                                    <ListGroup className="rounded-0 border">
                                        {ServicesData.filter((item) => {
                                            return searchService.toLowerCase() === '' ? item : item.name.toLowerCase().includes(searchService.toLowerCase());
                                        }).map((item) => (
                                            <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-start  border-0 list-group-item-action">
                                                <div className="ms-2 me-auto">
                                                    {item.name}
                                                </div>
                                            </ListGroup.Item>

                                        ))}
                                    </ListGroup>
                                }

                                <StyledStack direction="horizontal" gap={3} className="mt-5">
                                    <StyledBadge as={Link} to='/services' className='text-decoration-none py-2 px-3 mb-3'>All</StyledBadge>
                                    <StyledBadge as={Link} to='/services' className='text-decoration-none py-2 px-3 mb-3'>Home Repair</StyledBadge>
                                    <StyledBadge as={Link} to='/services' className='text-decoration-none py-2 px-3 mb-3'>Help Moving</StyledBadge>
                                    <StyledBadge as={Link} to='/services' className='text-decoration-none py-2 px-3 mb-3'>Errands</StyledBadge>
                                    <StyledBadge as={Link} to='/services' className='text-decoration-none py-2 px-3 mb-3'>Landscaping</StyledBadge>
                                </StyledStack>
                            </Card.Body>
                        </StyledCard>

                    </Col>
                </StyledRow>
            </StyledContainer>

            <Container className='my-5' fluid>
                <Row>
                    <Col className='text-center'>
                        <Image src={Green} style={{ width: 450, height: 500 }} fluid rounded />
                    </Col>

                    <Col>
                        <header className='fs-2'>Get Taskmasters to help you!</header>
                        <p className='fs-10'>Hire professionals to assist in your work.</p>
                        <p className="fs-10">
                            Get work done with the assistance of professionals from different
                            fields and make your job more easier. Sign-up now to start making
                            your life more easier.
                        </p>
                        <p>
                            Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum
                        </p>
                    </Col>
                </Row>
            </Container>

            <Container className="my-5">
                <p className='fs-2'>What you need, is what you get</p>
                <span>
                    Need help with something?
                    <Link to='/services' className='text-decoration-none fs-10'> Post a job request</Link>
                </span>
                <Row className="my-auto">
                    <Col lg={3} className="my-3 mb-2">
                        <figure className='text-center pb-3'>
                            <Image src={WebD} alt="Image" className="mt-4" style={{ width: 80 }} fluid rounded />
                            <figcaption className='mt-2'>Graphics and Designs</figcaption>
                        </figure>
                    </Col>

                    <Col lg={3} className="my-3 mb-2">
                        <figure className='text-center pb-3'>
                            <Image src={Photo} alt="Image" className="mt-4" style={{ width: 80 }} fluid rounded />
                            <figcaption className='mt-2'>Photography</figcaption>
                        </figure>
                    </Col>

                    <Col lg={3} className="my-3 mb-2">
                        <figure className='text-center pb-3'>
                            <Image src={Writing} alt="Image" className="mt-4" style={{ width: 80 }} fluid rounded />
                            <figcaption className='mt-2'>Writing and Translation</figcaption>
                        </figure>
                    </Col>

                    <Col lg={3} className="my-3 mb-2">
                        <figure className='text-center pb-3'>
                            <Image src={Marketing} alt="Image" className="mt-4" style={{ width: 80 }} fluid rounded />
                            <figcaption className='mt-2'>Digital Marketing</figcaption>
                        </figure>
                    </Col>

                    <Col lg={3} className="my-3 mb-2">
                        <figure className='text-center pb-3'>
                            <Image src={Film} alt="Image" className="mt-4" style={{ width: 80 }} fluid rounded />
                            <figcaption className='mt-2'>Video Editing</figcaption>
                        </figure>
                    </Col>

                    <Col lg={3} className="my-3 mb-2">
                        <figure className='text-center pb-3'>
                            <Image src={Music} alt="Image" className="mt-4" style={{ width: 80 }} fluid rounded />
                            <figcaption className='mt-2'>Music and Audio</figcaption>
                        </figure>
                    </Col>

                    <Col lg={3} className="my-3 mb-2">
                        <figure className='text-center pb-3'>
                            <Image src={Computer} alt="Image" className="mt-4" style={{ width: 80 }} fluid rounded />
                            <figcaption className='mt-2'>Programming & Tech</figcaption>
                        </figure>
                    </Col>

                    <Col lg={3} className="my-3 mb-2">
                        <figure className='text-center pb-3'>
                            <Image src={Customer} alt="Image" className="mt-4" style={{ width: 80 }} fluid rounded />
                            <figcaption className='mt-2'>Customer Support</figcaption>
                        </figure>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Home;