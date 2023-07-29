import TasksHeader from "./Components/TasksHeader";
import TasksList from "./Components/TasksList";
import NavBar from "./Components/NavBar";
import HamburgerMenu from "./Components/HamburgerMenu";
import { useSelector } from "react-redux";

function App() {
    const isHamburgerOpen = useSelector((state) => state.hamburgerMenu.isOpen);

    return (
        <div className="flex flex-col h-screen bg-mainBgColor overflow-hidden">
            <NavBar />
            <div className="flex h-full">
                {isHamburgerOpen && <HamburgerMenu />}
                <div className="flex flex-col grow">
                    <TasksHeader />
                    <TasksList />
                </div>
            </div>
        </div>
    );
}

export default App;
