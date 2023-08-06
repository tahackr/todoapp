import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: JSON.parse(localStorage.getItem("tasks")) || [],
    reducers: {
        addTask(state, action) {
            state.push(action.payload);
        },
        removeTask(state, action) {
            const [taskToDelete] = state.filter(
                (task) => task.id === action.payload
            );
            const index = state.indexOf(taskToDelete);
            state.splice(index, 1);
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

export const { addTask, addImportantTask, removeImportantTask, removeTask } =
    tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
