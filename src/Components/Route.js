import { useSelector } from "react-redux";

function Route({ path, children, defaultPath }) {
    const currentPath = useSelector((state) => state.path.currentPath);

    if (currentPath === path || defaultPath) {
        return children;
    }
    return null;
}

export default Route;
