import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface problemState {
    problemID: string;
    language: string;
};

const initialState: problemState = {
    problemID: '0001',
    language: 'python',
};

const problemSlice = createSlice({
    name: 'problem',
    initialState,
    reducers: {
        changeProblem: (state, action:PayloadAction<string>) => {
            action.payload !== state.problemID && (state.problemID = action.payload);
        },
        changeLanguage: (state, action:PayloadAction<string>) => {
            action.payload !== state.language && (state.language = action.payload);
        }
    },
});

export const {changeProblem, changeLanguage} = problemSlice.actions;

export default problemSlice.reducer;