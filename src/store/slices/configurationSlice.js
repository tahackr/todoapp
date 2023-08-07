import { createSlice } from "@reduxjs/toolkit";

const configurationSlice = createSlice({
    name: "config",
    initialState: {
        isHamburgerOpen: false,
        value: "",
        sortType: "",
        isSortDescending: true,
    },
    reducers: {
        toggleHamburgerMenu(state, action) {
            state.isHamburgerOpen = action.payload;
        },
        changeValue(state, action) {
            state.value = action.payload;
        },
        changeSortType(state, action) {
            state.sortType = action.payload;
        },
        changeSortOrder(state, action) {
            state.isSortDescending = action.payload;
        },
    },
});

export const {
    toggleHamburgerMenu,
    changeValue,
    changeSortType,
    changeSortOrder,
} = configurationSlice.actions;
export const configReducer = configurationSlice.reducer;
