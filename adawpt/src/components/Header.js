import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class Header extends React.Component {

  constructor(props) {
    super(props)
  }

  handleClick = (e) => {
    e.preventDefault();
    if (this.props.currentUser) {
      this.props.history.push('/feed')
    } else {
      this.props.history.push('/')
    }
  }

  handleProfileClick = () => {
    this.props.history.push(`/myprofile`)
  }

  render() {
    return (
      <header>
        
        <div className="header-container">
   
	        <div class="overlay">
            <h1> Adopt Today
            </h1>
            <h3>Reasons for Choosing US</h3>
	        
	        <button>READ MORE</button>
            </div>

          {this.props.currentUser ?
            <div className="header-buttons-container">
              <Link to="/feed">Feed</Link>
              {this.props.currentUser.id &&
                <Link onClick={this.handleProfileClick}>Profile</Link>
              }
              <Link to="/" onClick={this.props.handleLogout}>Logout</Link>
            </div>
            :
            <div className="header-buttons-container">
              <Link to="/login">Login</Link>
              <Link to="/register">Sign Up</Link>
            </div>
          }
        </div>
        
        </header>
      
    )
  }
}

export default withRouter(Header)