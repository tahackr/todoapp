import { createSlice } from "@reduxjs/toolkit";

const addTaskItemSlice = createSlice({
    name: "addTaskItem",
    initialState: {
        calendarValue: new Date().getTime(),
        isCalendarOpen: false,
        value: "",
        userSelectedDate: false,
    },
    reducers: {
        setCalendarValue(state, action) {
            state.calendarValue = action.payload;
        },
        setIsCalendarOpen(state, action) {
            state.isCalendarOpen = action.payload;
        },
        setValue(state, action) {
            state.value = action.payload;
        },
        setUserSelectedDate(state, action) {
            state.userSelectedDate = action.payload;
        },
    },
});

export const {
    setCalendarValue,
    setIsCalendarOpen,
    setUserSelectedDate,
    setValue,
} = addTaskItemSlice.actions;

export const addTaskItemReducer = addTaskItemSlice.reducer;
