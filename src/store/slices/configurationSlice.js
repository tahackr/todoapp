import { createSlice } from "@reduxjs/toolkit";

const configurationSlice = createSlice({
    name: "config",
    initialState: { isHamburgerOpen: false, value: "" },
    reducers: {
        toggleHamburgerMenu(state, action) {
            state.isHamburgerOpen = action.payload;
        },
        changeValue(state, action) {
            state.value = action.payload;
        },
    },
});

export const { toggleHamburgerMenu, changeValue } = configurationSlice.actions;
export const configReducer = configurationSlice.reducer;
