import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import routes from '../../routes';
import loginService from "../../services/login";
import { loginUser } from "../../reducers/userReducer";

const Login = () => {
    const emptyUser = {
        username: '',
        password: ''
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [user, setUser] = useState(emptyUser);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // const res = await loginService.login(user);
            dispatch(loginUser(user));

            //Reset fields
            setUser(emptyUser);

            navigate("/profile");

        } catch (err) {
            setError("Incorrect username and password combination.");
            setTimeout(() => {
                setError(null);
            }, 5000);
        }
    }

    return (
        <div className="wrapper">

        <div className="form-container">
                <h1>Log In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        username <input 
                            type="text"
                            value={user.username}
                            onChange={({target}) => 
                                setUser({
                                    ...user,
                                    username: target.value
                            })}/>
                    </div>
                    <div className="input-group">
                        password <input 
                            type="text"
                            value={user.password}
                            onChange={({target}) => 
                                setUser({
                                    ...user,
                                    password: target.value
                                })}/>
                    </div>
                    <div className="error">
                        {error &&
                        <span>{error}</span>}
                    </div>
                    <div className="submit">
                        <button type="submit">Log In</button>
                    </div>
                </form>
                <div className="form-link">
                    <Link to={routes.register}>Already have an account?</Link>
                </div>
            </div>
        </div>
        
    )
}

export default Login;