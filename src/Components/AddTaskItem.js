import { IoMdRadioButtonOff } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";

function AddTaskItem() {
    return (
        <div className="flex items-center gap-3 px-4 py-2 border-b bg-white rounded justify-between">
            <div className="flex items-center gap-4 grow">
                <button className="h-6 w-6" type="button">
                    <IoMdRadioButtonOff
                        style={{
                            height: "100%",
                            width: "auto",
                            color: "rgb(37 100 207)",
                        }}
                    />
                </button>
                <input
                    className="outline-none rounded-md h-10 grow"
                    placeholder="Add Task"
                    type="text"
                />
            </div>
            <div className="flex items-center gap-4">
                <div className="h-7 w-7 p-1 hover:bg-mainBgColor hover:cursor-pointer">
                    <IoCalendarOutline
                        style={{ height: "100%", width: "auto" }}
                    />
                </div>
                <div>
                    <button className="border border-mainBgColor p-1.5 text-xs font-medium">
                        Ekle
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddTaskItem;
