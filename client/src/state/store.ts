import { configureStore } from "@reduxjs/toolkit";
import problemSlice from "./problem/problemSlice.js"

export const store = configureStore({
    reducer: {
        problem: problemSlice
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch