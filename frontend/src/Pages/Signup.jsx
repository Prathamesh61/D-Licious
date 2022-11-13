import { Box, Button, Input, useDisclosure, useToast } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { AuthSignupReducer } from "../Redux/AuthRedux/reducer";
import "../Style/signup.css";
import {
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_REQUEST,
  LOGIN_SUCCESS,
} from "../Redux/AuthRedux/actionType";
import { toastAlert } from "../Components/utils/action";

let formData = {
  email: "",
  mobile: "",
  password: "",
};

let loginForMData = {
  email: "",
  password: "",
};

const Signup = () => {
  const [isSignupForm, setIsSignupForm] = useState(false);
  const [data, setData] = useState(formData); // for signup
  const [loginData, setLoginData] = useState(loginForMData); // for login
  const navigate = useNavigate();
  const toast = useToast();
  let dispatch = useDispatch();
  const Rstate = useSelector((state) => state.AuthSignupReducer);

  // *********************
  const hanleRender = () => {
    setIsSignupForm(!isSignupForm);
  };

  useEffect(() => {}, [isSignupForm]);

  // **************

  const handleChange = (e) => {
    if (isSignupForm) {
      const { name, value } = e.target;
      setData({
        ...data,
        [name]: value,
      });
      console.log(data);
    } else {
      const { name, value } = e.target;
      setLoginData({
        ...loginData,
        [name]: value,
      });
      console.log(loginData);
    }
  };

  const handleSubmit = () => {
    if (isSignupForm) {
      const { email, mobile, password } = data;
      if (email && mobile && password) {
        axios
          .post("http://localhost:8080/user/signup", { body: data })
          .then((res) => {
            console.log(res);
            if (res.data.status === 404) {
              toastAlert(toast, res.data.msg, "error");
              return dispatch({
                type: SIGNUP_FAILURE,
                payload: res.data,
              });
            } else if (res.data.status === 200) {
              toastAlert(toast, res.data.msg, "success");
              setTimeout(() => {
                // return navigate("/login");
              }, 2000);
              return dispatch({
                type: SIGNUP_SUCCESS,
                payload: res.data,
              });
            }
          })
          .catch((err) => {
            toastAlert(toast, "Somthing went wrong", "error");
          });
      } else {
        toastAlert(toast, "All fields are required ", "warning");
      }
    } else {
      const { email, password } = loginData;
      if (email && password) {
        axios
          .post("http://localhost:8080/user/login", {
            data: loginData,
          })
          .then((res) => {
            // console.log(res)
            let status = res.data.status;
            console.log(status);
            if (status === 200) {
              toastAlert(toast, "Login Successful", "success");
              localStorage.setItem("token", res.data.token);
              dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
              });
              navigate("/home");
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
    }
  };

  return (
    <div className="signup_wrapper">
      {isSignupForm ? (
        <div className="input_wrapper">
          <Input
            variant="flushed"
            onChange={(e) => handleChange(e)}
            name="email"
            type={"email"}
            placeholder="Enter Email Address"
          />
          <Input
            variant="flushed"
            onChange={(e) => handleChange(e)}
            name="mobile"
            type={"number"}
            placeholder="Enter Mobile Number"
          />
          <Input
            variant="flushed"
            onChange={(e) => handleChange(e)}
            name="password"
            type={"password"}
            placeholder="Enter Password"
          />
          <button
            onClick={handleSubmit}
            className="submit_btn"
          >
            {" "}
            Sign Up{" "}
          </button>
          <div className="para_page">
            <div className="para"> <p>Allready have an acount ?</p> </div> 
            <div className="para_link"> <p onClick={hanleRender}>Sign In</p> </div>
          </div>
          <a href="https://dilicious-admin.vercel.app/login" target="_blank">For D'LICIOUS</a>
        </div>
      ) : (
        <div className="input_wrapper">
          <Input
            variant="flushed"
            onChange={(e) => handleChange(e)}
            name="email"
            type={"email"}
            placeholder="Enter Email Address"
          />
          <Input
            variant="flushed"
            onChange={(e) => handleChange(e)}
            name="password"
            type={"password"}
            placeholder="Enter Password"
          />
          <button
            onClick={handleSubmit}
            className="submit_btn"
          >
            {" "}
            Sign In{" "}
          </button>
          <div className="para_page">
            <div className="para"> <p>Go to Signup page ?</p> </div> 
            <div className="para_link"> <p onClick={hanleRender}>Signup</p> </div>
          </div>
          <a href="https://dilicious-admin.vercel.app/login" target="_blank">For D'LICIOUS</a>
        </div>
      )}
    </div>
  );
};

export default Signup;
