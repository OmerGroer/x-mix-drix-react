import { FC } from "react";
import style from "./Square.module.css";
import xImg from "../../assets/x.jpg";
import oImg from "../../assets/o.png";
import { SquareType } from "../../App";

interface SquareProps {
  value: SquareType;
  onSquareClick: () => void;
}

const Square: FC<SquareProps> = ({ value, onSquareClick }) => {
  switch (value) {
    case SquareType.X:
      return <img className={style.square} alt="X" src={xImg} />;
    case SquareType.O:
      return <img className={style.square} alt="O" src={oImg} />;
    default:
      return <div className={style.square} onClick={onSquareClick} />;
  }
};

export default Square;
