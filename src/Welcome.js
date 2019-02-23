import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    const {players} = this.props;
    const playerList = players.map(player => {
      return (
        <div className="player" key={player.id}>
          <p>ID: { player.id }</p>
          <p>Name: { player.name }</p>
          <p>Character: { player.character }</p>
          <hr/>
        </div>
      )
    })
    return (
      <div className="welcome">
        <h1>Welcome to Avalon!</h1>
        <div className="player-list">
          { playerList }
        </div>
      </div>
    );
  }
}

export default Welcome;
