import { IoMdRadioButtonOff } from "react-icons/io";
import { IoCheckmarkCircleSharp, IoCalendarOutline } from "react-icons/io5";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addImportantTask, removeImportantTask, completeTask } from "../store";
import useCheckDate from "../hooks/use-checkDate";
import ControlDelete from "./ControlDelete";
import sound from "../ding.mp3";

function TaskItem({ children, id, task, done }) {
    const state = useSelector((state) => state.tasks);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [thisItem] = state.filter((item) => item.id === id);
    const dispatch = useDispatch();
    const parentRef = useRef();

    const { userSelectedToday, userSelectedTomorrow } = useCheckDate(
        new Date(task.date)
    );
    const miniCalendar = userSelectedToday ? (
        <IoCalendarOutline stroke="#155bd3" fill="#155bd3" />
    ) : (
        <IoCalendarOutline />
    );

    const renderedDate = new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "long",
        weekday: "long",
    }).format(new Date(task.date));

    const handleImportantClick = () => {
        if (thisItem.important) {
            dispatch(removeImportantTask(id));
        } else {
            dispatch(addImportantTask(id));
        }
    };

    useEffect(() => {
        // This should have worked out without awaiting the promise.
        // Sometimes it does and sometimes it just does not
        (async function () {
            await new Promise((resolve) => setTimeout(resolve, 1));
            // Avoid getting errors with optional chaining
            if (parentRef.current?.className) {
                parentRef.current.className =
                    parentRef.current.className.replace(
                        "-translate-y-full",
                        ""
                    );
            }
        })();
    });

    return (
        <div
            ref={parentRef}
            className="task flex items-center gap-3 px-4 py-2 border-b bg-white rounded justify-between mb-3 transition-transform shadow -translate-y-full"
        >
            {isModalOpen && (
                <ControlDelete task={task} setIsModalOpen={setIsModalOpen} />
            )}
            <div className="flex items-center gap-4 grow">
                <button
                    aria-label="Complete a task"
                    className="h-6 w-6"
                    type="button"
                    onClick={() => {
                        !done && new Audio(sound).play();
                        dispatch(completeTask(task));
                    }}
                >
                    <span className="relative">
                        {done ? (
                            <IoCheckmarkCircleSharp
                                style={{
                                    height: "100%",
                                    width: "auto",
                                    color: "rgb(37 100 207)",
                                }}
                            />
                        ) : (
                            <>
                                <IoMdRadioButtonOff
                                    style={{
                                        height: "100%",
                                        width: "auto",
                                        color: "rgb(37 100 207)",
                                    }}
                                />
                                <span
                                    className="hover:opacity-100 opacity-0"
                                    style={{
                                        transition: "opacity 200ms",
                                        position: "absolute",
                                        transform:
                                            "translateY(-17.5px) translateX(-5.5px)",
                                        color: "rgb(37 100 207)",
                                    }}
                                >
                                    <MdDone size={"0.7rem"} />
                                </span>
                            </>
                        )}
                    </span>
                </button>
                <div className="flex flex-col justify-center text-sm">
                    <span
                        className={`flex flex-wrap break-all break-words mb-1 ${
                            task.done ? "line-through" : ""
                        }`}
                    >
                        {children}
                    </span>
                    <div className="flex items-center text-xs">
                        <span>Tasks</span>
                        <>
                            {task.dateSelected && (
                                <div className="flex items-center before:content-['•'] before:px-2">
                                    {miniCalendar}
                                    <div
                                        className={`ml-0.5 ${
                                            userSelectedToday
                                                ? "text-svgColor"
                                                : ""
                                        }`}
                                    >
                                        {userSelectedToday && "Today"}
                                        {userSelectedTomorrow && "Tomorrow"}
                                        {!userSelectedToday &&
                                            !userSelectedTomorrow &&
                                            renderedDate}
                                    </div>
                                </div>
                            )}
                        </>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-1">
                <div
                    onClick={handleImportantClick}
                    className="h-7 w-7 p-1 hover:bg-mainBgColor hover:cursor-pointer"
                >
                    {thisItem.important ? (
                        <AiFillStar
                            fill="#2564cf"
                            style={{ height: "100%", width: "auto" }}
                        />
                    ) : (
                        <AiOutlineStar
                            fill="#2564cf"
                            style={{ height: "100%", width: "auto" }}
                        />
                    )}
                </div>
                <div className="h-7 w-7 p-1 hover:bg-mainBgColor hover:cursor-pointer">
                    <BsTrash
                        onClick={() => setIsModalOpen(true)}
                        fill="#2564cf"
                        style={{ height: "100%", width: "auto" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default TaskItem;
