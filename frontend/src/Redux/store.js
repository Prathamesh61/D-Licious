import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AuthSignupReducer } from "./AuthRedux/reducer";
import { reducer as ProductReducer } from "./ProductsRedux/reducer";
import { reducer as ProfileReducer } from "./ProfileRedux/reducer";

const rootReducer = combineReducers({
    AuthSignupReducer,
    ProductReducer,
    ProfileReducer

});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store }
