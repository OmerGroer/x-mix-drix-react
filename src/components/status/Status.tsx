import { FC } from "react";
import style from "./Status.module.css";
import { SquareType } from "../square/Square";

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

interface StatusProps {
  currentPlayer: SquareType;
  squares: Array<SquareType>;
  isOver: boolean;
  reset: () => void;
}

const Status: FC<StatusProps> = ({ squares, currentPlayer, reset, isOver }) => {
  const winner = calculateWinner(squares);
  let status;
  if (winner !== null) {
    status = `Winner: ${winner}`;
  } else if (isOver) {
    status = "Tie";
  } else {
    status = `Next player: ${currentPlayer}`;
  }

  return (
    <>
      <div className={style.status}>{status}</div>
      {(winner || isOver) && (
        <div className={`${style.status} ${style.button}`} onClick={reset}>
          Play Again!
        </div>
      )}
    </>
  );
};

export default Status;
