import { IoMdRadioButtonOff } from "react-icons/io";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addImportantTask, removeImportantTask } from "../store";

function TaskItem({ children, id }) {
    const state = useSelector((state) => state.tasks);
    const [thisItem] = state.filter((item) => item.id === id);
    const dispatch = useDispatch();
    const [done, setDone] = useState(false);
    const parentRef = useRef();

    const handleImportantClick = () => {
        if (thisItem.important) {
            dispatch(removeImportantTask(id));
        } else {
            dispatch(addImportantTask(id));
        }
    };

    useEffect(() => {
        const array = parentRef.current.className.split(" ").filter((item) => {
            return !item.includes("-translate-y-full");
        });

        parentRef.current.className = array.join(" ");
    }, []);

    return (
        <div
            ref={parentRef}
            className="flex items-center gap-3 px-4 py-2 border-b bg-white rounded justify-between mb-3 transition-transform -translate-y-full"
        >
            <div className="flex items-center gap-4 grow">
                <button
                    className="h-6 w-6"
                    type="button"
                    onClick={() => setDone(!done)}
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
                                        width: "0.8rem",
                                        height: "0.8rem",
                                        position: "absolute",
                                        transform:
                                            "translateY(-19.5px) translateX(-8px)",
                                        color: "rgb(37 100 207)",
                                    }}
                                >
                                    <MdDone />
                                </span>
                            </>
                        )}
                    </span>
                </button>
                <span className="h-10 flex">
                    <div className="self-center">{children}</div>
                </span>
            </div>
            <div className="flex items-center gap-4">
                <div
                    onClick={handleImportantClick}
                    className="h-7 w-7 p-1 hover:bg-mainBgColor hover:cursor-pointer"
                >
                    {thisItem.important ? (
                        <AiFillStar style={{ height: "100%", width: "auto" }} />
                    ) : (
                        <AiOutlineStar
                            style={{ height: "100%", width: "auto" }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default TaskItem;
