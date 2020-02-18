import React, { Component } from 'react';

export default class CreateDog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
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
        this.props.CreateDog(this.state)
      }}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}