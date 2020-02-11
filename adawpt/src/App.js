import React from 'react';
import './App.css';
import LoginForm from './components/Login';
import RegisterForm from './components/Register';
import Header from './components/Header'
// import axios from 'axios';
// import { Route, withRouter } from 'react-router-dom'
import { loginUser, registerUser, verifyUser } from './services/api-helper'
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
      <Header />
      <LoginForm />
      <RegisterForm />
      <Profile />
    </div>
  );
}

export default App;
