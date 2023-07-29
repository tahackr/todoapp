import { GoSearch } from "react-icons/go";
import { TfiAgenda } from "react-icons/tfi";

function NavBar() {
    return (
        <div className="flex flex-row bg-navColor px-4 py-2 items-center gap-6">
            <div>
                <TfiAgenda size={"22px"} style={{ color: "#dddddd" }} />
            </div>

            <nav className="grow">
                <div className="flex justify-between items-center gap-4">
                    <a
                        href="/"
                        className="text-white font-semibold hover:underline"
                    >
                        To Do
                    </a>
                    <div className="rounded flex bg-white items-center max-w-sm flex-1">
                        <div>
                            <GoSearch style={{ margin: "0 8px" }} />
                        </div>
                        <input className="rounded p-1.5 outline-none flex-1 text-sm" />
                    </div>
                    <div className="text-white font-semibold">User</div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
