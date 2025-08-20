import { createSlice } from "@reduxjs/toolkit";

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
    reducers: {},
});

export default problemSlice;