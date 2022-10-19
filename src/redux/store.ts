import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./boardSllice";

export default configureStore({
  reducer: {
    board: boardReducer,
  },
});
