import './Register.css';

const Register = () => {

    const handleSubmit = () => {

    }

    return (
        <div className="form-container">
            <div>
                <h1>Register</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        username <input />
                    </div>
                    <div className="input-group">
                        email <input />
                    </div>
                    <div className="input-group">
                        password <input />
                    </div>
                    <div>
                        confirm password <input />
                    </div>
                    <div>
                        <button type='submit'>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;