import { FC } from "react";
import style from "./Status.module.css";
import { SquareType } from "../../App";

interface StatusProps {
  currentPlayer: SquareType;
  winner: SquareType | null;
  isOver: boolean;
  reset: () => void;
}

const Status: FC<StatusProps> = ({ winner, currentPlayer, reset, isOver }) => {
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
