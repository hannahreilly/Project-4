import React, { Component } from 'react';

export default class UpdatePetProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    }
  }

  setFormData = () => {
    if (this.props.cards.length) {
      console.log(this.props.cards);
      const { title } = this.props.cards.find(card => {
        return parseInt(card.id) === parseInt(this.props.cardId)
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
    if (prevProps.cards !== this.props.cards) {
      this.setFormData();
    }
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.updatecard(this.props.cardId, this.state)
      }}>
        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}
