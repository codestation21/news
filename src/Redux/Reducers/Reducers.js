import { combineReducers } from "redux";
//Reducers
import { signUpReducer, loginReducer, authReducer } from "./authReducer";
import { getAllNewsReducers } from "./newsReducers";

const reducers = combineReducers({
    signup: signUpReducer,
    login: loginReducer,
    auth: authReducer,
    allNews: getAllNewsReducers
});

export default reducers;