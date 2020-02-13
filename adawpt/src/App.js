import React, {Component} from 'react';
import {Route, withRouter } from 'react-router-dom';
import './App.css';
import {loginUser, registerUser, verifyUser, loadDogs} from './services/api-helper';
import LoginForm from './components/Login';
import RegisterForm from './components/Register';
import Header from './components/Header';
import Feed from './components/Feed';
import Profile from './components/Profile';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null,
      errorText:""
    }
  }

  handleDogs = async(e, dogData) => {
    e.preventDefault();
    const currentUser = await loadDogs(dogData);
    this.setState({currentUser})
  }

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    if(!loginData.email || !loginData.password) {
      this.setState({
        errorText:"You must supply a email AND password"
      })
    } else {
    const currentUser = await loginUser(loginData);
    this.setState({currentUser});
    }
  }

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    if(!registerData.username || !registerData.password) {
      this.setState({
        errorText: "You must supply a username AND password please"
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
      <Route path="/login" render={() => (
        <LoginForm
          handleLogin={this.handleLogin}
        />
      )} />
      <Route path="/register" render={() => (
        <RegisterForm
          handleRegister={this.handleRegister}
          errorText={this.state.errorText}
        />
      )}/>
      <Route path="/profile" render={() => (
        <Profile />
      )} />
      <Route path="/feed" render={() => (
        <div>
          <Feed currentUser={this.state.currentUser} />
        </div>
      )} />
        {this.state.apiDataLoaded &&
          <Route exact path="/profile/:id" render={(props) => (
            <Profile
              users={this.state.users}
              userId={props.match.params.id}
              currentUser={this.state.currentUser}
            />
          )} />
        }
    </div>
  );
}
}

export default withRouter(App);
