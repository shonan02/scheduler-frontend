import './Register.css';
import registerService from "../../services/register";
import routes from "../../routes";

import { useState } from 'react';
import { validateUsername, validateEmail, validatePassword } from '../../utils/validationUtils';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const emptyUser = {
        username: '',
        email: '',
        password: '',
        password2: ''
    }

    const [user, setUser] = useState(emptyUser);
    const [errors, setErrors] = useState({});

    const [showErrors, setShowErrors] = useState(false);
    const navigate = useNavigate();

    const validateField = async (fieldName, value) => {
        const newErrors = { ...errors };

        switch (fieldName) {
            case 'username':
                if (!validateUsername(value)) {
                    newErrors.username = 'Username must be between 4 and 30 characters.';
                } else {
                    delete newErrors.username; // Clear the error if valid
                }
                break;

            case 'email':
                if (!validateEmail(value)) {
                    newErrors.email = 'Invalid email format.';
                } else {
                    delete newErrors.email; // Clear the error if valid
                }
                break;

            case 'password':
                if (!validatePassword(value)) {
                    newErrors.password = 'Password must be between 7 and 30 characters and contain at least one lowercase letter, one uppercase letter, one number, and one special character.';
                } else {
                    delete newErrors.password; // Clear the error if valid
                }
                break;

            case 'password2':
                if (user.password !== value) {
                    newErrors.password2 = 'Passwords do not match.';
                } else {
                    delete newErrors.password2; // Clear the error if valid
                }
                break;

            default:
                break;
        }

        setErrors(newErrors);
    };

    const handleChange = (fieldName, value) => {
        setUser({
            ...user,
            [fieldName]: value
        });

        // Validate the field when it changes
        validateField(fieldName, value);
    };

    const validateForm = async () => {
        const newErrors = {};

        // Validate each field
        await Promise.all([
            validateField('username', user.username),
            validateField('email', user.email),
            validateField('password', user.password),
            validateField('password2', user.password2),
        ]);

        //Check any errors
        Object.keys(errors).forEach(field => {
            if(errors[field]){
                newErrors[field] = errors[field];
            }
        });

        const isValid = Object.keys(newErrors).length === 0;
        setErrors(newErrors);
        setShowErrors(true);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        //Validate form
        const isValid = await validateForm();

        if(isValid) {
            //Invoke register service to query the db API
            try {
                const res = await registerService.register({
                    username: user.username,
                    email: user.email,
                    password: user.password
                });

                //If successful register, navigate to login page
                navigate("/login");

            } catch(err) {
                console.log(err);
            }
            //Reset user fields
            setUser(emptyUser);
            console.log(user);
        }
    }


    return (
        <div className='wrapper'>
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        username <input 
                            type='text'
                            value={user.username}
                            onChange={({target}) => handleChange(
                                'username',
                                target.value
                            )}/>
                            {errors.username && <span className='error'>{errors.username}</span>}
                    </div>

                    <div className="input-group">
                        email <input
                            type='text'
                            value={user.email}
                            onChange={({target}) => handleChange(
                                'email',
                                target.value
                            )} />
                            {errors.email && <span className='error'>{errors.email}</span>}
                    </div>

                    <div className="input-group double">
                        password <input 
                            type='password'
                            value={user.password}
                            onChange={({target}) => handleChange(
                                'password',
                                target.value
                            )}/>
                        {errors.password && <span className='error'>{errors.password}</span>}
                    </div>

                    <div className="input-group">
                        confirm password <input 
                            type='password'
                            value={user.password2}
                            onChange={({target}) => handleChange(
                                'password2',
                                target.value
                            )}/>
                        {errors.password2 && <span className='error'>{errors.password2}</span>}
                    </div>
                    <div className='submit'>
                        <button type='submit'>Register</button>
                    </div>
                </form>
                <div className="form-link">
                    <Link to={routes.login}>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;
