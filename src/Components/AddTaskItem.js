import { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store";
import AddTaskItemBottomRow from "./AddTaskItemBottomRow";
import {
    setIsCalendarOpen,
    setCalendarValue,
    setValue,
    setUserSelectedDate,
} from "../store";
import { v4 as uuidv4 } from "uuid";

function AddTaskItem() {
    const {
        calendarValue: tempCalendarValue,
        isCalendarOpen,
        value,
        userSelectedDate,
    } = useSelector((state) => state.addTaskItem);
    const calendarValue = new Date(tempCalendarValue);
    const dispatch = useDispatch();

    useEffect(() => {
        const handler = (e) => {
            if (
                isCalendarOpen &&
                !e.target.closest(".MuiDateCalendar-root") &&
                !e.target.closest(".calendar-button")
            )
                dispatch(setIsCalendarOpen(false));
        };
        document.body.addEventListener("click", handler);
        return () => document.body.removeEventListener("click", handler);
    });

    const handleSubmit = () => {
        if (!value) return;
        const newTask = {
            children: value,
            important: window.location.pathname === "/important" ? true : false,
            done: false,
            date: calendarValue.getTime(),
            dateSelected:
                window.location.pathname === "/planned"
                    ? true
                    : userSelectedDate,
            createdAt: window.location.pathname,
            id: uuidv4(),
        };

        dispatch(addTask(newTask));

        dispatch(setCalendarValue(new Date().getTime()));
        dispatch(setUserSelectedDate(false));
    };

    return (
        <div className="mb-3 shadow rounded">
            <div className="flex items-center gap-3 px-4 py-2 border-b bg-white justify-between rounded-t">
                <div className="flex items-center gap-4 grow">
                    <label htmlFor="task-input" className="h-6 w-6">
                        <AiOutlinePlus
                            style={{
                                height: "100%",
                                width: "auto",
                                color: "rgb(37 100 207)",
                            }}
                        />
                    </label>
                    <input
                        id="task-input"
                        className="outline-none rounded-md h-10 grow"
                        placeholder="Add Task"
                        type="text"
                        aria-label="Add a task"
                        maxLength={255}
                        value={value}
                        onChange={(e) => dispatch(setValue(e.target.value))}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                dispatch(setValue(""));
                                handleSubmit(value);
                            }
                        }}
                    />
                </div>
            </div>
            <div className="relative flex items-center gap-3 px-4 py-2 bg-mainBgColor rounded-b">
                <AddTaskItemBottomRow handleSubmit={handleSubmit} />
            </div>
        </div>
    );
}

export default AddTaskItem;
