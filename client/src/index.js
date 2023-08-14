import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
<<<<<<< HEAD
import './fonts/Poppins-Medium.ttf'
=======
import './assets/fonts/Poppins-Medium.ttf'
>>>>>>> 086af5dfbcc415d5c7508f787da1dfc9eb21e659

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);