import { configureStore } from "@reduxjs/toolkit";
import { pocketmonSlice } from "./pocketmonSlice";
import { favoritesSlice } from "./favoriteSlice";

export default configureStore({
  reducer: {
    pocketmon: pocketmonSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});
