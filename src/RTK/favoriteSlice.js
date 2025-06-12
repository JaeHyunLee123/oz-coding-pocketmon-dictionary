import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("favorites");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    return [];
  }
};

/**
 *
 * @param {Object} state
 * @param {Array<number>} state.favorites
 */

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.favorites);
    localStorage.setItem("todos", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

const initialState = loadState();

export const favoritesSlice = createSlice({
  name: "favorites",
  /**@type {Array<number>} */
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.includes(id)) {
        const newFavorites = state.filter((num) => num !== id);
        saveState(newFavorites);
        return newFavorites;
      } else {
        state.push(id);
      }

      saveState(state);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.reducer;
