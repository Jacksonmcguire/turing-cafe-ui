import React, { Component } from 'react';
import './App.css';
import { Reservations } from '../Reservations/Reservations'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <Reservations resys={this.state.reservations} className='resy-container'>
        </Reservations>
      </div>
    )
  }
}

export default App;
