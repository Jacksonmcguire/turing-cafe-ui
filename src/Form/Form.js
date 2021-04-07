import './Form.css';
import React, { Component } from 'react';

export class Form extends Component {
  constructor({createRes}) {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: null
    }
  }

  handleChange(input) {
    console.log(input.value)
    const prop = input.classList[0]
    this.setState({...this.state, [prop]: input.value})
  }

  handleSubmit = (e) => {
    this.setState({...this.state, number: Number(this.state.number)})
    e.preventDefault()
    this.props.createRes(this.state)
  }

  render() {
    return (<form
    onChange={(e) => this.handleChange(e.target)}
    onSubmit={this.handleSubmit}>
      <input className="name" placeholder="Name" required></input>
      <input className="date" placeholder="Date (mm/dd)" required></input>
      <input className= "time" placeholder="Time (7:00)" required></input>
      <input className="number" placeholder="Number of Guests" required></input>
      <button type="submit">Make Reservation</button> 
    </form>)
  }
}