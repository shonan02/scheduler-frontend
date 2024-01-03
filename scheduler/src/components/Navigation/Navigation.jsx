import './Navigation.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import routes from "../../routes";
import Hamburger from './Hamburger';

const Navigation = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleNavbar = () => {
        setShowNavbar(!showNavbar);
    }

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
        </div>
      </div>
    </nav>
    )
}

export default Navigation;