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
        completeTask(state, action) {
            const [taskToDelete] = state.filter(
                (task) => task.id === action.payload.id
            );
            const index = state.indexOf(taskToDelete);
            state.splice(index, 1, action.payload);
            const task = state.at(index);
            if (task.done) {
                task.done = false;
            } else {
                task.done = true;
            }
        },
    },
});

export const {
    addTask,
    addImportantTask,
    removeImportantTask,
    removeTask,
    completeTask,
} = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
