import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AuthSignupReducer } from "./AuthRedux/reducer";
import { reducer as ProductReducer } from "./ProductsRedux/reducer";

const rootReducer = combineReducers({
    AuthSignupReducer,
    ProductReducer
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export {store}
