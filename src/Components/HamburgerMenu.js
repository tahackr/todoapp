import { RxHamburgerMenu } from "react-icons/rx";
import { toggleHamburgerMenu } from "../store";
import { useDispatch, useSelector } from "react-redux";
import Link from "./Link";

function HamburgerMenu() {
    const dispatch = useDispatch();
    const isHamburgerOpen = useSelector(
        (state) => state.config.isHamburgerOpen
    );

    const handleClick = () => {
        dispatch(toggleHamburgerMenu(!isHamburgerOpen));
    };

    return (
        <div className="flex flex-col h-full w-72 bg-white py-6 shadow-md">
            <div onClick={handleClick} className="mb-3 pl-6">
                <div className="flex">
                    <span className="hover:bg-mainBgColor">
                        <RxHamburgerMenu
                            style={{
                                height: "1.2rem",
                                width: "auto",
                                cursor: "pointer",
                            }}
                        />
                    </span>
                </div>
            </div>
            <ul>
                <li>
                    <Link href="/myday" icon="WiDaySunny">
                        <span>My Day</span>
                    </Link>
                </li>
                <li>
                    <Link href="/important" icon="AiOutlineStar">
                        <span>Important</span>
                    </Link>
                </li>
                <li>
                    <Link href="/planned" icon="IoCalendarOutline">
                        <span>Planned</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default HamburgerMenu;
