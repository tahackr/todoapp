import { createSlice } from "@reduxjs/toolkit";

const hamburgerSlice = createSlice({
    name: "hamburger",
    initialState: { isOpen: false },
    reducers: {
        toggleHamburgerMenu(state, action) {
            state.isOpen = action.payload;
        },
    },
});

export const { toggleHamburgerMenu } = hamburgerSlice.actions;
export const hamburgerReducer = hamburgerSlice.reducer;
