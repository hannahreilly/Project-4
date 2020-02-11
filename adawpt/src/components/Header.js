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
              {/* <h3>Reasons for Choosing US</h3>
	        
	            <button>READ MORE</button> */}
            
            <nav>
          {this.props.currentUser ?
            <div className="header-links-container">

              {this.props.currentUser.id &&
              <Link onClick={this.handleProfileClick}>Profile</Link>
              }
              <Link to="/" onClick={this.props.handleLogout}>Logout</Link>
            </div>
            :
            <div className="header-links-container">
              <button><Link to="/login">Login</Link></button>
              <button><Link to="/register">Sign Up</Link></button>
              <button><Link to="/feed">Feed</Link></button>
              <button><Link to ="/profile">Profile</Link></button>
            </div>
          }
          </nav>
        </div>
        </div>
        
        </header>
      
    )
  }
}

export default withRouter(Header);