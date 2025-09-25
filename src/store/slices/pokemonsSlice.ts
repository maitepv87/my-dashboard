import { SimplePokemon } from "@/pokemons";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon };
}

const initialState: PokemonsState = {
  favorites: {},
};

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFavoritePokemons, toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
