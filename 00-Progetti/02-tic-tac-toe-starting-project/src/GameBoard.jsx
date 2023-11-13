const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onSelectSquare, turns }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // const symbolHandler = (rowIndex, colIndex) => {
  //   if (gameBoard[rowIndex][colIndex] === null) {

  //     setGameBoard((prevGameBoard) => {
  //       const updatedBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updatedBoard[rowIndex][colIndex] = symbol;
  //       return updatedBoard;
  //     });

  //     onSelectSquare(); // modifico il simbolo con l'handler dichiarato in App e utilizzato qui
  //   }
  // };

  let gameBoard = initialGameBoard;

  turns.forEach((turn) => {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  });

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => {
                    onSelectSquare(rowIndex, colIndex);
                  }}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
