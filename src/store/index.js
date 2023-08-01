import { configureStore } from "@reduxjs/toolkit";
import {
    addTask,
    tasksReducer,
    addImportantTask,
    removeImportantTask,
} from "./slices/tasksSlice";
import { hamburgerReducer, toggleHamburgerMenu } from "./slices/hamburgerSlice";
import { pathReducer, changePath } from "./slices/pathSlice";

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        hamburgerMenu: hamburgerReducer,
        path: pathReducer,
    },
});

export {
    store,
    addTask,
    toggleHamburgerMenu,
    addImportantTask,
    removeImportantTask,
    changePath,
};
