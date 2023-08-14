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

