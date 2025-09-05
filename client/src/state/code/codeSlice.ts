import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CodeState {
    content: string;
}

const initialState: CodeState = {
    content: "",
};

const codeSlice = createSlice({
    name: "code",
    initialState,
    reducers: {
        setCode(state, action: PayloadAction<string>) {
            state.content = action.payload;
        },
    },
});

export const { setCode } = codeSlice.actions;
export default codeSlice.reducer;
