import './App.css'
import FacebookLoginButton from './components/FacebookLoginButton'
import Navigation from './components/Navigation/Navigation';

function App() {
  const onLogin = (accessToken) => {
    console.log(`Access token: ${accessToken}`);
    alert("You are logged in successfully!");
  }
  
  return (
    <>
    <Navigation />
    <FacebookLoginButton onLogin={onLogin} />
    </>
  )
}

export default App
