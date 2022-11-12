import * as types from "./actionType";
import axios from "axios";


//------------------------------------Profile section 
export const profileRequest = () => {
    return { type: types.PROFILE_REQUEST };
};

export const profileSuccess = (payload) => {
    return { type: types.PROFILE_SUCCESS, payload };
};

export const profileFailure = () => {
    return { type: types.PROFILE_FAILURE };
};

export const getProfileData = () => (dispatch) => {
    dispatch(profileRequest());
    return axios.get("http://localhost:8080/profile/getuser", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }).then((r) => {
        console.log(localStorage.getItem("token"))
        console.log("r", r.data)
        dispatch(profileSuccess(r.data));
    }).catch((e) => {
        dispatch(profileFailure());
    })
}

export const patchProfileData = (payload) => (dispatch) => {
    dispatch(profileRequest());
    console.log(payload, "payload")
    return axios
        .patch("http://localhost:8080/profile/updateuser", payload, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        }).then((r) => {
            console.log(r.data, "post successfull");
            dispatch(profileSuccess(r.data));
            dispatch(getProfileData());
        }).catch((e) => {
            dispatch(profileFailure(e));
        });
};

//--------------------------------------Address section 

export const addressRequest = () => {
    return { type: types.ADDRESS_REQUEST };
};

export const addressSuccess = (payload) => {
    return { type: types.ADDRESS_SUCCESS, payload };
};

export const addressFailure = () => {
    return { type: types.ADDRESS_FAILURE };
};

export const getAddressData = () => (dispatch) => {
    dispatch(addressRequest());
    return axios.get("http://localhost:8080/profile/getaddress", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }).then((r) => {
        console.log("r", r.data)
        dispatch(addressSuccess(r.data));
    }).catch((e) => {
        dispatch(addressFailure());
    })
}
export const postAddressData = (payload) => (dispatch) => {
    dispatch(addressRequest());
    console.log(payload, "payload")
    return axios.post("http://localhost:8080/profile/createaddress", payload, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }).then((r) => {
        console.log(r.data, "post successfull");
        dispatch(addressSuccess(r.data));
        dispatch(getAddressData());
    }).catch((e) => {
        dispatch(addressFailure(e));
    });
};
export const patchAddressData = (id, payload) => (dispatch) => {
    dispatch(addressRequest());
    console.log(payload, "payload")
    return axios.patch(`http://localhost:8080/profile/updateaddress/${id}`, payload, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }).then((r) => {
        console.log(r.data, "patch successfull");
        dispatch(addressSuccess(r.data));
        dispatch(getAddressData());
    }).catch((e) => {
        dispatch(addressFailure(e));
    });
};
export const deleteAddressData = (id) => (dispatch) => {
    dispatch(addressRequest());
    // console.log(payload, "payload")
    return axios.delete(`http://localhost:8080/profile/deleteaddress/${id}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }).then((r) => {
        console.log(r.data, "delete successfull");
        dispatch(addressSuccess(r.data));
        dispatch(getAddressData());
    }).catch((e) => {
        dispatch(addressFailure(e));
    });
};

//-----------------------------------------Cart Section
export const cartRequest = () => {
    return { type: types.CART_REQUEST };
};

export const cartSuccess = (payload) => {
    return { type: types.CART_SUCCESS, payload };
};

export const cartFailure = () => {
    return { type: types.CART_FAILURE };
};


export const getCartData = () => (dispatch) => {
    dispatch(cartRequest());
    return axios.get("http://localhost:8080/profile/getcartprod", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }).then((r) => {
        console.log("r", r.data)
        dispatch(cartSuccess(r.data));
    }).catch((e) => {
        dispatch(cartFailure());
    })
}
export const postCartData = (payload) => (dispatch) => {
    dispatch(cartRequest());
    console.log(payload, "payload")
    return axios.post("http://localhost:8080/profile/createcartprod", payload, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }).then((r) => {
        console.log(r.data, "post successfull");
        dispatch(cartSuccess(r.data));
        dispatch(getCartData());
    }).catch((e) => {
        dispatch(cartFailure(e));
    });
};

export const deleteCartData = (id) => (dispatch) => {
    dispatch(cartRequest());
    // console.log(payload, "payload")
    return axios.delete(`http://localhost:8080/profile/deletecartprod/${id}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }).then((r) => {
        console.log(r.data, "delete successfull");
        dispatch(cartSuccess(r.data));
        dispatch(getCartData());
    }).catch((e) => {
        dispatch(cartFailure(e));
    });
};


//----------------------------------------------------MyOrder
export const myOrdersRequest = () => {
    return { type: types.MYORDERS_REQUEST };
};

export const myOrdersSuccess = (payload) => {
    return { type: types.MYORDERS_SUCCESS, payload };
};

export const myOrdersFailure = () => {
    return { type: types.MYORDERS_FAILURE };
};


export const getMyOrdersData = () => (dispatch) => {
    dispatch(myOrdersRequest());
    return axios.get("http://localhost:8080/profile/getmyorderprod", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }).then((r) => {
        console.log("r", r.data)
        dispatch(myOrdersSuccess(r.data));
    }).catch((e) => {
        dispatch(myOrdersFailure());
    })
}

export const postMyOrdersData = (payload) => (dispatch) => {
    dispatch(myOrdersRequest());
    console.log(payload, "payload")
    return axios.post("http://localhost:8080/profile/createmyorderprod", payload, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }).then((r) => {
        console.log(r.data, "post successfull");
        dispatch(myOrdersSuccess(r.data));
        dispatch(getMyOrdersData());
    }).catch((e) => {
        dispatch(myOrdersFailure(e));
    });
};