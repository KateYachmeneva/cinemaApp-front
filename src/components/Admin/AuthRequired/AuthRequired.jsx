import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function AuthRequired({children}) {
    const {token} = useSelector((state) => state.auth);
    let location = useLocation();

    if (!token) {
        return <Navigate to="/admin/login" state={{from: location}} replace/>;
    }

    return children;
}