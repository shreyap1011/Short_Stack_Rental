import { useLocation, Navigate, Outlet} from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({}) => {
    const {auth} = useAuth();

    const location = useLocation();

    return (
        auth?.username
            ? <Outlet />
            : <Navigate to="/" state={{from: location}} replace/>
            //: <Navigate to="/" state={{from: location}}/>
    );
}

export default RequireAuth;