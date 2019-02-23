import React, { Component } from 'react';

import Welcome from './Welcome';

class App extends Component {

  state = {
    players : [
      { id: "0001", name: "Tyler", character: "merlin" },
      { id: "0002", name: "Anna", character: "morgana" },
      { id: "0003", name: "David", character: "percival" },
      { id: "0004", name: "Cameron", character: "good1" },
      { id: "0005", name: "Alani", character: "assassin" }
    ]
  }

  render() {
    return (
      <div className="root">
        <Welcome players={this.state.players}/>
      </div>
    );
  }
}

export default App;
