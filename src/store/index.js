import { configureStore } from "@reduxjs/toolkit";
import {
    addTask,
    tasksReducer,
    addImportantTask,
    removeImportantTask,
    removeTask,
} from "./slices/tasksSlice";
import {
    configReducer,
    toggleHamburgerMenu,
    changeValue,
    changeSortType,
    changeSortOrder,
} from "./slices/configurationSlice";
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
        config: configReducer,
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
    removeTask,
    changeValue,
    changeSortType,
    changeSortOrder,
};
