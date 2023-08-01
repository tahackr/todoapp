import { createSlice } from "@reduxjs/toolkit";

const pathSlice = createSlice({
    name: "path",
    initialState: { currentPath: "" },
    reducers: {
        changePath(state, action) {
            state.currentPath = action.payload;
        },
    },
});

export const { changePath } = pathSlice.actions;
export const pathReducer = pathSlice.reducer;
