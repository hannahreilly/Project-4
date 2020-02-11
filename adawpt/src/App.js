import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import {loginUser, registerUser, verifyUser} from './services/api-helper';
import LoginForm from './components/Login';
import RegisterForm from './components/Register';
import Header from './components/Header';
import Feed from './components/Feed';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null,
      errorText:""
    }
  }

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    if(!loginData.username || !loginData.password) {
      this.setState({
        errorText:"You must supply a username AND password"
      })
    } else {
    // console.log("help me");
    const currentUser = await loginUser(loginData);
    this.setState({currentUser});
    }
  }

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    if(!registerData.username || !registerData.password) {
      this.setState({
        errorText: "You must supply a username AND password ya jerk!"
      })
    } else {
    const currentUser = await registerUser(registerData);
    this.setState({
      currentUser,
      errorText:""
    })
  }
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({
        currentUser
      })
    }
  }

  handleLogout = () => {
    this.setState ({
      currentUser: null
    })
    localStorage.removeItem('authToken');
  }

  componentDidMount() {
    this.handleVerify();
  }

    render() {
    return (
      <div className="App">
        <Header />
        <nav>
        <Route path = "/profile"/>

        {this.state.errorText && <p className= "error"> {this.state.errorText} </p>}
        <Route path = "/login" render = {() => (
        <LoginForm handleLogin={this.handleLogin} />
        )} />
        <Route path = "/register" render={() => (
        <RegisterForm handleRegister = {this.handleRegister}/>
        )} />
        <Feed />
        </nav>
      </div>
    );
  }
}

export default App;
