import React, { Component } from 'react'


class Profile extends Component {

 state = {
    isEditFormOn: false,
    name: "",
    username: "",
    location: "", 
    
 }

  handleEditButton = ()=>{
    this.setState({
      isEditFormOn: !this.state.isEditFormOn,
      name: this.props.user.name,
      username: this.props.user.username,
      location: this.props.user.location, 
      
    })
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/users/${this.props.user.id}`, {
      method: 'PATCH',
      headers: {
        "Authorization": localStorage.token,
        "Content-Type": "application/json",
        "Accept": "application/json"
      }, 
      body: JSON.stringify({
        name: this.state.name,
        username: this.state.username,
        location: this.state.location,
      })

    })
    .then(res => res.json())
    .then(() => {
      this.setState({
           isEditFormOn: false
        }, this.props.fetchUser())
      }
    )
      
  }


  handleDelete = ()=>{
    fetch(`http://localhost:3000/users/${this.props.user.id}`,{
      method: "DELETE"
    })
    .then(
      this.props.logOut()
    )
  }
  
  editForm =  ()=>{
   return (<form onChange={this.handleOnChange}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={this.state.name}/>
  
        <label htmlFor="username" >Username:</label>
        <input type="text" id="username" name="username" value={this.state.username}/>
  
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" value={this.state.location}/>
    
        <input type="submit" onClick={(event) => this.handleOnSubmit(event)}/>
    </form>)
  }

  profile = ()=>{
    return (<div className="profile-div">
         <div className="profile-info">
          <h2>
            {this.props.currentUser.name}
          </h2>
          <p> 
            <b className="bold">Location:</b> 
            {this.props.currentUser.location}
          </p>
          <p> 
            <b className="bold">Username:</b> 
            {this.props.currentUser.username}
          </p>
          <button onClick={this.handleEditButton} className="profile-edit-button">
            { this.state.isEditFormOn?
              "Profile" : "Edit me"
            }

         </button>
          </div>
      </div>)
  }
 
 render() {
  if (localStorage.name){
    return(
      <div className="profile-item">
        <p>hello</p>
     
      <div className="name">
      <h4>{this.props.name}</h4>
      </div>

      <div className="location">
      <h4>{this.props.location}</h4>
      </div>

      </div>
      )
  }
 }
}

export default Profile;