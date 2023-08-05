import { configureStore } from "@reduxjs/toolkit";
import {
    addTask,
    tasksReducer,
    addImportantTask,
    removeImportantTask,
} from "./slices/tasksSlice";
import { hamburgerReducer, toggleHamburgerMenu } from "./slices/hamburgerSlice";
import { pathReducer, changePath } from "./slices/pathSlice";
import {
    setCalendarValue,
    setIsCalendarOpen,
    setValue,
    setUserSelectedDate,
    addTaskItemReducer,
} from "./slices/addTaskItemSlice";

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        hamburgerMenu: hamburgerReducer,
        path: pathReducer,
        addTaskItem: addTaskItemReducer,
    },
});

export {
    store,
    addTask,
    toggleHamburgerMenu,
    addImportantTask,
    removeImportantTask,
    changePath,
    setCalendarValue,
    setIsCalendarOpen,
    setValue,
    setUserSelectedDate,
};
