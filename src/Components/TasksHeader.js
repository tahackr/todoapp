import { RxHamburgerMenu } from "react-icons/rx";
import { BiSortAlt2 } from "react-icons/bi";
import { toggleHamburgerMenu } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { WiDaySunny } from "react-icons/wi";
import { AiOutlineStar } from "react-icons/ai";

function TasksHeader({ type }) {
    const dispatch = useDispatch();
    const isHamburgerOpen = useSelector((state) => state.hamburgerMenu.isOpen);

    const handleToggleHamburger = () => {
        dispatch(toggleHamburgerMenu(!isHamburgerOpen));
    };

    const date = new Date();
    const currentDay = new Intl.DateTimeFormat("en-UK", {
        day: "numeric",
        month: "long",
        weekday: "long",
    }).format(date);

    return (
        <div className="flex p-6 justify-between">
            <div className="flex gap-2">
                {isHamburgerOpen ? (
                    <div className="self-start">
                        {!type && <WiDaySunny size="1.2rem" />}
                        {type === "important" && (
                            <AiOutlineStar size="1.2rem" />
                        )}
                    </div>
                ) : (
                    <div
                        onClick={handleToggleHamburger}
                        className="hover:bg-white self-start"
                    >
                        <RxHamburgerMenu size={"1.2rem"} />
                    </div>
                )}

                <div>
                    <span className="inline-block font-medium text-xl mb-1.5 leading-3">
                        {!type && "My Day"}
                        {type === "important" && "Important"}
                    </span>
                    {!type && (
                        <div className="font-light text-sm">{currentDay}</div>
                    )}
                </div>
            </div>
            <div className="self-center flex gap-1 items-center">
                <BiSortAlt2 />
                Sort
            </div>
        </div>
    );
}

export default TasksHeader;
