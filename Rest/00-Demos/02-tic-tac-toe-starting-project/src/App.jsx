import { useState } from "react";
import Player from "./Player";
import GameBoard from "./GameBoard";
import Log from "./Log";
import GameOver from "./GameOver";
import { WINNING_COMBINATIONS } from "./winning-combination";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveGameBoard(gameTurns) {
  let gameBoard = [...initialGameBoard.map((innerArray) => [...innerArray])];

  gameTurns.forEach((turn) => {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  });

  return gameBoard;
}

function deriveWinner(gameBoard, playerNames) {
  let winner;

  WINNING_COMBINATIONS.forEach((combination) => {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = playerNames[firstSquare];
    }
  });
  return winner;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [playerNames, setPlayerNames] = useState({
    X: "Players 1",
    O: "Players 2",
  });

  let activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const hasDraw = gameTurns.length === 9 && !winner;
  const winner = deriveWinner(gameBoard, playerNames);

  function deriveActivePlayer(gameTurns) {
    let currentPlayer = "X";
    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
      currentPlayer = "O";
    }
    return currentPlayer;
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      activePlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  function rematchHandler() {
    setGameTurns([]);
  }

  function handlePlayerNames(symbol, name) {
    setPlayerNames((prevNames) => {
      return {
        ...prevNames,
        [symbol]: name,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            defaultName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNames}
          />
          <Player
            defaultName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNames}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} restart={rematchHandler} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
