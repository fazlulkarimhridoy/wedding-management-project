/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, reloading } = useContext(AuthContext);
    const location = useLocation()
    if (reloading) {
        return <div className="flex justify-center pt-40"><span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;