import { configureStore } from "@reduxjs/toolkit";
import problemSlice from "./problem/problemSlice.js"
import codeSlice from "./code/codeSlice.js"

export const store = configureStore({
    reducer: {
        problem: problemSlice,
        code: codeSlice,
    },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch