import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/layout/Layout';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Login from './components/login/Login';
import PrivateRoutes from './utils/privateroutes/PrivateRoutes';
import Dashboard from './components/dashboard/Dashboard';
import ClientSignup from './components/clientsignup/ClientSignup';
import FreelancerSignup from './components/freelancersignup/FreelancerSignup';
import Signup from './components/signup/Signup';

function App() {

  const HandleLogout = () => { 
  localStorage.removeItem('token');
  };

  return (
    <div className="App">
        <Routes> 
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='services' element={<Services/>}/>           
          </Route>

          <Route path='/login' element={<Login/>}/>

          <Route path='/signup' element={<Signup/>}/>

          <Route path='/ClientSignup' element={<ClientSignup/>}/>

          <Route path='/FreelancerSignup' element={<FreelancerSignup/>}/>

          <Route path="/dashboard/*" element={<PrivateRoutes />}>
            <Route index element={<Dashboard handleLogout={HandleLogout} />} />      
          </Route>

        </Routes>
    </div>
  );
}

export default App;
