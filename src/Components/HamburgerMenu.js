import { RxHamburgerMenu } from "react-icons/rx";
import { WiDaySunny } from "react-icons/wi";
import { AiOutlineStar } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { toggleHamburgerMenu } from "../store";
import { useDispatch, useSelector } from "react-redux";
import Link from "./Link";

function HamburgerMenu() {
    const dispatch = useDispatch();
    const isHamburgerOpen = useSelector((state) => state.hamburgerMenu.isOpen);

    const handleClick = () => {
        dispatch(toggleHamburgerMenu(!isHamburgerOpen));
    };

    return (
        <div className="flex flex-col h-full w-72 bg-white py-6">
            <div onClick={handleClick} className="mb-3 pl-6">
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

            <Link href="/myday" icon="WiDaySunny">
                My Day
            </Link>
            <Link href="/important" icon="AiOutlineStar">
                Important
            </Link>
            <Link href="/planned" icon="IoCalendarOutline">
                Planned
            </Link>
        </div>
    );
}

export default HamburgerMenu;
