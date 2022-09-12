import { createSlice, createAsyncThunk, Action } from "@reduxjs/toolkit";
import api from "../../client/index";
import { Drink } from "../../interfaces/drink";
import { RootState } from "../index";

interface State {
  search: Drink[];
  allCocktail: Drink[];
  currentDrink: Drink;
}

export const getById = createAsyncThunk("getById", async (id: string) => {
  const result = await api.getById(id);

  return result;
});

export const getAllCocktail = createAsyncThunk("getAllCocktail", async () => {
  const result = await api.getAll();

  return result;
});

export const searchByName = createAsyncThunk("searchByName", async (name: string) => {
  const result = await api.searchByName(name);

  return result;
});

const initialState: State = {
  search: [],
  allCocktail: [],
  currentDrink: {} as Drink,
};

const initReducer = createSlice({
  name: "initReducer",
  initialState,
  reducers: {
    clearCurrentDrink(state) {
      state.currentDrink = {} as Drink;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchByName.fulfilled, (state, action) => {
      state.search = action.payload;
    });

    builder.addCase(getAllCocktail.fulfilled, (state, action) => {
      state.allCocktail = action.payload;
    });

    builder.addCase(getById.fulfilled, (state, action) => {
      console.log(action.payload);
      state.currentDrink = action.payload;
    });
  },
});

export const getCurrentDrink = (state: RootState) => state.initReducer.currentDrink;
export const getAll = (state: RootState) => state.initReducer.allCocktail;
export const getSearch = (state: RootState) => state.initReducer.search;
export const { clearCurrentDrink } = initReducer.actions;

export default initReducer.reducer;
