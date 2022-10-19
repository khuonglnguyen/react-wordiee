import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decPos, setBoard } from "../../redux/boardSllice";
import { rootState } from "../interface";
import Key from "../Key/Key";
import "./keyboard.css";

const Keyboard: React.FC = () => {
  const position = useSelector((state: rootState) => state.board.pos);
  const board = useSelector((state: rootState) => state.board.board);
  const dispatch = useDispatch();
  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];
  const handleBack = () => {
    if (position <= 0) {
      return;
    }
    const newBoard = [...board];
    newBoard[position - 1] = "";
    dispatch(setBoard(newBoard));
    dispatch(decPos());
  };
  return (
    <div>
      <div className="keyboard-container">
        {rows.map((row, idx) => {
          return (
            <div className="row">
              {idx === 2 && <span>Enter</span>}
              {row.split(" ").map((letter, idx) => {
                return (
                  <div className="letter-row">
                    <Key letter={letter.toUpperCase()}></Key>
                    {letter === "m" && <span onClick={handleBack}>Back</span>}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Keyboard;
