import {
    Box,
    Button,
    Grid,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    useToast,
} from "@chakra-ui/react";
import React, {  useState } from "react";
import Card from "../Components/Box/Card";
import { MdLocationOn } from "react-icons/md";
import { Link,  useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
    USER_SIGNUP_FAILURE,
    USER_SIGNUP_SUCCESS,
} from "../Redux/AuthReducer/actionTypes";
import { store } from "../Redux/store";
import { toastAlert } from "../Components/utils/actions";
let formInitData = {
    name: "",
    email: "",
    password: "",
    address: "",
};

const Signup = () => {
    let [formData, setFormData] = useState(formInitData);
    let navigate = useNavigate();
    const toast = useToast();
    let state = useSelector((state) => state.AuthReducer);
    let subscribe = store.subscribe((state) => state);
    subscribe();
    let dispatch = useDispatch();
    let handleChange = (e) => {
        let { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        console.log(formData);
    };

    let handleSubmit = () => {
        let { name, email, password, address } = formData;

        if (name && email && password && address) {
            axios
                .post("http://localhost:5500/restaurent/signup", {
                    body: formData,
                })
                .then((res) => {
                    console.log(res);
                    if (res.data.status === 404) {
                        toastAlert(toast, res.data.msg, "error");

                        return dispatch({
                            type: USER_SIGNUP_FAILURE,
                            payload: res.data,
                        });
                    } else if (res.data.status === 200) {
                        toastAlert(toast, res.data.msg, "success");
                        setTimeout(() => {
                            return navigate("/login");
                        }, 2000);
                        return dispatch({
                            type: USER_SIGNUP_SUCCESS,
                            payload: res.data,
                        });
                    }
                })
                .catch((err) => {
                    toastAlert(toast, "Somthing went wrong", "error");
                });
        } else {
            toastAlert(toast, "All fields are required!!!", "warning");
        }
    };
    console.log(state);

    return (
        <div>
            <Card
                backgroundColor={"white"}
                margin={"24px auto 0px"}
                padding={"12px 12px"}
                width={"400px"}
                boxShadow={"0 0 10px -6px #D11243"}
            >
                <Heading
                    color={"#D11243"}
                    marginBottom={"4"}
                    textAlign={"center"}
                    as={"h1"}
                >
                    Sign up
                </Heading>
                <Grid gap={"4"}>
                    <Box>
                        <Input
                            onChange={(e) => handleChange(e)}
                            name="name"
                            placeholder="Restaurent Name"
                        />
                    </Box>
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
                        <InputGroup size="md">
                            <Input
                                onChange={(e) => handleChange(e)}
                                name="address"
                                placeholder="Address"
                            />
                            <InputRightElement width="">
                                <Button color={"#D11243"}>
                                    <MdLocationOn />
                                </Button>
                            </InputRightElement>
                        </InputGroup>
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
                    <Link to={"/login"}>AlReady Registered? Login Here</Link>
                </Grid>
            </Card>
        </div>
    );
};

export default Signup;
