import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store";

import AddTaskItemBottomRow from "./AddTaskItemBottomRow";

function AddTaskItem() {
    const path = useSelector((state) => state.path.currentPath);
    const [calendarValue, setCalendarValue] = useState(new Date());
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [value, setValue] = useState("");
    const [userSelectedDate, setUserSelectedDate] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const handler = (e) => {
            if (
                isCalendarOpen &&
                !e.target.closest(".MuiDateCalendar-root") &&
                !e.target.closest(".calendar-button")
            )
                setIsCalendarOpen(false);
        };
        document.body.addEventListener("click", handler);
        return () => document.body.removeEventListener("click", handler);
    });

    const handleSubmit = () => {
        if (!value) return;

        dispatch(
            addTask({
                children: value,
                important: path === "/important" ? true : false,
                done: false,
                date: calendarValue.getTime(),
                id: Math.floor(Math.random() * 999999),
            })
        );

        setCalendarValue(new Date());
        setUserSelectedDate(false);
    };

    return (
        <div className="mb-3 shadow rounded">
            <div className="flex items-center gap-3 px-4 py-2 border-b bg-white justify-between rounded-t">
                <div className="flex items-center gap-4 grow">
                    <span className="h-6 w-6">
                        <AiOutlinePlus
                            style={{
                                height: "100%",
                                width: "auto",
                                color: "rgb(37 100 207)",
                            }}
                        />
                    </span>
                    <input
                        className="outline-none rounded-md h-10 grow"
                        placeholder="Add Task"
                        type="text"
                        maxLength={255}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                setValue("");
                                handleSubmit(value);
                            }
                        }}
                    />
                </div>
            </div>
            <div className="relative flex items-center gap-3 px-4 py-2 bg-mainBgColor rounded-b">
                <AddTaskItemBottomRow
                    calendarValue={calendarValue}
                    setCalendarValue={setCalendarValue}
                    isCalendarOpen={isCalendarOpen}
                    setIsCalendarOpen={setIsCalendarOpen}
                    value={value}
                    setValue={setValue}
                    handleSubmit={handleSubmit}
                    userSelectedDate={userSelectedDate}
                    setUserSelectedDate={setUserSelectedDate}
                />
            </div>
        </div>
    );
}

export default AddTaskItem;
