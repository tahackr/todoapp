import { useState } from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store";
import { DateCalendar } from "@mui/x-date-pickers";

function AddTaskItem() {
    const dispatch = useDispatch();
    const [calendarValue, setCalendarValue] = useState(new Date());
    const [isCalenderOpen, setIsCalendarOpen] = useState(false);
    const [value, setValue] = useState("");
    const path = useSelector((state) => state.path.currentPath);

    const handleSubmit = () => {
        if (!value) return;
        dispatch(
            addTask({
                children: value,
                important: path === "/important" ? true : false,
                done: false,
                date: calendarValue.getTime(),
                id: Math.floor(Math.random() * 150),
            })
        );
    };

    return (
        <div className="relative flex items-center gap-3 px-4 py-2 border-b bg-white rounded justify-between mb-3">
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
            <div className="flex items-center gap-4">
                <div
                    onClick={() => setIsCalendarOpen(!isCalenderOpen)}
                    className="h-7 w-7 p-1 hover:bg-mainBgColor hover:cursor-pointer"
                >
                    <IoCalendarOutline
                        style={{ height: "100%", width: "auto" }}
                    />
                </div>
                <div>
                    <button
                        onClick={() => {
                            setValue("");
                            handleSubmit(value);
                        }}
                        disabled={!value}
                        className="border p-1.5 text-xs font-medium hover:bg-mainBgColor"
                    >
                        Ekle
                    </button>
                </div>

                {isCalenderOpen && (
                    <DateCalendar
                        sx={{ top: "60px", right: "0" }}
                        className="absolute bg-white rounded"
                        value={calendarValue}
                        onChange={(newValue) => setCalendarValue(newValue)}
                        disablePast
                    />
                )}
            </div>
        </div>
    );
}

export default AddTaskItem;
