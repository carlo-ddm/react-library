import { useState } from "react";
import Player from "./Player";
import GameBoard from "./GameBoard";
import Log from "./Log";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  const handleUpdateSymbol = () => {
    setActivePlayer(curActivSymbol => {
      return curActivSymbol === 'X' ? 'O' : 'X';
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player defaultName="Player 1" isActive={activePlayer === 'X'} />
          <Player defaultName="Player 2" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleUpdateSymbol} symbol={activePlayer}/>
      </div>
      <Log />
    </main>
  );
}

export default App;