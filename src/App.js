import React, { Component } from 'react';
import Field from './Field/Field';
import Table from './Table/Table'
import './App.scss';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      playerGameInfo: {
        id: 0,
        time: 0,
        moveCount: 0
      }
    }
  }

  getPlayerInfo = info => {
    this.setState({
      playerGameInfo: info
    })
  }

  render() {
    return (
      <div className="container">
        <Field
        getPlayerInfo = {this.getPlayerInfo}
        />
        <Table
        playerGameInfo = {this.state.playerGameInfo}
        />
      </div>
    )
  }
}

export default App;
