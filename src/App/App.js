import React, { Component } from 'react';
import './App.css';
import { Reservations } from '../Reservations/Reservations'
import {Form} from '../Form/Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ''
    }
  }

  checkForError = (response) => {
    if (!response.ok) {
      throw new Error(response.message);
    } else {
      return response.json();
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(res => this.checkForError(res))
    .then(data => this.setState({reservations: data}))
  }

  createRes = (resObj) => {
    if (!isNaN(resObj.number)) {
      console.log('hello')
      this.setState({reservations: [...this.state.reservations, resObj]})
    } else {
      this.setState({...this.state, error: 'Need a number for guests'})
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        {this.state.error && <p className="error">{this.state.error}</p>}
        <Form createRes={this.createRes}></Form>
        <Reservations resys={this.state.reservations}>
        </Reservations>
      </div>
    )
  }
}

export default App;
