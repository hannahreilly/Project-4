import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';


// import Footer from '../components/Footer';



export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      first_name: '',
      last_name: '',
      profile_pic_url: '',
      errorText: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <div className="card-container">
          <h3>Profile</h3>
                <div className="card">
                  <CardMedia
                    className="cardMedia"
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  </div>
                  <div className="cardContent">
                      <div className="profile-details">
                      <label htmlFor="name">name</label>
                          <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                          />
                          <label htmlFor="location">Location</label>
                            <input
                            type="text"
                            name="location"
                            value={this.state.location}
                            onChange={this.handleChange}
                          />
                        <label htmlFor="profile_pic_url">Profile Picture URL</label>
                          <input
                            type="text"
                            name="profile_pic_url"
                            value={this.state.profile_pic_url}
                            onChange={this.handleChange}
                          />
                <input type="submit" className="submit" value="Upload" />
                </div>
                  </div>
    
                    <Button size="small">
                      Edit
                    </Button>
                    <Button size="small">
                      View
                    </Button>
                    {/* <Footer />  */}
                    </div>
   )}
}
        
        
