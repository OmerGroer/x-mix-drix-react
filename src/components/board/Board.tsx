import { FC } from "react";
import style from "./Board.module.css";
import Square, { SquareType } from "../square/Square";

interface BoardProps {
  squares: Array<SquareType>;
  onPlay: (index: number) => void;
}

const Board: FC<BoardProps> = ({ squares, onPlay }) => {
  return (
    <div className={style.board}>
      {[...Array(9)].map((_, i) => (
        <Square value={squares[i]} onSquareClick={() => onPlay(i)} />
      ))}
    </div>
  );
};

export default Board;
