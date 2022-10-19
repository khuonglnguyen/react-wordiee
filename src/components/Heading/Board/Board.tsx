import React from "react";
import Keyboard from "../../Keyboard/Keyboard";
import Square from "../../Square/Square";
import "./board.css";

interface IProps {
  board: string[];
}

const Board: React.FC<IProps> = (props) => {
  const { board } = props;
  return (
    <>
      <div className="board">
        {board.map((square: any, idx: any) => {
          return (
            <>
              <Square val={square} squareIdx={idx}></Square>
            </>
          );
        })}
      </div>
      <br></br>
      <div className="keyboard">
        <Keyboard></Keyboard>
      </div>
    </>
  );
};

export default Board;
