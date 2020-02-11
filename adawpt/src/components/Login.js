// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Typewriter from 'typewriter-effect'

// export default class LoginForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: '',
//       password: '',
//     }
//   }


//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value
//     })
//   }

//   render() {
//     return (
//       <div>
//         {this.props.currentUser ?
//           <div className="restrict">
//             <h1>You are already logged in. Go to <a href="/feed">feed.</a></h1>
//           </div>
//           :
//           <div className="auth">
//             <form onSubmit={(e) => this.props.handleLogin(e, { username: this.state.username, password: this.state.password })}>
//               <h2>Continue
//           <div className='typewriter'>
//                   <Typewriter
//                     options={{
//                       strings: ['Resolving', 'Saving', 'Eating Healthy', 'Jogging', 'Cooking More'],
//                       autoStart: true,
//                       loop: true,
//                     }}
//                   />
//                 </div>
//               </h2>
//               {this.props.errorText && <p className="error-text">{this.props.errorText}</p>}
//               <span className="field">
//                 <label htmlFor="username">Username</label>
//                 <input
//                   type="text"
//                   name="username"
//                   value={this.state.username}
//                   onChange={this.handleChange}
//                   autoComplete="off"
//                   autoFocus={true}
//                   autoCorrect="off"
//                   spellCheck="false"
//                 />
//               </span>
//               <span className="field">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={this.state.password}
//                   onChange={this.handleChange}
//                 />
//               </span>
//               <input type="submit" className="submit" value="Login" />
//             </form>
//             <div className="header-buttons-container redirect">
//               <Link to="/register">New to Resolve?</Link>
//             </div>
//           </div>
//         }
//       </div>
//     )
//   }
// }