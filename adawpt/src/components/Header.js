import React from 'react';
import { Link, withRouter } from 'react-router-dom';


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
    this.props.history.push(`/profile`)
  }

  render() {
    return (
      <header>
        <link href="https://fonts.googleapis.com/css?family=Lemonada&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Lemonada|Poppins&display=swap" rel="stylesheet"></link>
        <div className="header-container">
   
	        <div className="overlay">
            <h1> Adopt </h1>
        
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
              <Link to="/login"><button>Login</button></Link>
              <Link to="/register"><button>Sign Up</button></Link>
              <Link to ="/profile"><button>Profile</button></Link> 
              <Link to ="/feed"><button>Feed</button></Link> 
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