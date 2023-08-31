import { useSelector } from "react-redux";

function Route({ path, children }) {
    const currentPath = useSelector((state) => state.path.currentPath);
    if (Array.isArray(path)) {
        for (const p of path) {
            if (currentPath === p) return children;
        }
    }
    if (currentPath === path) {
        return children;
    }
    return null;
}

export default Route;
