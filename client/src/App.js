import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Login from './components/login/Login';
import PrivateRoutes from './utils/privateroutes/PrivateRoutes';
import Dashboard from './components/dashboard/Dashboard';
import Signup from './components/signup/Signup';
function App() {

  const HandleLogout = () => { 
  localStorage.removeItem('token');
  };

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

          <Route path="/dashboard/*" element={<PrivateRoutes />}>
            <Route index element={<Dashboard handleLogout={HandleLogout} />} />      
          </Route>

        </Routes>
    </div>
  );
}

export default App;
