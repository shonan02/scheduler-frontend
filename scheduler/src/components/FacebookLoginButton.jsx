const FacebookLoginButton = ({ onLogin }) => {
    const handleLogin = () => {
        //Initialise Facebook SDK
        window.FB.init({
            appId: '339992368896098',
            useCachedDialogs: false,
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v14.0'
        });

        //Trigger login dialogue
        window.FB.login(res => {
            if(res.authResponse) {
                //User is logged in and granted permissions
                onLogin(res.authResponse.accessToken);
                
            } else {
                //User cancelled login
            }
        }, { scope: 'public_profile,email'});
    }

    return (
        <>
        <button onClick={handleLogin}>
            Login with facebook
        </button>
        </>
    )
}

export default FacebookLoginButton;