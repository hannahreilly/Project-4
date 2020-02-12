import React from 'react';

class Adoption extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        img: '',
        name: '',
        age: '',
        filteredUsers:''
      }
    }
    
render () {
    return (
        <div>
            <div className = "adoption-content">
                <div className = "adoption-img-wrapper">
                    <img className="adoption-img"src = {img}/>
                </div>
            <h4> <span>Pet Name: </span> {name} </h4>
            <h4> <span>Pet Breed: </span> {breed} </h4>
            <h4> <span>Pet Age: </span> {age} </h4>
            </div>
        </div>
    )
}
}

export default Adoption;