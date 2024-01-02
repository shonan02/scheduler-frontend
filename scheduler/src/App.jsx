import './App.css'
import FacebookLoginButton from './components/FacebookLoginButton'

function App() {
  const onLogin = (accessToken) => {
    console.log(`Access token: ${accessToken}`);
  }
  
  return (
    <>
    <h1>FAcebook login</h1>
    <FacebookLoginButton onLogin={onLogin} />
    </>
  )
}

export default App
