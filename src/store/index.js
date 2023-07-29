import { configureStore } from "@reduxjs/toolkit";
import {
    addTask,
    tasksReducer,
    addImportantTask,
    removeImportantTask,
} from "./slices/tasksSlice";
import { hamburgerReducer, toggleHamburgerMenu } from "./slices/hamburgerSlice";

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        hamburgerMenu: hamburgerReducer,
    },
});

export {
    store,
    addTask,
    toggleHamburgerMenu,
    addImportantTask,
    removeImportantTask,
};
