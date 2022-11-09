import logo from "./logo.svg";
import "./App.css";
import Logo from "./Components/Logo/Logo";
import { useLocation } from "react-router-dom";
import MainRoutes from "./Routes/MainRoutes";
import { Container } from "@chakra-ui/react";
import { useSelector } from "react-redux";

function App() {
    let location = useLocation();
    let state = useSelector(state=>state.AuthReducer);
    console.group(state,"from app")
    return (
        <div className="App">
        
            <Container maxW={"1200px"} height="100%" >
                {location.pathname === "/login" ||
                location.pathname === "/signup" ? (
                    <Logo />
                ) : (
                    ""
                )}
                <MainRoutes />
            </Container>
        </div>
    );
}

export default App;
