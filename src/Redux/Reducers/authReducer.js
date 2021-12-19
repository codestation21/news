import {
    SIGNUP_SUCCESS,
    SIGNUP_LOADING,
    SIGNUP_ERROR,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    AUTH_SUCCESS,
    AUTH_FAILED
} from "Redux/Constants/authConstant";
import { CLEAR_ERROR } from "Redux/Constants/clearErrorConstant";


export const signUpReducer = (state = { loading: false, success: false, message: null }, action) => {
    switch (action.type) {
        case SIGNUP_LOADING:
            return {
                loading: true,
            }
        case SIGNUP_SUCCESS:
            return {
                loading: false,
                success: true,
                message: "User registration successfull!"
            }
        case SIGNUP_ERROR:
            return {
                loading: false,
                success: false,
                message: action.payload.message
            }
        case CLEAR_ERROR:
            return {
                message: null
            }
        default:
            return state
    }
}

export const loginReducer = (state = { loading: false, success: false, message: null }, action) => {
    switch (action.type) {
        case LOGIN_LOADING:
            return {
                loading: true,
            }
        case LOGIN_SUCCESS:
            return {
                loading: false,
                success: true,
                message: "User login successfull!"
            }
        case LOGIN_ERROR:
            return {
                loading: false,
                success: false,
                message: action.payload.message
            }
        case CLEAR_ERROR:
            return {
                message: null
            }
        default:
            return state
    }
}

export const authReducer = (state = { success: false }, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                success: true
            }
        case AUTH_FAILED:
            return {
                success: false
            }
        default:
            return state
    }
}