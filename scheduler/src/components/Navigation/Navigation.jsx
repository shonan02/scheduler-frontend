import './Navigation.css';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import routes from "../../routes";
import Hamburger from './Hamburger';

const Navigation = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [isLoggedIn, setIsLoggedin] = useState(false);

    const handleNavbar = () => {
        setShowNavbar(!showNavbar);
    }

    const checkToken = () => {
      const userToken = localStorage.getItem("user-token");

      if(!userToken || userToken === undefined) {
        setIsLoggedin(false);
      }

      setIsLoggedin(true);
    }

    useEffect(() => {
      checkToken();
    }, []);

    
    return (
        <nav className="navbar">
      <div className="container">
        <div className="logo">
          {/* <Brand /> */}
        </div>
        <div className="menu-icon" onClick={handleNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          { !isLoggedIn ? (
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Log in</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
    )
}

export default Navigation;