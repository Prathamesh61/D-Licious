import { Box, Button, Grid, Heading, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import Card from "../Components/Box/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../Redux/store";
import { MdEmail } from "react-icons/md";
import { toastAlert } from "../Components/utils/actions";
import axios from "axios";

const Login = () => {
    let [formData, setFormData] = useState({ email: "", password: "" });
    let state = useSelector((state) => state.AuthReducer);
    let dispatch = useDispatch();
    let toast = useToast();
    let handleChange = (e) => {
        let { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    let handleSubmit = () => {
        let { email, password } = formData;
        if (email && password) {
            axios
                .post("http://localhost:5500/restaurent/login", {
                    data: formData,
                })
                .then((res) => {
                    let status = res.data.status;
                    if (status === 200) {
                        toastAlert(toast, "Login Success", "success");
                    } else if (status === 500) {
                        toastAlert(toast, res.data.msg, "error");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            toastAlert(toast, "All fields are required", "warning");
        }
    };

    return (
        <div>
            <Card
                backgroundColor={"white"}
                margin={"24px auto 0px"}
                padding={"12px"}
                width={"400px"}
                boxShadow={"0 0 10px -6px #D11243"}
            >
                <Heading
                    color={"#D11243"}
                    marginBottom={"4"}
                    textAlign={"center"}
                    as={"h1"}
                >
                    Login
                </Heading>
                <Grid gap={"4"}>
                    <Box>
                        <Input
                            onChange={(e) => handleChange(e)}
                            name="email"
                            type={"email"}
                            placeholder="email"
                        />
                    </Box>
                    <Box>
                        <Input
                            onChange={(e) => handleChange(e)}
                            name="password"
                            type={"password"}
                            placeholder="Password"
                        />
                    </Box>

                    <Box>
                        <Button
                            onClick={handleSubmit}
                            width={"100%"}
                            colorScheme="red"
                        >
                            Sign up
                        </Button>
                    </Box>
                    <Link to={"/signup"}>Not Registered? Click Here</Link>
                </Grid>
            </Card>
        </div>
    );
};

export default Login;
