import { createSlice } from "@reduxjs/toolkit";


const initialState = JSON.parse(localStorage.getItem("myPokemon")) || [];

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      console.log(action.payload);
      return [...state, action.payload];
    }
    ,
    removePokemon: (state, action) => {
      // console.log(action);
      const removePokemon = state.filter((card) => card.id !== action.payload.id);
      console.log(removePokemon);
      return removePokemon;
    }
  }
})

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;