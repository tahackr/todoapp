import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask(state, action) {
            state.push(action.payload);
        },
        addImportantTask(state, action) {
            const [item] = state.filter((item) => item.id === action.payload);
            item.important = true;
        },
        removeImportantTask(state, action) {
            const [item] = state.filter((item) => item.id === action.payload);
            item.important = false;
        },
    },
});

export const { addTask, addImportantTask, removeImportantTask } =
    tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
