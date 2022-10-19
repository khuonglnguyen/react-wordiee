import { stat } from "fs";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incPos, setBoard } from "../../redux/boardSllice";
import { rootState } from "../interface";
import "./key.css";

interface IProps {
  letter: string;
}

const Key: React.FC<IProps> = (props) => {
  const { letter } = props;
  const board = useSelector((state: rootState) => state.board.board);
  const position = useSelector((state: rootState) => state.board.pos);
  const dispach = useDispatch();
  const chooseLetter = () => {
    if (position >= 30) {
      return;
    }
    const newBoard = [...board];
    newBoard[position] = letter;
    dispach(setBoard(newBoard));
    dispach(incPos());
  };
  return (
    <div className="letter" onClick={chooseLetter}>
      {letter}
    </div>
  );
};

export default Key;
