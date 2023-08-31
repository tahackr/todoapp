import { AiOutlineStar } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { WiDaySunny } from "react-icons/wi";
import { useDispatch, useSelector } from "react-redux";
import { changePath, setCalendarValue, setUserSelectedDate } from "../store";

function Link({ href, children, icon }) {
    const currentPath = useSelector((state) => state.path.currentPath);
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(changePath(href));
        dispatch(setUserSelectedDate(false));
        dispatch(setCalendarValue(new Date().getTime()));

        if (href !== currentPath) window.history.pushState({}, "", href);
    };

    return (
        // Use classnames library later for more readable and clean JSX
        <a
            href={href}
            onClick={handleClick}
            className={`flex items-center ${
                currentPath !== href ? "hover:bg-gray-100" : ""
            } ${
                currentPath === href
                    ? "bg-blue-50 border-l-4 border-blue-500"
                    : ""
            }`}
        >
            <div
                className={`max-[650px]:py-4 max-[650px]:pr-2 max-[650px]:pl-6 px-6 py-3 ${
                    currentPath === href && "pl-5"
                }`}
            >
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
