import * as types from "./actionType";
import axios from "axios";

const URL_MAIN = process.env.REACT_APP_MAIN_URL;
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
    return axios.get(URL_MAIN + "/profile/getuser", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }).then((r) => {
        // console.log(localStorage.getItem("token"))
        // console.log("r", r.data)
        dispatch(profileSuccess(r.data));
    }).catch((e) => {
        dispatch(profileFailure());
    })
}

export const patchProfileData = (payload) => (dispatch) => {
    dispatch(profileRequest());
    // console.log(payload, "payload")
    return axios
        .patch(URL_MAIN + "/profile/updateuser", payload, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        }).then((r) => {
            // console.log(r.data, "patch successfull");
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
    return axios.get(URL_MAIN + "/profile/getaddress", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }).then((r) => {
        // console.log("r", r.data)
        dispatch(addressSuccess(r.data));
    }).catch((e) => {
        dispatch(addressFailure());
    })
}
export const postAddressData = (payload) => (dispatch) => {
    dispatch(addressRequest());
    // console.log(payload, "payload")
    return axios.post(URL_MAIN + "/profile/createaddress", payload, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }).then((r) => {
        // console.log(r.data, "post successfull");
        dispatch(addressSuccess(r.data));
        dispatch(getAddressData());
    }).catch((e) => {
        dispatch(addressFailure(e));
    });
};
export const patchAddressData = (id, payload) => (dispatch) => {
    dispatch(addressRequest());
    // console.log(payload, "payload")
    return axios.patch(`${URL_MAIN}/profile/updateaddress/${id}`, payload, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }).then((r) => {
        // console.log(r.data, "patch successfull");
        dispatch(addressSuccess(r.data));
        dispatch(getAddressData());
    }).catch((e) => {
        dispatch(addressFailure(e));
    });
};
export const deleteAddressData = (id) => (dispatch) => {
    dispatch(addressRequest());
    // console.log(payload, "payload")
    return axios.delete(`${URL_MAIN}/profile/deleteaddress/${id}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }).then((r) => {
        // console.log(r.data, "delete successfull");
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
    return axios.get(URL_MAIN + "/profile/getcartprod", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }).then((r) => {
        // console.log("r", r.data)
        dispatch(cartSuccess(r.data));
    }).catch((e) => {
        dispatch(cartFailure());
    })
}
export const postCartData = (payload) => (dispatch) => {
    dispatch(cartRequest());
    // console.log(payload, "payload")
    return axios.post(URL_MAIN + "/profile/createcartprod", payload, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }).then((r) => {
        // console.log(r.data, "post successfull");
        dispatch(cartSuccess(r.data));
        dispatch(getCartData());
    }).catch((e) => {
        dispatch(cartFailure(e));
    });
};

export const deleteCartData = (id) => (dispatch) => {
    dispatch(cartRequest());
    // console.log(payload, "payload")
    return axios.delete(`${URL_MAIN}/profile/deletecartprod/${id}`, {
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

export const EmptyCartRequest = () => {
    return { type: types.EMPTY_CART_REQUEST };
};

export const EmptyCartSuccess = () => {
    return { type: types.EMPTY_CART_SUCCESS };
};

export const EmptyCartFailure = () => {
    return { type: types.EMPTY_CART_FAILURE };
};


export const emptyBasket = (basket) => (dispatch) => {
    // console.log(basket.length,basket, "basket")
    dispatch(EmptyCartRequest());
    {
        basket.map((item) => {
            axios
                .delete(`${URL_MAIN}/profile/deletecartprod/${item._id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    }
                })
                .then((res) => {
                    dispatch(EmptyCartSuccess());
                    dispatch(getCartData());
                    // console.log(res, "basket r");
                })
                .catch((e) => {
                    dispatch(EmptyCartFailure(e));
                });
        })
    }

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
    return axios.get(URL_MAIN + "/profile/getmyorderprod", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }).then((r) => {
        // console.log("ordersData", r.data)
        dispatch(myOrdersSuccess(r.data));
    }).catch((e) => {
        dispatch(myOrdersFailure());
    })
}

export const postMyOrdersData = (payload) => (dispatch) => {
    dispatch(myOrdersRequest());
    // console.log(payload, "payload")
    return axios.post(URL_MAIN + "/profile/createmyorderprod", payload, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }).then((r) => {
        // console.log(r.data, "post successfull");
        dispatch(myOrdersSuccess(r.data));
        dispatch(getMyOrdersData());
    }).catch((e) => {
        dispatch(myOrdersFailure(e));
    });
};