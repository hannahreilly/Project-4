import React, {Component} from 'react';



export default class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
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
            <div className="register">
            <form onSubmit={(e) => this.props.handleRegister(e, this.state)}>
                <h2>Register!</h2>
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
            </div>
        )
    }
}