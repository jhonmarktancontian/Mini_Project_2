import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import Signup from '../signup/Signup';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  
  const navigate = useNavigate();

  const openSignup = (e) => {
    e.preventDefault();
    setShowSignup(true); 
  }
  
  const closeSignup = () => setShowSignup(false);

  const login = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:7001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage(data.message);
        localStorage.setItem('token', data.accessToken);
        navigate('/dashboard');
      } else {
        setMessage(data.message);
      }

    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className='vh-100 d-flex justify-content-center align-items-center'>
      <div className='col-xl-3'>
        <div className='card rounded-3 text-black'>
          <div className='card-body py-md-4 mx-md-4'>
            <div className='text-center'>
              <img
                src='your_logo_url_here'
                alt='Logo'
                style={{ width: '185px' }}
              />
            </div>
            <Form onSubmit={login}>
              <Form.Group className='mb-3' controlId='email'>
                <Form.Label><small>Email Address</small></Form.Label>
                <Form.Control type='email' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group className='mb-3' controlId='password'>
                <Form.Label><small>Password</small></Form.Label>
                <Form.Control type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <div className='loginMessage mb-3'>{message}</div>
              <Button className='gradient-btn mb-3 w-100' type='submit' disabled={isLoading}>
                {isLoading ? 'Logging In...' : 'Login'}
              </Button>
              <div>
                <Link to='/password/reset' className='text-decoration-none fs-10'>Forgot password?</Link><br />
                <span className="text-decoration-none fs-10">
                  Don't have an account? <Link to="/signup" className="text-decoration-none fs-10">Signup</Link>
                </span>
                <button onClick={openSignup}>Create an account</button>
                <Signup show={showSignup} onHide={closeSignup} />
              </div>
            </Form>
          </div >
        </div >
      </div >
      <Outlet />
    </section >
  );
};

export default Login;
