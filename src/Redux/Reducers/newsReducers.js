import {
    GET_ALL_NEWS_LOADING,
    GET_ALL_NEWS_SUCCESS,
    GET_ALL_NEWS_ERROR
} from "../Constants/newsConstants";

export const getAllNewsReducers = (state = { loading: false, message: null, newses: [] }, action) => {
    switch (action.type) {
        case GET_ALL_NEWS_LOADING:
            return {
                loading: true,
            }
        case GET_ALL_NEWS_SUCCESS:
            return {
                newses: action.payload.newses,
                loading: false
            }
        case GET_ALL_NEWS_ERROR:
            return {
                message: action.payload.message,
                loading: false
            }
        default:
            return state
    }
}