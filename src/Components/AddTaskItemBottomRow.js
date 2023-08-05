import { IoCalendarOutline } from "react-icons/io5";
import { DateCalendar } from "@mui/x-date-pickers";
function AddTaskItemBottomRow({
    calendarValue,
    setCalendarValue,
    isCalendarOpen,
    setIsCalendarOpen,
    value,
    setValue,
    handleSubmit,
    userSelectedDate,
    setUserSelectedDate,
}) {
    const realTime = new Date();
    const userSelectedToday =
        realTime.getDate() === calendarValue.getDate() &&
        realTime.getMonth() === calendarValue.getMonth() &&
        realTime.getFullYear() === calendarValue.getFullYear();
    const userSelectedTomorrow =
        realTime.getDate() + 1 === calendarValue.getDate() &&
        realTime.getMonth() === calendarValue.getMonth() &&
        realTime.getFullYear() === calendarValue.getFullYear();

    const isDateThisYear =
        new Date().getFullYear() === calendarValue.getFullYear();

    const options = {
        day: "numeric",
        month: "long",
        weekday: "long",
    };
    if (!isDateThisYear) options.year = "numeric";
    const dateString = new Intl.DateTimeFormat("en-US", options).format(
        calendarValue
    );

    return (
        <div className="flex justify-between grow">
            {userSelectedDate ? (
                <div className="bg-white border rounded px-2 py-1 text-sm hover:bg-zinc-50 cursor-pointer">
                    {(userSelectedToday && "Today") ||
                        (userSelectedTomorrow && "Tomorrow") ||
                        `Last day: ${dateString}`}
                </div>
            ) : (
                <div></div>
            )}
            <div className="flex items-center gap-4">
                <div
                    onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                    className="calendar-button h-7 w-7 p-1 hover:bg-mainBgColor hover:cursor-pointer"
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

                {isCalendarOpen && (
                    <DateCalendar
                        sx={{ top: "60px", right: "0" }}
                        className="absolute bg-white rounded"
                        value={calendarValue}
                        onChange={(newValue, state) => {
                            setCalendarValue(newValue);
                            if (state === "finish") {
                                setIsCalendarOpen(false);
                                setUserSelectedDate(true);
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
