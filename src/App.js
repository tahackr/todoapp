import TasksHeader from "./Components/TasksHeader";
import TasksList from "./Components/TasksList";
import NavBar from "./Components/NavBar";
import HamburgerMenu from "./Components/HamburgerMenu";
import { useDispatch, useSelector } from "react-redux";
import Route from "./Components/Route";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useEffect } from "react";
import { changePath } from "./store";

function App() {
    const isHamburgerOpen = useSelector((state) => state.hamburgerMenu.isOpen);
    const dispatch = useDispatch();

    useEffect(() => {
        const handler = () => dispatch(changePath(window.location.pathname));

        window.addEventListener("popstate", handler);

        return () => {
            window.removeEventListener("popstate", handler);
        };
    });

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <>
                <div className="flex flex-col h-screen bg-mainBgColor overflow-hidden">
                    <NavBar />
                    <div className="flex h-full">
                        {isHamburgerOpen && <HamburgerMenu />}
                        <div className="flex flex-col grow">
                            <Route path={"/"}>
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
