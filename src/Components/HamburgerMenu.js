import { RxHamburgerMenu } from "react-icons/rx";
import { toggleHamburgerMenu } from "../store";
import { useDispatch, useSelector } from "react-redux";
import Link from "./Link";
import { useEffect } from "react";

function HamburgerMenu() {
    const dispatch = useDispatch();
    const isHamburgerOpen = useSelector(
        (state) => state.config.isHamburgerOpen
    );

    const handleClick = () => {
        dispatch(toggleHamburgerMenu(!isHamburgerOpen));
    };

    useEffect(() => {
        const handler = (e) => {
            if (
                window.innerWidth <= 650 &&
                !e.target.closest(".menu") &&
                !e.target.closest(".menu-closed")
            ) {
                dispatch(toggleHamburgerMenu(false));
            }
        };
        document.body.addEventListener("click", handler, true);
        return () => document.body.removeEventListener("click", handler, true);
    });

    return (
        <div className="menu max-[650px]:w-60 max-[650px]:absolute max-[450px]:w-44 flex flex-col h-full w-72 bg-white py-6 shadow-md z-40">
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
