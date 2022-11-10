import logo from "./logo.svg";
import "./App.css";
import Logo from "./Components/Logo/Logo";
import { useLocation, useNavigate } from "react-router-dom";
import MainRoutes from "./Routes/MainRoutes";
import { Container } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";

function App() {
    let navigate = useNavigate();
    let url = useLocation();
    let state = useSelector((state) => state.AuthReducer);
    let token = localStorage.getItem("token");
    console.log(token);
    useEffect(() => {
        if (url.pathname === "/") {
            return navigate("/login");
        }
        if (token) {
            return navigate("/dashboard");
        } else {
            return navigate("/login");
        }
    }, []);

    return (
        <div className="App">
                {url.pathname !== "/signup" && url.pathname !== "/login" && (
                    <Navbar />
                )}
                <Container maxW={"100%"} >
                    {url.pathname === "/login" || url.pathname === "/signup" ? (
                        <Logo margin={"auto"} />
                    ) : (
                        ""
                    )}
                    <MainRoutes />
                </Container>
        </div>
    );
}

export default App;
