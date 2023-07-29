import { RxHamburgerMenu } from "react-icons/rx";
import { WiDaySunny } from "react-icons/wi";
import { AiOutlineStar } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { toggleHamburgerMenu } from "../store";
import { useDispatch, useSelector } from "react-redux";

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
            <div className="hover:bg-blue-100 flex items-center ">
                <div className="px-6 py-3">
                    <WiDaySunny size="1.2rem" />
                </div>
                <div>My Day</div>
            </div>
            <div className="hover:bg-blue-100 flex items-center">
                <div className="px-6 py-3">
                    <AiOutlineStar size="1.2rem" />
                </div>
                <div>Important</div>
            </div>
            <div className="hover:bg-blue-100 flex items-center">
                <div className="px-6 py-3">
                    <IoCalendarOutline size="1.2rem" />
                </div>
                <div>Planned</div>
            </div>
        </div>
    );
}

export default HamburgerMenu;
