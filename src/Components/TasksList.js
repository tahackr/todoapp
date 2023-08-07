import AddTaskItem from "./AddTaskItem";
import TaskItem from "./TaskItem";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDown, AiOutlineUp, AiOutlineRight } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { changeSortType, changeSortOrder } from "../store";
import { useState } from "react";

function TasksList({ type, searching }) {
    const tasks = useSelector((state) => state.tasks);
    const [showCompletedTasks, setShowCompletedTasks] = useState(true);
    const { value, sortType, isSortDescending } = useSelector(
        (state) => state.config
    );
    const dispatch = useDispatch();

    localStorage.setItem("tasks", JSON.stringify(tasks));

    let renderedTasks;
    let filteredTasks;

    if (searching) {
        filteredTasks = tasks.filter((task) =>
            task.children.toLowerCase().startsWith(value.toLowerCase())
        );

        renderedTasks = filteredTasks.map((task, i) => (
            <TaskItem task={task} id={task.id} key={i}>
                {task.children}
            </TaskItem>
        ));

        return (
            <div className="py-6 px-4 overflow-y-auto h-full">
                {renderedTasks.reverse()}
            </div>
        );
    }

    if (!type) {
        filteredTasks = tasks.filter((task) => {
            const realTime = new Date();
            const userSelectedToday =
                realTime.getDate() === new Date(task.date).getDate() &&
                realTime.getMonth() === new Date(task.date).getMonth() &&
                realTime.getFullYear() === new Date(task.date).getFullYear();

            const condition =
                (userSelectedToday && task.dateSelected) ||
                task.createdAt === "/myday" ||
                task.createdAt === "/";

            return condition;
        });

        renderedTasks = filteredTasks.map((task, i) => {
            return (
                <TaskItem task={task} id={task.id} key={i}>
                    {task.children}
                </TaskItem>
            );
        });
    }

    if (type === "important") {
        filteredTasks = tasks.filter((task) => {
            const searchMatch = task.children.includes(value);
            if (value) return task.important && searchMatch;
            return task.important;
        });

        renderedTasks = filteredTasks.map((task, i) => (
            <TaskItem task={task} id={task.id} key={i}>
                {task.children}
            </TaskItem>
        ));

        console.log(filteredTasks);
    }

    if (type === "planned") {
        filteredTasks = tasks.filter((task) => {
            const searchMatch = task.children.includes(value);
            if (value) return task.dateSelected && searchMatch;
            return task.dateSelected;
        });

        renderedTasks = filteredTasks.map((task, i) => (
            <TaskItem task={task} id={task.id} key={i}>
                {task.children}
            </TaskItem>
        ));
    }

    function sortArray(array, sortType) {
        if (sortType === "creation" || !sortType) return array;

        if (sortType === "importance") {
            return array.sort((a, b) => {
                return a.important ? 1 : -1;
            });
        }
        if (sortType === "due date") {
            return array.sort((a, b) => {
                return b.date > a.date ? 1 : -1;
            });
        }
        if (sortType === "alphabetically") {
            return array.sort((a, b) => {
                return b.children.localeCompare(a.children);
            });
        }
    }

    filteredTasks = sortArray(filteredTasks, sortType);
    const completedTasks = filteredTasks.filter((task) => task.done);

    if (completedTasks.length) {
        completedTasks.forEach((task) => {
            const index = filteredTasks.indexOf(task);
            filteredTasks.splice(index, 1);
        });
    }
    const renderedCompletedTasks = completedTasks.map((task, i) => (
        <TaskItem task={task} id={task.id} key={i + 10} done>
            {task.children}
        </TaskItem>
    ));

    renderedTasks = filteredTasks.map((task, i) => (
        <TaskItem task={task} id={task.id} key={i}>
            {task.children}
        </TaskItem>
    ));

    return (
        <div className="py-6 px-4 overflow-y-auto h-full">
            {sortType && (
                <div className="flex items-center justify-end text-sm font-medium py-2 px-4 gap-1">
                    {isSortDescending ? (
                        <span
                            onClick={() =>
                                dispatch(changeSortOrder(!isSortDescending))
                            }
                            className="p-1 hover:bg-white cursor-pointer"
                        >
                            <AiOutlineDown />
                        </span>
                    ) : (
                        <span
                            onClick={() =>
                                dispatch(changeSortOrder(!isSortDescending))
                            }
                            className="p-1 hover:bg-white cursor-pointer"
                        >
                            <AiOutlineUp />
                        </span>
                    )}
                    <span>Sorted by {sortType}</span>
                    <span
                        onClick={() => {
                            dispatch(changeSortType(""));
                            dispatch(changeSortOrder(true));
                        }}
                        className="p-1 hover:bg-white cursor-pointer "
                    >
                        <RxCross2 />
                    </span>
                </div>
            )}
            <AddTaskItem />
            {isSortDescending ? renderedTasks.reverse() : renderedTasks}
            {!!completedTasks.length && (
                <>
                    <div className="pb-6 border-b-4 flex items-center">
                        {showCompletedTasks ? (
                            <span
                                onClick={() =>
                                    setShowCompletedTasks(!showCompletedTasks)
                                }
                                className="p-1 mr-2 hover:bg-white cursor-pointer"
                            >
                                <AiOutlineDown />
                            </span>
                        ) : (
                            <span
                                onClick={() =>
                                    setShowCompletedTasks(!showCompletedTasks)
                                }
                                className="p-1 mr-2 hover:bg-white cursor-pointer"
                            >
                                <AiOutlineRight />
                            </span>
                        )}
                        <span className="py-2 font-medium">Completed</span>
                    </div>
                </>
            )}
            {showCompletedTasks && renderedCompletedTasks}
        </div>
    );
}

export default TasksList;
