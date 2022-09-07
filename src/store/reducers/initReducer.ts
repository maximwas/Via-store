import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index"

const initialState = {};

const initReducer = createSlice({
  name: "initReducer",
  initialState,
  reducers: {},
});

export const {} = initReducer.actions

export default initReducer.reducer
