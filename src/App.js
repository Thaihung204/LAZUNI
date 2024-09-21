
import './App.css';
import { EnterOtp } from './pages/EnterOtp';
import { ForgetPassword } from './pages/ForgetPassword';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import { Header } from './components/Authenfication/Header';
import { Footer } from './components/Authenfication/Footer';
import { HomePage } from './pages/HomePage';
import { Profile } from './pages/Profile';
function App() {
  return (
<>
<BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<Signup />} />
                <Route path="/forgetPassword" element={<ForgetPassword />} />
                <Route path='/' element={<HomePage/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/enterOtp' element={<EnterOtp/>}/>
                {/* Other routes can be added here */}
            </Routes>
        </BrowserRouter>

</>
  )
}

export default App;
