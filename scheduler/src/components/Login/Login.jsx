
const Login = () => {
    const handleSubmit = () => {

    }

    return (
        <div className="form-container">
            <div>
                <h1>Log In</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        username <input />
                    </div>
                    <div>
                        email <input />
                    </div>
                    <div>
                        <button type="submit">Log In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;