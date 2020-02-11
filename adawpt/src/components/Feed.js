import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: false,
      apiDataLoaded: false,
      search: null,
      filteredUsers: []
    }
  }

  handleAdd = async (e, sentGoal) => {
    e.preventDefault();
    const goal = {
      name: sentGoal.name,
      plan: sentGoal.plan,
      motivation: sentGoal.motivation,
      user_id: this.props.currentUser.id
    }
  }

  componentDidMount = async () => {
    try {
      const userResponse = await axios(`https://localhost:3000`);
      this.setState({
        users: userResponse.data,
        apiDataLoaded: true
      })
    } catch (e) {
      console.error(e)
    }
  }

  handleSearchChange = async (e) => {
    const { value } = e.target;
    await this.setState({
      search: value
    })
    this.filterUsers()
  }

  filterUsers = () => {
    let filteredUsers = this.state.users.filter(user =>
      user.first_name.toLowerCase().startsWith(this.state.search.toLowerCase())
    )
    this.setState({
      filteredUsers
    })
  }

  addDefaultSrc(ev) {
    ev.target.src = 'http://www.racemph.com/wp-content/uploads/2016/09/profile-image-placeholder.png'
  }

  render() {
    const linkStyle = {
      textDecoration: "none",
    }

    return (
      <div>
          <div>
            <div className="feedpage-wrapper">
              <div className="feedpage-content">
                {this.state.apiDataLoaded && this.state.search &&
                  this.state.filteredUsers.map(user => (
                    <Link style={linkStyle} to={`/profile/${user.id}`} key={user.id}>
                      <div key={user.id} className="users">
                        <h4>{user.first_name}</h4>
                        <img onError={this.addDefaultSrc} src={user.profile_pic_url} alt="user" />
                      </div>
                    </Link>
                  ))
                }
                {this.state.apiDataLoaded && !this.state.search &&
                  this.state.users.map(user => (
                    <Link style={linkStyle} to={`/profile/${user.id}`} key={user.id}>
                      <div key={user.id} className="users">
                        <h4>{user.first_name}</h4>
                        <img onError={this.addDefaultSrc} src={user.profile_pic_url} alt="user" />
                      </div>
                    </Link>
                  ))}
              </div>
            </div >
          </div>
        
      </div>
    )
  }
}

export default Feed