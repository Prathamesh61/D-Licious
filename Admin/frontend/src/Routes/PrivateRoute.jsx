import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    let token = localStorage.getItem("token")
    useEffect(() => {
        if (!token) {
            return navigate("/login");
        }
    }, []);

    return <>{children}</>;
};

export default PrivateRoute;
