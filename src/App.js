import NavBar from "./Components/NavBar";
import HamburgerMenu from "./Components/HamburgerMenu";
import { useDispatch, useSelector } from "react-redux";
import Route from "./Components/Route";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useEffect } from "react";
import { changePath } from "./store";
import Tasks from "./Components/Tasks";

function App() {
    const isHamburgerOpen = useSelector(
        (state) => state.config.isHamburgerOpen
    );
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
                                <Tasks />
                            </Route>
                            <Route path="/myday">
                                <Tasks />
                            </Route>
                            <Route path="/important">
                                <Tasks type={"important"} />
                            </Route>
                            <Route path="/planned">
                                <Tasks type={"planned"} />
                            </Route>
                        </div>
                    </div>
                </div>
            </>
        </LocalizationProvider>
    );
}

export default App;
