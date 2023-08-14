import './App.css';
import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import Layout from './layout/Layout';
=======
import Layout from './layouts/layout/Layout';
>>>>>>> 086af5dfbcc415d5c7508f787da1dfc9eb21e659
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Login from './components/login/Login';
import PrivateRoutes from './utils/privateroutes/PrivateRoutes';
import Dashboard from './components/dashboard/Dashboard';
<<<<<<< HEAD
=======
import ClientSignup from './components/clientsignup/ClientSignup';
import FreelancerSignup from './components/freelancersignup/FreelancerSignup';
>>>>>>> 086af5dfbcc415d5c7508f787da1dfc9eb21e659
import Signup from './components/signup/Signup';
function App() {

  const HandleLogout = () => { 
  localStorage.removeItem('token');
  };

<<<<<<< HEAD
  // const USER_TYPES = {
  //   TASK_GIVER: false,
  //   TASK__DOER: false
  // };

  // const handleCurrentUser = () => {
  //   if(USER_TYPES.TASK_GIVER === true){
  //     return <>Nothing</>
  //   }
  // }

  // const SignupShow = () => {
  //   setOpenSignup(true);
  // }

=======
>>>>>>> 086af5dfbcc415d5c7508f787da1dfc9eb21e659
  return (
    <div className="App">
        <Routes> 
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
<<<<<<< HEAD
            <Route path='services' element={<Services/>}/>
=======
            <Route path='services' element={<Services/>}/>           
>>>>>>> 086af5dfbcc415d5c7508f787da1dfc9eb21e659
          </Route>

          <Route path='/login' element={<Login/>}/>

          <Route path='/signup' element={<Signup/>}/>

<<<<<<< HEAD
=======
          <Route path='/ClientSignup' element={<ClientSignup/>}/>

          <Route path='/FreelancerSignup' element={<FreelancerSignup/>}/>

>>>>>>> 086af5dfbcc415d5c7508f787da1dfc9eb21e659
          <Route path="/dashboard/*" element={<PrivateRoutes />}>
            <Route index element={<Dashboard handleLogout={HandleLogout} />} />      
          </Route>

        </Routes>
    </div>
  );
}

export default App;
