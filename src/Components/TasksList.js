import AddTaskItem from "./AddTaskItem";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";

function TasksList() {
    const tasks = useSelector((state) => state.tasks);

    const renderedTasks = tasks.map((task, i) => (
        <TaskItem id={task.id} key={i}>
            {task.children}
        </TaskItem>
    ));
    return (
        <div className="py-6 px-4 overflow-y-auto h-full">
            <AddTaskItem />
            {renderedTasks.reverse()}
        </div>
    );
}

export default TasksList;
