import { useSelector } from "react-redux";
import TasksHeader from "./TasksHeader";
import TasksList from "./TasksList";

function Tasks({ type }) {
    const value = useSelector((state) => state.config.value);

    return value ? (
        <TasksList searching />
    ) : (
        <>
            <TasksHeader type={type} />
            <TasksList type={type} />
        </>
    );
}

export default Tasks;
