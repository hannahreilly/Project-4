
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


// class PetProfile extends Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         name: '',
//         img: '',
//         age: '',
//         breed: '',
//         location:''
//       }
//     }
    
// render () {         
//   return(

//    <div className="dog-card-container"> 
//       <div className="dog-card" onClick={() => props.handlePetGoBack(props.pet)}>
//           <img className="dog-card-img" src={img} alt={name} title={name}/>
//           <h2><b>Name : </b>{name} </h2>
//           <p><b>Age : </b>{age} </p>
//           <p><b>Breed : </b> {breed}</p>
//           <p><b>Location : </b> {location}</p>

//         <div className="clear"></div>
//      </div> 
//      <div>
//         {props.pet.adoption ? 
//         `Im Adopted by ${props.pet.adoption.user.name}` : 
//         <button onClick={() => props.adoptDog(props.pet)}>
//           Adopt Me!
//         </button>}
//       </div> 
//    </div>
// )
// }
// }


