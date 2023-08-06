import AddTaskItem from "./AddTaskItem";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";

function TasksList({ type, searching }) {
    const tasks = useSelector((state) => state.tasks);
    const value = useSelector((state) => state.config.value);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    let renderedTasks;
    if (searching) {
        const filteredTasks = tasks.filter((task) =>
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
        const filteredTasks = tasks.filter((task) => {
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
        const filteredTasks = tasks.filter((task) => {
            const searchMatch = task.children.includes(value);
            if (value) return task.important && searchMatch;
            return task.important;
        });

        renderedTasks = filteredTasks.map((task, i) => (
            <TaskItem task={task} id={task.id} key={i}>
                {task.children}
            </TaskItem>
        ));
    }

    if (type === "planned") {
        const filteredTasks = tasks.filter((task) => {
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

    return (
        <div className="py-6 px-4 overflow-y-auto h-full">
            <AddTaskItem />
            {renderedTasks.reverse()}
        </div>
    );
}

export default TasksList;
