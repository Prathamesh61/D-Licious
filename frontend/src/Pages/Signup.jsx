import { Box, Button, Input, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { AuthSignupReducer } from '../Redux/AuthRedux/reducer';
import "../Style/signup.css";
import { SIGNUP_FAILURE, SIGNUP_SUCCESS, SIGNUP_REQUEST} from "../Redux/AuthRedux/actionType";
import { toastAlert } from "../Components/utils/action"

let formData = {
   email: "",
   mobile: "",
   password: "",
}

const Signup = () => {
   const [data, setData] = useState(formData);
   const navigate = useNavigate();
   const toast = useToast();
   let dispatch = useDispatch();
   const state = useSelector((state) => state.AuthSignupReducer);

   const handleChange = (e) => {
      const {name, value} = e.target;
      setData({
        ...data,
        [name]: value,
      })
      // console.log(data);
   };

   const handleSubmit = () => {
      const { email, mobile, password } = data;
      if(email && mobile && password ){
         axios.post("http://localhost:8080/user/signup",{body: data})
         .then((res) => {
            console.log(res);
            if(res.data.status === 404){
               toastAlert(toast, res.data.msg, "error");
               return dispatch({
                  type: SIGNUP_FAILURE,
                  payload: res.data,
              });
            } else if(res.data.status === 200) {
               toastAlert(toast, res.data.msg, "success");
               setTimeout(() => {
                  return navigate("/login");
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
   }

  return (
    <div className='signup_wrapper'>
        <div className='input_wrapper'>
            <Input variant='flushed'   onChange={(e) => handleChange(e)} name='email' type={"email"}  placeholder='Enter Email Address' />
            <Input variant='flushed'  onChange={(e) => handleChange(e)} name='mobile' type={"number"} placeholder='Enter Mobile Number' />
            <Input variant='flushed'  onChange={(e) => handleChange(e)} name='password' type={"password"} placeholder='Enter Password' />
            <Button  onClick={handleSubmit} colorScheme='red' className='submit_btn'> Sign Up </Button>
        </div>
        <Box w='90%' m="auto">
          <p>Allready have an account? <Link to="/login">Login</Link></p>
        </Box>
    </div>
  )
}

export default Signup