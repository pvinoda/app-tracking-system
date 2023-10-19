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
  },
});

export default boardsSlice;
