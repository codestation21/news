import { createStore, applyMiddleware } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import reducers from "./Reducers/Reducers";

const bindMiddleware = (middleware) => {
    return applyMiddleware(...middleware)
};

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        }
        return nextState;
    } else {
        return reducers(state, action)
    }
};
const initStore = () => {
    return createStore(reducer, bindMiddleware([thunk]))
};
export const wrapper = createWrapper(initStore);