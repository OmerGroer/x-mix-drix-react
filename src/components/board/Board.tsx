import { FC } from "react";
import style from "./Board.module.css";
import Square from "../square/Square";
import { SquareType } from "../../App";

interface BoardProps {
  squares: Array<SquareType>;
  onPlay: (index: number) => void;
}

const Board: FC<BoardProps> = ({ squares, onPlay }) => {
  return (
    <div className={style.board}>
      {[...Array(3)].map((_, i) => (
        <div className={style.row}>
          {[...Array(3)].map((_, j) => {
            const index = i * 3 + j;
            return (
              <Square
                value={squares[index]}
                onSquareClick={() => onPlay(index)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Board;
