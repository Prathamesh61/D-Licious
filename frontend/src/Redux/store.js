import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AuthSignupReducer } from "./AuthRedux/reducer";

const rootReducer = combineReducers({
    AuthSignupReducer
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export {store}
