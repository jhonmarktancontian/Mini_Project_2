<<<<<<< HEAD
import { Button, Form, Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Signup = (props) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [confirmMessage, setConfirmMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }, [props.show])

  const handleSubmission = async (e) => {
    e.preventDefault();

    //password checking
    if(Password !== confirmpassword) {
      setConfirmMessage('Password dont match.')
    }
    else{
      //do nothing
    }

    const objReq = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        FIRSTNAME: firstname,
        LASTNAME: lastname,
        EMAIL: Email,
        PASSWORD: Password,
      }),
    };

    try {
      setIsLoading(true);
      const serverResponse = await fetch('http://localhost:7001/api/signup', objReq);
      const fetchResult = await serverResponse.json();

      if (fetchResult.success) {
        console.log(fetchResult.message);
      } else {
        setMessage(fetchResult.message);
      }
    } catch (err) {
      if (err instanceof SyntaxError) {
        console.error('JSON Parse Error:', err);
      } else {
        console.error('Fetch Error:', err);
      }
    } finally {
      setIsLoading(false);
    }


  };

  
  
  return (
    <Modal{...props} size="md" aria-labelledby="contained-modal-title-vcenter" backdrop="static" centered>

      <Modal.Header closeButton={props.onHide}>
        <Modal.Title id="contained-modal -title-vcenter">
          Sign Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <Form onSubmit={handleSubmission}>
            <Form.Group className='mb-3' controlId="firstname">
              <Form.Label className='test'><small>First Name</small></Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId="lastname">
              <Form.Label><small>Last Name</small></Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
              />
            </Form.Group>

          <Form.Group className='mb-3' controlId="email">
            <Form.Label><small>Email Address {message}</small></Form.Label>
            <Form.Control
              type="email"
              placeholder="Email Address"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId="password">
            <Form.Label><small>Password</small></Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label><small>Confirm Password</small></Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <p className='fs-10'>{confirmMessage}</p>
          </Form.Group>
          <span className='fs-10'>By clicking Sign Up, you agree to our <Link to-="" >Terms of Use</Link> & <Link to-="" >Privacy Policy</Link></span>
          <Container className='mb-3 text-center' fluid>
            <Button variant='success' type='submit'style={{width: 450}} disabled={isLoading}>Sign Up</Button>
          </Container>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Signup;

=======
import React, { useState } from 'react';
import { Card, Button, Container, Modal } from 'react-bootstrap';
import ClientSignup from '../clientsignup/ClientSignup';
import FreelancerSignup from '../freelancersignup/FreelancerSignup';
import { Link } from 'react-router-dom';

function Signup() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [showSignupModal, setShowSignupModal] = useState(false);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleSignupButton = () => {
        setShowSignupModal(true);
    };

    const handleCloseModal = () => {
        setShowSignupModal(false);
        setSelectedOption(null);
    };

    return (
        <Container className="text-center vh-100 d-flex align-items-center justify-content-center">
            <div className="row w-100 py-5 d-flex align-items-center justify-content-center">
                <div className="col-md-12 h-100 align-items-center">


                    <div className='text-center mb-5'>
                        <img
                            src='your_logo_url_here'
                            alt='Logo'
                        />

                    </div>

                    <div className="col-md-12">
                        <h2>Sign Up as a <strong>Client</strong> or <strong>Freelancer</strong></h2>
                    </div>

                    <div className="row d-flex align-items-center justify-content-center px-2 mt-4 mt-md-5 gy-3">
                        <Card
                            className={`col-md-3  mx-4 mb-3 ${selectedOption === 'client' ? 'bg-info' : ''}`}
                            style={{ minHeight: '20vh' }}
                            onClick={() => handleOptionSelect('client')}
                        >
                            <Card.Body className='d-flex flex-column align-items-center justify-content-center'>

                                <Card.Title><h4>Client</h4></Card.Title>
                                <Card.Text>I need a freelancer.</Card.Text>

                            </Card.Body>
                        </Card>

                        <Card
                            className={`col-md-3 mx-4 mb-3 ${selectedOption === 'freelancer' ? 'bg-info' : ''}`}
                            style={{ minHeight: '20vh' }}
                            onClick={() => handleOptionSelect('freelancer')}
                        >
                            <Card.Body className='d-flex flex-column align-items-center justify-content-center'>
                                <Card.Title><h4>Freelancer</h4></Card.Title>
                                <Card.Text>I'm looking for work.</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <Button
                        className="col-12 col-md-4 col-lg-3 py-2 mt-4 mt-md-5"
                        variant="primary" onClick={handleSignupButton}
                        disabled={!selectedOption}
                        style={{ fontSize: '15px', borderRadius: '20px' }}>
                        {selectedOption ? (
                            selectedOption === 'client' ? 'Sign Up as a Client' : 'Sign Up as a Freelancer'
                        ) :
                            (
                                'Create Account'

                            )}
                    </Button>

                    <div className='mt-4'>
                        <span style={{fontSize: '15px'}}>
                           
                            Already have an account?  
                            <Link to="/login" className="text-decoration-none ms-2">Log in</Link>
                          
                        </span>

                    </div>

                </div>
            </div>

            <Modal 
            show={showSignupModal} 
            onHide={handleCloseModal} 
            
            aria-labelledby="contained-modal-title-vcenter" 
            centered
            >
               
                <Modal.Header closeButton className='px-4 px-md-5 py-md-3' style={{ border: 'none' }}>
                    <Modal.Title>
                        Signup as a {selectedOption === 'client' ? 'Client' : 'Freelancer'}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className='p-4 px-md-5'>
                    {
                        selectedOption === 'client' ? (<ClientSignup />) : (<FreelancerSignup/>)
                    }
                </Modal.Body>
              
            </Modal>
            
        </Container>
    );

}

export default Signup;
>>>>>>> 086af5dfbcc415d5c7508f787da1dfc9eb21e659
