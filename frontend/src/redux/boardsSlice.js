import { createSlice } from "@reduxjs/toolkit";
import $ from "jquery";

const createNewBoard = (board) => {
  $.ajax({
    url: "http://localhost:5000/boards",
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
    },
    credentials: "include",
    data: JSON.stringify({
      board: board,
    }),
    success: (board) => {
      console.log("board created", board);
    },
  });
};

const boardsSlice = createSlice({
  name: "boards",
  initialState: [],
  reducers: {
    setInitialData: (state, action) => {
      return (state = action.payload.initialData);
    },
    deleteInitialData: (state, action) => {
      state = [];
    },
    addBoard: (state, action) => {
      const isActive = state.length > 0 ? false : true;
      const payload = action.payload;
      const board = {
        name: payload.name,
        isActive,
        columns: [],
      };
      board.columns = payload.newColumns;
      state.push(board);
      createNewBoard(state);
    },
    editBoard: (state, action) => {
      const payload = action.payload;
      const board = state.find((board) => board.isActive);
      board.name = payload.name;
      board.columns = payload.newColumns;
      createNewBoard(state);
    },
    deleteBoard: (state) => {
      const board = state.find((board) => board.isActive);
      state.splice(state.indexOf(board), 1);
      createNewBoard(state);
    },
    setBoardActive: (state, action) => {
      state.map((board, index) => {
        index === action.payload.index
          ? (board.isActive = true)
          : (board.isActive = false);
        return board;
      });
    },
  },
});

export default boardsSlice;
