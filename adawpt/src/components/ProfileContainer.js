import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { indexDogs, postDogs, putDogs, verifyUser } from '../services/api_helper';
import TodoList from './TodoList';
import SingleTodo from './SingleTodo';
import CreateTodoForm from './CreateTodoForm';
import UpdateTodoForm from './UpdateTodoForm';

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
    const dogs = await indexdogs();
    this.setState({ dogs });
  }

  //CREATE THE Dog
  createDog = async (todoData) => {
    console.log(todoData);
    const newDog = await postTodo(todoData);
    this.setState({
      dogs: [...this.state.dogs, newDog]
    })
    this.props.history.push("/dogs");
  }

  // UPDATE THE Dog
  updateDog = async (id, dogsData) => {
    const updatedDog = await putTodo(id, dogsData);
    const changedDogs = this.state.dogs.map(dog => parseInt(dog.id) === parseInt(id) ? updatedDogs : dog);
    console.log(changedDogs);
    this.setState({ dogs: changedDogs });
    this.props.history.push("/dogs");
  }

  render() {
    return (
      <div>
        <Route exact path="/dogs" render={() => (
          <TodoList
            dogs={this.state.dogs}
          />
        )} />
        <Route exact path="/dogs/:id" render={(props) => (
          <SingleTodo
            todoId={props.match.params.id}
            dogs={this.state.dogs}
          />
        )} />
        <Route path="/dogs/new" render={() => (
          <CreateTodoForm
            createDog={this.createDog}
          />
        )} />
        <Route path="/dogs/:id/edit" render={(props) => (
          <UpdateTodoForm
            dogs={this.state.dogs}
            updateDog={this.updateDog}
            todoId={props.match.params.id}
          />
        )} />
      </div>
    )
  }
}

export default withRouter(DogsContainer);