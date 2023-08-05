import AddTaskItem from "./AddTaskItem";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";

function TasksList({ type }) {
    const tasks = useSelector((state) => state.tasks);

    const filteredTasks = tasks.filter((task) => task.important);

    const renderedImportantTasks = filteredTasks.map((task, i) => (
        <TaskItem id={task.id} key={i}>
            {task.children}
        </TaskItem>
    ));

    const renderedTasks = tasks.map((task, i) => (
        <TaskItem id={task.id} key={i}>
            {task.children}
        </TaskItem>
    ));

    return (
        <div className="py-6 px-4 overflow-y-auto h-full">
            <AddTaskItem />
            {!type && renderedTasks.reverse()}
            {type === "important" && renderedImportantTasks.reverse()}
        </div>
    );
}

export default TasksList;
