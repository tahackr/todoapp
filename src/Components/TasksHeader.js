import { RxHamburgerMenu } from "react-icons/rx";
import { BiSortAlt2 } from "react-icons/bi";

function TasksHeader() {
    const date = new Date();
    const currentDay = new Intl.DateTimeFormat("tr-TR", {
        day: "numeric",
        month: "long",
        weekday: "long",
    }).format(date);

    return (
        <div className="flex px-4 py-6 justify-between">
            <div className="flex gap-2">
                <div className="hover:bg-white self-start">
                    <RxHamburgerMenu size={"1.2rem"} />
                </div>
                <div>
                    <span className="inline-block font-medium text-xl mb-1.5 leading-3">
                        Günüm
                    </span>
                    <div className="font-light text-sm">{currentDay}</div>
                </div>
            </div>
            <div className="self-center flex gap-1 items-center">
                <BiSortAlt2 />
                Sırala
            </div>
        </div>
    );
}

export default TasksHeader;
