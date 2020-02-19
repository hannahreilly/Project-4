import React, { Component } from 'react';


export default class UpdatePetProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      location: "",
      breed: "",
      age: ""
    }
  }

  setFormData = () => {
    if (this.props.dogs.length) {
      console.log(this.props.dogs);
      const { title } = this.props.dogs.find(dog => {
        return parseInt(dog.id) === parseInt(this.props.dogId)
      })
      this.setState({ title })
    }
  }

  componentDidMount() {
    this.setFormData();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.dogs !== this.props.dogs) {
      this.setFormData();
    }
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.updateDog(this.props.dogId, this.state)
      }}>
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
        <button>Submit</button>
      </form>
    )
  }
}
