import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PetProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDog: null
    }
  }

  setcurrentDog = () => {
    const currentDog = this.props.dogs.find(dog => dog.id === parseInt(this.props.dogId));
    this.setState({ currentDog })
  }

  componentDidMount() {
    this.setcurrentDog();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.dogId !== this.props.dogId) {
      this.setcurrentDog();
    }
  }

  render() {
    return (
      <div>
        {this.state.currentDog && (
          <>
            <h1>{this.state.currentDog.title}</h1>
            <Link to={`/dogs/${this.state.currentDog.id}/edit`}><button>Edit</button></Link>
          </>
        )}
      </div>
    )
  }
}


