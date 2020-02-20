import React, { Component } from 'react';


export default class Adoption extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      breed: "",
      age: ""
    }
  }


  render() {
    return (
        <form>
            <div>Hi</div>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}