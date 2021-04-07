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
    .catch(err => alert(err.message))
  }

  createRes = (resObj) => {
    if (!isNaN(resObj.number)) {
      this.setState({reservations: [...this.state.reservations, resObj]})
      this.postRes(resObj);
    } else {
      this.setState({...this.state, error: 'Need a number for guests'})
    }
  }

  postRes = (obj) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(obj)
    })
    .then(res => this.checkForError(res))
    .catch(err => alert(err.message))
  }

  cancelRes = (id) => {
    const reservations = this.state.reservations
    const resIndex = reservations.findIndex(res => res.id === id)
    reservations.splice(resIndex, 1)
    this.setState({...this.state, reservations: reservations})
    fetch('http://localhost:3001/api/v1/reservations/' + id, {
      method: 'DELETE',
      headers: {'Content-type': 'application/json'}
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        {this.state.error && <p className="error">{this.state.error}</p>}
        <Form createRes={this.createRes}></Form>
        <Reservations resys={this.state.reservations} cancelRes={this.cancelRes}>
        </Reservations>
      </div>
    )
  }
}

export default App;
