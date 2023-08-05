import { useSelector } from "react-redux";

function Route({ path, children }) {
    const currentPath = useSelector((state) => state.path.currentPath);

    if (currentPath === path) {
        return children;
    }
    return null;
}

export default Route;
