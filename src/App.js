import TasksHeader from "./Components/TasksHeader";
import TasksList from "./Components/TasksList";
import NavBar from "./Components/NavBar";
import HamburgerMenu from "./Components/HamburgerMenu";
import { useSelector } from "react-redux";
import Route from "./Components/Route";

function App() {
    const isHamburgerOpen = useSelector((state) => state.hamburgerMenu.isOpen);

    return (
        <div className="flex flex-col h-screen bg-mainBgColor overflow-hidden">
            <NavBar />
            <div className="flex h-full">
                {isHamburgerOpen && <HamburgerMenu />}
                <div className="flex flex-col grow">
                    <Route path="/myday">
                        <TasksHeader />
                        <TasksList />
                    </Route>
                    <Route path="/important">
                        <div>Important</div>
                    </Route>
                    <Route path="/planned">
                        <div>Planned</div>
                    </Route>
                </div>
            </div>
        </div>
    );
}

export default App;
