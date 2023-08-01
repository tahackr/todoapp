import { AiOutlineStar } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { WiDaySunny } from "react-icons/wi";
import { useDispatch, useSelector } from "react-redux";
import { changePath } from "../store";

function Link({ href, children, icon }) {
    const currentPath = useSelector((state) => state.path.currentPath);
    const dispatch = useDispatch();
    const handleClick = (e) => {
        console.log("taha");
        e.preventDefault();
        dispatch(changePath(href));
        window.history.pushState("popstate", "", href);
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            className={`hover:bg-gray-100 flex items-center ${
                currentPath === href &&
                "hover:bg-blue-100 bg-blue-100 border-l-4 border-blue-500"
            }`}
        >
            <div className={`px-6 py-3 ${currentPath === href && "pl-5"}`}>
                {icon === "WiDaySunny" && <WiDaySunny size="1.2rem" />}
                {icon === "AiOutlineStar" && <AiOutlineStar size="1.2rem" />}
                {icon === "IoCalendarOutline" && (
                    <IoCalendarOutline size="1.2rem" />
                )}
            </div>
            <div>{children}</div>
        </a>
    );
}

export default Link;
