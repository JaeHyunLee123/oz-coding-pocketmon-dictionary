import { configureStore } from "@reduxjs/toolkit";
import { pocketmonSlice } from "./pocketmonSlice";

export default configureStore({
  reducer: {
    pocketmon: pocketmonSlice.reducer,
  },
});
