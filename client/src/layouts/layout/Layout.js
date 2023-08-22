import LandingNavbar from '../navbar/Navbar';
import Content from '../content/Content';
import Footer from '../footer/Footer';

const Layout = () => {

    const LogOut = () => { 
        localStorage.removeItem('token');
    };
      

    return (
        <div className="Layout">
            <LandingNavbar logout={LogOut}/>
            <Content/>
            <Footer/>
        </div>
    )
}
export default Layout;