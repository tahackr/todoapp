import TasksHeader from "./Components/TasksHeader";
import TasksList from "./Components/TasksList";
import NavBar from "./Components/NavBar";

function App() {
    return (
        <div className="flex flex-col h-screen bg-mainBgColor overflow-hidden">
            <NavBar />
            <TasksHeader />
            <TasksList />
        </div>
    );
}

export default App;
