import React from "react";
import { MdDashboard } from "react-icons/md";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivateRoute from "./PrivateRoute";

const MainRoutes = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let token = localStorage.getItem("token");

    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </>
    );
};

export default MainRoutes;
