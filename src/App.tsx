import { FC, useState } from "react";
import style from "./App.module.css";
import Board from "./components/board/Board";
import Status from "./components/status/Status";

enum SquareType {
  X = "X",
  O = "O",
  EMPTY = "",
}

function calculateWinner(squares: Array<SquareType>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a] !== SquareType.EMPTY &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }

  return null;
}

const App: FC = () => {
  const [squares, setSquares] = useState<Array<SquareType>>(
    Array(9).fill(SquareType.EMPTY)
  );
  const [currentMove, setCurrentMove] = useState<number>(0);
  const winner = calculateWinner(squares);
  const currentPlayer = currentMove % 2 === 0 ? SquareType.X : SquareType.O;
  const isOver = currentMove === 9;

  const onPlay = (index: number) => {
    if (isOver || winner) return;

    setSquares((prev) => {
      const nextSquares = [...prev];
      nextSquares[index] = currentPlayer;
      return nextSquares;
    });

    setCurrentMove((prev) => prev + 1);
  };

  const reset = () => {
    setSquares(Array(9).fill(SquareType.EMPTY));
    setCurrentMove(0);
  };

  return (
    <div className={style.main}>
      <Board squares={squares} onPlay={onPlay} />
      <Status
        currentPlayer={currentPlayer}
        winner={winner}
        isOver={isOver}
        reset={reset}
      />
    </div>
  );
};

export default App;
export { SquareType };
