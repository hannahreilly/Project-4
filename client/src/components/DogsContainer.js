import React, { Component } from 'react';
import { Route, withRouter, Link } from 'react-router-dom';
import { loadDogs, postDogs, putDogs, verifyUser } from '../services/api-helper';
// import DogList from './Feed';
import PetProfile from './Pet_Profile';
import CreateDog from './CreateDog';
import UpdatePetProfile from './updatePetProfile';
import Button from '@material-ui/core/Button';


class DogsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: []
    }
  }

  componentDidMount() {
    verifyUser();
    this.readAllDogs();
  }

  // READ ALL THE dogs
  readAllDogs = async () => {
    const dogs = await loadDogs();
    this.setState({ dogs });
  }

  //CREATE THE Dog
  createDog = async (dogData) => {
    console.log(dogData);
    const newDog = await postDogs(dogData);
    this.setState({
      dogs: [...this.state.dogs, newDog]
    })
    this.props.history.push("/dogs");
  }

  // UPDATE THE Dog
  updateDog = async (id, dogsData) => {
    const updatedDog = await putDogs(id, dogsData);
    const changedDogs = this.state.dogs.map(dog => parseInt(dog.id) === parseInt(id) ? updatedDog : dog);
    console.log(changedDogs);
    this.setState({ dogs: changedDogs });
    this.props.history.push("/dogs");
  }

  render() {
    return (
      <div>
        <Route exact path="/dogs/:id" render={(props) => (
          <PetProfile
            dogId={props.match.params.id}
            dogs={this.state.dogs}
          />
        )} />
        <Route exact path="/dogs/new" render={() => (
          <CreateDog
            createDog={this.createDog}
          />
        )} />

        {
          this.state.dogs.map(dog => (
            
            <div className = "DogContainer">
              <div className = "dog-details">
                <img src={dog.img} alt="dog pic"/> 
                <h2>Name: {dog.name}</h2>
                <h3>Breed: {dog.breed}</h3>
                <h3>Age: {dog.age}</h3>
                <h3>Location: {dog.location}</h3>
                
                    <Link to={`/dogs/${dog.id}/pet_profile`}>
                    <Button size="small">
                        View 
                    </Button>
                    </Link>

                    <Link to={`/dogs/${dog.id}/edit`}>
                      <Button size="small">
                          Edit
                      </Button>
                    </Link>
            
        <Route exact path="/dogs/:id/edit" render={(props) => (
          
          <UpdatePetProfile
            dogs={this.state.dogs}
            updateDog={this.updateDog}
            dogId={props.match.params.id}
          />
        
        )} />
                    
            </div>
            </div>
          ))
          
        }

      </div>
    )
  }
}

export default withRouter(DogsContainer);