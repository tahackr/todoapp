import TasksHeader from "./Components/TasksHeader";
import TasksList from "./Components/TasksList";
import NavBar from "./Components/NavBar";
import HamburgerMenu from "./Components/HamburgerMenu";
import { useSelector } from "react-redux";
import Route from "./Components/Route";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function App() {
    const isHamburgerOpen = useSelector((state) => state.hamburgerMenu.isOpen);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <>
                <div className="flex flex-col h-screen bg-mainBgColor overflow-hidden">
                    <NavBar />
                    <div className="flex h-full">
                        {isHamburgerOpen && <HamburgerMenu />}
                        <div className="flex flex-col grow">
                            <Route path={""}>
                                <TasksHeader />
                                <TasksList />
                            </Route>
                            <Route path="/myday">
                                <TasksHeader />
                                <TasksList />
                            </Route>
                            <Route path="/important">
                                <TasksHeader type={"important"} />
                                <TasksList type={"important"} />
                            </Route>
                            <Route path="/planned">
                                <div>Planned</div>
                            </Route>
                        </div>
                    </div>
                </div>
            </>
        </LocalizationProvider>
    );
}

export default App;
