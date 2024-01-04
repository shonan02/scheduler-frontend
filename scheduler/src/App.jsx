import './App.css'
import FacebookLoginButton from './components/FacebookLoginButton'
import Navigation from './components/Navigation/Navigation';
import Reigster from './components/Register/Register';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
  const onLogin = (accessToken) => {
    console.log(`Access token: ${accessToken}`);
    alert("You are logged in successfully!");
  }
  
  return (
    <>
    <Navigation />
    <div className='main-app'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Reigster />} />
        <Route path='/profile/*'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
      </Routes>
    </div>
    </>
  )
}

export default App
