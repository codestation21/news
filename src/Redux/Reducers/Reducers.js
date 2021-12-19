import { combineReducers } from "redux";
//Reducers
import { signUpReducer, loginReducer, authReducer } from "./authReducer";
import { getAllNewsReducers, getTopHeadlines } from "./newsReducers";

const reducers = combineReducers({
    signup: signUpReducer,
    login: loginReducer,
    auth: authReducer,
    allNews: getAllNewsReducers,
    headlines: getTopHeadlines
});

export default reducers;