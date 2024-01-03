import './Navigation.css';
import {Link} from 'react-router-dom';

const Navigation = () => {
    
    return (
        <nav className='navbar'>
            <div className='nav-container'>
                <div className='nav-logo'>
                    {/* branding */}
                </div>
                <div className='nav-elements'>
                    <ul>
                        <li>
                            {/* <Link to="/">Home</Link> */}
                        </li>
                        <li>Log in</li>
                        <li>Register</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;