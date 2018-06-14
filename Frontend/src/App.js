import React, { Component } from 'react';
import axios from 'axios';
import PresidentView from './components/PresidentView';
import GetPresidentsUi from './components/GetPresidentsUi';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
       presidents: [],
       retrievedPresidents: false
    }
    this.getPresidents = this.getPresidents.bind(this);
  }

  getPresidents(order = '') {
    axios.get(`https://simonapi.azurewebsites.net/api/President/${order}`)
    .then(listOfPresidents => {
      this.setState({presidents: listOfPresidents.data})
    })
  }

  render() {
    return (
      <div>
        <h1>Presidents' Day</h1>
        <GetPresidentsUi buttonHandler={this.getPresidents} />
        <PresidentView presidents ={this.state.presidents} />
      </div>
    )
  }
}
