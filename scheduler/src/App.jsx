import './App.css'
import FacebookLoginButton from './components/FacebookLoginButton'
import Navigation from './components/Navigation/Navigation';
import Reigster from './components/Register/Register';

function App() {
  const onLogin = (accessToken) => {
    console.log(`Access token: ${accessToken}`);
    alert("You are logged in successfully!");
  }
  
  return (
    <>
    {/* <Navigation /> */}
    <FacebookLoginButton onLogin={onLogin} />
    <Reigster />
    
    </>
  )
}

export default App
