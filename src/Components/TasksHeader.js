import { RxHamburgerMenu } from "react-icons/rx";
import { BiSortAlt2 } from "react-icons/bi";
import { toggleHamburgerMenu } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { WiDaySunny } from "react-icons/wi";
import { AiOutlineStar } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LuCalendarPlus } from "react-icons/lu";
import { useEffect, useState } from "react";
import { changeSortType, changeSortOrder } from "../store";

function TasksHeader({ type }) {
    const [sortOpen, setSortOpen] = useState(false);
    const dispatch = useDispatch();
    const isHamburgerOpen = useSelector(
        (state) => state.config.isHamburgerOpen
    );

    const handleToggleHamburger = () => {
        dispatch(toggleHamburgerMenu(!isHamburgerOpen));
    };

    const date = new Date();
    const currentDay = new Intl.DateTimeFormat("en-UK", {
        day: "numeric",
        month: "long",
        weekday: "long",
    }).format(date);

    useEffect(() => {
        const handler = (e) => {
            if (sortOpen && !e.target.closest(".sort-dropdown"))
                return setSortOpen(false);
        };
        document.body.addEventListener("click", handler);
        return () => document.body.removeEventListener("click", handler);
    });

    return (
        <div className="flex p-6 justify-between">
            <header className="flex gap-2">
                {isHamburgerOpen ? (
                    <div className="self-start">
                        {!type && <WiDaySunny size="1.2rem" />}
                        {type === "important" && (
                            <AiOutlineStar size="1.2rem" />
                        )}
                        {type === "planned" && <IoCalendarOutline />}
                    </div>
                ) : (
                    <div
                        onClick={handleToggleHamburger}
                        className="hover:bg-white self-start cursor-pointer"
                    >
                        <RxHamburgerMenu size={"1.2rem"} />
                    </div>
                )}

                <div>
                    <span className="inline-block font-medium text-xl mb-1.5 leading-3">
                        {!type && "My Day"}
                        {type === "important" && "Important"}
                        {type === "planned" && "Planned"}
                    </span>
                    {!type && (
                        <div className="font-light text-sm">{currentDay}</div>
                    )}
                </div>
            </header>
            <div
                onClick={() => setSortOpen(!sortOpen)}
                className="relative self-center flex gap-1 items-center sort-dropdown cursor-pointer"
            >
                <BiSortAlt2 />
                Sort
                {sortOpen && (
                    <div className="flex flex-col absolute top-8 right-0 bg-white z-10 shadow-md rounded-md">
                        <div className="border-b text-center py-4 px-20">
                            <span className="whitespace-nowrap font-semibold">
                                Sort by
                            </span>
                        </div>
                        <ul className="flex flex-col cursor-pointer">
                            <li
                                onClick={() => {
                                    dispatch(changeSortType("importance"));
                                    dispatch(changeSortOrder(true));
                                }}
                                className="flex grow"
                            >
                                <button className="flex items-center hover:bg-gray-100 grow">
                                    <span className="p-4 ">
                                        <AiOutlineStar />
                                    </span>
                                    <span>Importance</span>
                                </button>
                            </li>
                            <li
                                onClick={() => {
                                    dispatch(changeSortType("due date"));
                                    dispatch(changeSortOrder(true));
                                }}
                                className="flex grow"
                            >
                                <button className="flex items-center hover:bg-gray-100 grow">
                                    <span className="p-4">
                                        <IoCalendarOutline />
                                    </span>
                                    <span>Due date</span>
                                </button>
                            </li>
                            <li
                                onClick={() => {
                                    dispatch(changeSortType("alphabetically"));
                                    dispatch(changeSortOrder(true));
                                }}
                                className="flex grow"
                            >
                                <button className="flex items-center hover:bg-gray-100 grow">
                                    <span className="p-4">
                                        <BiSortAlt2 />
                                    </span>
                                    <span>Alphabetically</span>
                                </button>
                            </li>
                            <li
                                onClick={() => {
                                    dispatch(changeSortType("creation"));
                                    dispatch(changeSortOrder(true));
                                }}
                                // Normal array sırası ve reverse hallet
                                /* onClick={() =>
                                    dispatch(changeSortType())
                                } */
                                className="flex grow"
                            >
                                <button className="flex items-center hover:bg-gray-100 grow">
                                    <span className="p-4">
                                        <LuCalendarPlus />
                                    </span>
                                    <span>Creation date</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TasksHeader;
