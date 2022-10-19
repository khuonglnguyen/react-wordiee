import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Board from "./components/Heading/Board/Board";
import Heading from "./components/Heading/Heading";
import { rootState } from "./components/interface";

function App() {
  const board = useSelector((state: rootState) => state.board.board);

  return (
    <div className="App">
      <Heading type="h1" text="Wordiee"></Heading>
      <div className="board-container">
        <Board board={board}></Board>
      </div>
    </div>
  );
}

export default App;
