import React from 'react';
import TicTacToe from './tictactoe/Board'

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <TicTacToe />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
