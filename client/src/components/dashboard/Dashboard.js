import { useNavigate } from "react-router-dom";

const Dashboard = ({ handleLogout }) => {

    const navigate = useNavigate();

    const handleLogoutClick = () => {
        handleLogout();
        navigate('/login');
    }
   
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogoutClick}>Logout</button>   
        </div>        
    )
}

export default Dashboard;