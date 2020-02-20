import React, { Component } from 'react';

export default class CreateDog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      name: "",
      location: "",
      age: "",
      breed: "",
      img: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.createDog(this.state)
      }}>
        <h3> Want to Sell a Dog?</h3>
        <div className = "new-dog">
        
        <img id="dogImageForm" src={this.state.img} />
        <label htmlFor="location">Image</label>
        <input
          type="text"
          name="img"
          value={this.state.img}
          onChange={this.handleChange}
        />
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
        <label htmlFor="breed">Breed</label>
          <input
          type="text"
          name="breed"
          value={this.state.breed}
          onChange={this.handleChange}
        />
        <label htmlFor="age">Age</label>
          <input
          type="text"
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
        />

        </div>
        <button>Submit</button>
      </form>
    )
  }
}
