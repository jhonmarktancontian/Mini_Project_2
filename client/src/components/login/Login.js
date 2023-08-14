<<<<<<< HEAD
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import Signup from '../signup/Signup';
import './Login.css';
=======
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import './Login.module.css';
>>>>>>> 086af5dfbcc415d5c7508f787da1dfc9eb21e659

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
  const [showSignup, setShowSignup] = useState(false);
  
  const navigate = useNavigate();

  const openSignup = (e) => {
    e.preventDefault();
    setShowSignup(true); 
  }
  
  const closeSignup = () => setShowSignup(false);
=======

  const navigate = useNavigate();
>>>>>>> 086af5dfbcc415d5c7508f787da1dfc9eb21e659

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
<<<<<<< HEAD
=======
        console.log(data);
>>>>>>> 086af5dfbcc415d5c7508f787da1dfc9eb21e659
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
<<<<<<< HEAD
      <div className='col-xl-3'>
        <div className='card rounded-3 text-black'>
          <div className='card-body py-md-4 mx-md-4'>
            <div className='text-center'>
              <img
                src='your_logo_url_here'
                alt='Logo'
                style={{ width: '185px' }}
=======
      <div className='col-md-3'>
        <div className='text-black'>
          <div className='py-md-4 mx-md-4'>
            <div className='text-center mb-5'>
              <img
                src='your_logo_url_here'
                alt='Logo'
>>>>>>> 086af5dfbcc415d5c7508f787da1dfc9eb21e659
              />
            </div>
            <Form onSubmit={login}>
              <Form.Group className='mb-3' controlId='email'>
                <Form.Label><small>Email Address</small></Form.Label>
<<<<<<< HEAD
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
=======
                <Form.Control className='shadow-none' type='email' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group className='mb-4' controlId='password'>
                <Form.Label><small>Password</small></Form.Label>
                <Form.Control className='shadow-none' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <div className='loginMessage mb-3'>{message}</div>
              <Button className='gradient-btn mb-2 w-100' type='submit' disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Log in'}
              </Button>
              <div className='text-center mb-4'>
                <Link to='/password/reset' className='text-decoration-none fs-10'>Forgot password?</Link>
              </div>
              <div className='text-center mb-2'>
                <span className="text-decoration-none">
                  Don't have an account?
                  <Link to="/signup" className="text-decoration-none ms-2">Sign up</Link>
                </span>
              </div>


>>>>>>> 086af5dfbcc415d5c7508f787da1dfc9eb21e659
            </Form>
          </div >
        </div >
      </div >
<<<<<<< HEAD
      <Outlet />
=======

>>>>>>> 086af5dfbcc415d5c7508f787da1dfc9eb21e659
    </section >
  );
};

export default Login;
