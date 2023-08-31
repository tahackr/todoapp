import { IoCalendarOutline } from "react-icons/io5";
import { DateCalendar } from "@mui/x-date-pickers";
import { useDispatch, useSelector } from "react-redux";
import useCheckDate from "../hooks/use-checkDate";
import {
    setIsCalendarOpen,
    setCalendarValue,
    setValue,
    setUserSelectedDate,
} from "../store";

function AddTaskItemBottomRow({ handleSubmit }) {
    const dispatch = useDispatch();
    const {
        calendarValue: tempCalendarValue,
        isCalendarOpen,
        value,
        userSelectedDate,
    } = useSelector((state) => state.addTaskItem);

    const calendarValue = new Date(tempCalendarValue);

    const { userSelectedToday, userSelectedTomorrow, isDateThisYear } =
        useCheckDate(calendarValue);

    const options = {
        day: "numeric",
        month: "long",
        weekday: "long",
    };
    if (!isDateThisYear) options.year = "numeric";
    const dateString = new Intl.DateTimeFormat("en-US", options).format(
        calendarValue
    );

    const handleResetDate = () => {
        dispatch(setUserSelectedDate(false));
        dispatch(setCalendarValue(new Date().getTime()));
    };

    return (
        <div
            className={`flex grow ${
                userSelectedDate ? "justify-between" : "justify-end"
            }`}
        >
            {userSelectedDate && (
                <div
                    className="flex items-center gap-1.5 bg-white border rounded px-2 py-1 text-sm hover:bg-zinc-50 cursor-pointer"
                    onClick={handleResetDate}
                >
                    <IoCalendarOutline />
                    {(userSelectedToday && "Today") ||
                        (userSelectedTomorrow && "Tomorrow") ||
                        `Last day: ${dateString}`}
                </div>
            )}
            <div className="flex items-center gap-4">
                <div
                    onClick={() => dispatch(setIsCalendarOpen(!isCalendarOpen))}
                    className="calendar-button h-7 w-7 p-1 hover:bg-mainBgColor hover:cursor-pointer"
                >
                    <IoCalendarOutline
                        style={{ height: "100%", width: "auto" }}
                    />
                </div>
                <div>
                    <button
                        onClick={() => {
                            dispatch(setValue(""));
                            handleSubmit(value);
                        }}
                        disabled={!value}
                        className="border p-1.5 text-xs font-medium hover:bg-mainBgColor"
                    >
                        Ekle
                    </button>
                </div>

                {isCalendarOpen && (
                    <DateCalendar
                        className="top-14 right-0 absolute bg-white rounded z-10"
                        value={calendarValue}
                        onChange={(newValue, state) => {
                            dispatch(setCalendarValue(newValue.getTime()));
                            if (state === "finish") {
                                dispatch(setIsCalendarOpen(false));
                                dispatch(setUserSelectedDate(true));
                            }
                        }}
                        disablePast
                    />
                )}
            </div>
        </div>
    );
}

export default AddTaskItemBottomRow;
