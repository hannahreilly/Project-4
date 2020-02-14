import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email:'',
            password:''
        }
    }

    handleChange = (e) => {
        const {name,value} = e.target;
        this.setState({
            [name]: value
        })
   }

    render() {
        return (
            <div className = "login">
            <form onSubmit={(e) => this.props.handleLogin(e, {email:this.state.email, password:this.state.password})}>
                <h2>Login!</h2>
                <label htmlFor= "email">email</label>
                <input
                    type = "text"
                    name = "email"
                    value = {this.state.email}
                    onChange = {this.handleChange}
                />
                <label htmlFor="password">Password</label>
                <input
                    type = "password"
                    name = "password"
                    value = {this.state.password}
                    onChange = {this.handleChange}
                />
                <input type="submit"/>
                         
            </form>
            <button> 
                    <Link to = "/register">Not Registered? </Link> 
                </button> 
            </div>
        )
    }
}