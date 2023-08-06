import ReactDOM from "react-dom";
import { useRef } from "react";
import { removeTask } from "../store";
import { useDispatch } from "react-redux";
function ControlDelete({ task, setIsModalOpen }) {
    const dispatch = useDispatch();
    const backgroundRef = useRef();
    const cancelButtonRef = useRef();
    const handleClose = (e) => {
        if (
            e.target === backgroundRef.current ||
            e.target === cancelButtonRef.current
        )
            setIsModalOpen(false);
    };

    const handleDelete = () => {
        dispatch(removeTask(task.id));
        setIsModalOpen(false);
    };

    return ReactDOM.createPortal(
        <div
            ref={backgroundRef}
            className="fixed inset-0 bg-black/30 z-10 text-sm font-medium"
            onClick={handleClose}
        >
            <div className="absolute flex flex-col justify-between inset-1/2 topz-20 -translate-x-1/2 -translate-y-1/2 bg-white w-72 h-48 p-6 rounded-md shadow-xl">
                <div>{`Are you sure you want to delete "${task.children}"?`}</div>
                <div className="flex gap-2 self-end">
                    <button
                        ref={cancelButtonRef}
                        className="p-2 bg-gray-400/20 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleDelete}
                        className="p-2 bg-red-600 rounded text-white"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default ControlDelete;
